
const btn = document.getElementById('btn');
const htext = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
htext.textContent  = 'ボタンをクリックしました';

});