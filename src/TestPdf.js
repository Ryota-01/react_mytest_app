import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function usePdf() {
  const pdfDownloadHandler = () => {
    //pdfファイルに変換したいコンポーネントのidを検索してDOM要素を取得する
    const target = document.getElementById("pdf-id");
    if (target === null) return;

    html2canvas(target, { scale: 0.5 }).then((canvas) => {
      // HTML要素をキャプチャしてCanvasに変換
      const imgData = canvas.toDataURL("image/svg", 1.0);
      // jaPDFオブジェクトを作成
      let pdf = new jsPDF();

      const centerX = pdf.internal.pageSize.width / 2;
      const centerY = pdf.internal.pageSize.height / 2;

      // canvasから取得した画像データをPDFに追加
      pdf.addImage(
        imgData,
        "SVG", //画像形式
        centerX - canvas.width / 2, // X座標
        centerY - canvas.height / 2, // Y座標
        canvas.width, //画像の幅
        canvas.height //画像の高さ
      );
      // 生成したPDFを保存
      pdf.save(`test.pdf`);
    });
  };

  //canvasを使わないパターン（ローカルストレージ（サーバー）からデータ取得

  // const data = localStorage.getItem("2024-2-12-attendance");
  // const parsedDate = JSON.parse(data);
  // console.log(parsedDate.data);

  function generatePDFFromLocalStorage() {
    const localStorageData = localStorage.getItem("2024-2-12-attendance");
    const parsedLocalStorageData = JSON.parse(localStorageData);

    const pdf = new jsPDF();
    pdf.setFont("helvetica", "helvetica", "normal");
    pdf.text(
      `${parsedLocalStorageData.data}
      ${parsedLocalStorageData.clockIn}
      ${parsedLocalStorageData.clockOut}
      ${parsedLocalStorageData.breakTime}`,
      10,
      20,
      { fontSize: 12 }
    );
    pdf.save("localStorage_data.pdf");
  }
  return (
    <div>
      <button type="button" onClick={generatePDFFromLocalStorage}>
        ダウンロード
      </button>
    </div>
  );
}
