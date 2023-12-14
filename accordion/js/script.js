//accordion__itemクラスを持つ要素をすべて取得
const accordionItems = document.querySelectorAll('.accordion__item');
//forEachで繰り返し処理
//accordion__btnとaccordion__contentsクラスの要素を定数に格納
accordionItems.forEach(item => {
  const btn = item.querySelector('.accordion__btn');
  const content = item.querySelector('.accordion__contents');

  btn.addEventListener('click', () => {
    content.classList.toggle('active');
    btn.classList.toggle('active');
  });
});


/*memo
■querySelectorAll()
同一のCSSセレクターが付いた要素を全て配列で格納することが出来る。
iQueryでの　$('')　と同じ
■item =>
functtion(item)をアロー関数にしたもの
■classList
要素のクラス名を追加、削除、参照を可能にするプロパティ
*/