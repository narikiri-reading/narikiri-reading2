<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $comments = $_POST['comments'];

    // Excelファイルへの書き込み処理
    require 'vendor/autoload.php'; // PHPExcelやPhpSpreadsheetライブラリの読み込み

    // Excelファイルのパス
    $file = 'date.xlsx';
    
    // PHPSpreadsheetオブジェクトの作成
    $spreadsheet = \PhpOffice\PhpSpreadsheet\IOFactory::load($file);
    $sheet = $spreadsheet->getActiveSheet();

    // データの書き込み（次の空行に追加）
    $lastRow = $sheet->getHighestRow() + 1;
    $sheet->setCellValue('A' . $lastRow, $name);
    $sheet->setCellValue('B' . $lastRow, $email);
    $sheet->setCellValue('C' . $lastRow, $comments);

    // 保存
    $writer = \PhpOffice\PhpSpreadsheet\IOFactory::createWriter($spreadsheet, 'Xlsx');
    $writer->save($file);

    // 送信完了メッセージ
    echo "ありがとうございます。コメントを送信しました。";
}
?>
