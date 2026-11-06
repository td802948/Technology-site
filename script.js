// HTMLの要素を取得
const countElement = document.getElementById('count');
const button = document.getElementById('btn');

let count = 0;

// ボタンがクリックされた時の処理
button.addEventListener('click', () => {
  count++;
  countElement.textContent = count;
});
