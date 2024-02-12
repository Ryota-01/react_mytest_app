import React from 'react'
import './page.css';

export default function page() {

  return (
    <div id="pdf-id">
      <h1>PDFに変換</h1>
      <table>
        <thead>
          <tr>
            <th>日付</th>
            <th>内容</th>
            <th>摘要</th>
            <th>備考</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>2020/01/01</th>
            <td>テスト</td>
            <td>テスト</td>
            <td>テスト</td>
          </tr>
          <tr>
            <th>2020/01/01</th>
            <td>テスト</td>
            <td>テスト</td>
            <td>テスト</td>
          </tr>
          <tr>
            <th>2020/01/01</th>
            <td>テスト</td>
            <td>テスト</td>
            <td>テスト</td>
          </tr>
          <tr>
            <th>2020/01/01</th>
            <td>テスト</td>
            <td>テスト</td>
            <td>テスト</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
