const imagePaths = [
    'summary/コーヒーの健康長寿力/1.png',
    'summary/コーヒーの健康長寿力/2.png',
    'summary/コーヒーの健康長寿力/3.png',
    'summary/コーヒーの健康長寿力/4.png',
    'summary/コーヒーの健康長寿力/5.png',
 
];

let currentSlideIndex = 0;

function createSlideShow() {
    const slideshowContainer = document.getElementById('slideshow-container');
    slideshowContainer.innerHTML = '';  // 既存のスライドショーをリセット

    const img = document.createElement('img');
    img.src = imagePaths[currentSlideIndex];  // 初期の画像パスを指定
    img.classList.add('img-fluid');
    img.alt = 'スライド画像';
    slideshowContainer.appendChild(img);
}

// 次のスライドに進む
function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % imagePaths.length;
    createSlideShow();
}

// 前のスライドに戻る
function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + imagePaths.length) % imagePaths.length;
    createSlideShow();
}

// ボタンのクリックイベントを設定
document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

// 初期スライドショーを作成
createSlideShow();
