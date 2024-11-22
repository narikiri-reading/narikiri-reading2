document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const menuLinks = document.getElementById("menuLinks");
    const closeMenuBtn = document.getElementById("closeMenuBtn");
    
    // オーバーレイ要素を作成
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    // メニュー表示・非表示とオーバーレイの表示・非表示を切り替える
    menuToggle.addEventListener("click", function () {
        // メニューを表示
        menuLinks.style.display = "block";
        // オーバーレイを表示
        document.body.appendChild(overlay);
        overlay.style.display = "block";
        
        // 最初の☰ボタンを非表示にし、メニュー内の☰ボタンを表示
        menuToggle.style.display = "none";
    });

    // メニュー内の☰ボタンでメニューを閉じる
    closeMenuBtn?.addEventListener("click", function () {
        // メニューを非表示
        menuLinks.style.display = "none";
        // オーバーレイを非表示
        overlay.style.display = "none";
        
        // オーバーレイがある場合は削除
        if (overlay.parentNode) {
            overlay.parentNode.removeChild(overlay);
        }
        
        // 最初の☰ボタンを表示
        menuToggle.style.display = "block";
    });

    // オーバーレイがクリックされたらメニューを閉じる
    overlay.addEventListener("click", function () {
        menuLinks.style.display = "none";
        overlay.style.display = "none"; // オーバーレイを非表示
        // オーバーレイがある場合は削除
        if (overlay.parentNode) {
            overlay.parentNode.removeChild(overlay);
        }
        
        // 最初の☰ボタンを表示
        menuToggle.style.display = "block";
    });
});
