/*スライドで使う複数の画像を変数の配列に格納
スライドショーを実装する際に使うカウント用の変数も作成*/
const images= ["https://placehold.jp/3d4070/ffffff/2400x800.png", "https://placehold.jp/d31759/ffffff/2400x800.png", "https://placehold.jp/17d372/ffffff/2400x800.png", "https://placehold.jp/e1fd0d/ffffff/2400x800.png"];
let slideCount= 0;


/*ボタン用の変数を作成の為
id取得で変数に格納*/
const prev = document.getElementById('prev');
const next = document.getElementById('next');
/*クリックイベントの作成*/
next.addEventListener('click', function () {
  /*カウントをひとつずつ増やす*/
  slideCount++;
  clearInterval(timer);
  timer = setInterval(auto, 5000);
  /*スライド用のカウントの数が、スライド画像の総数よりも少ない
  という条件を作る事で画像の総数が上限のスライドを作成出来る*/
  if (slideCount < images.length) {
    /*getElementById('img')にimages[slideCount]の値を代入*/
    document.getElementById('img').src = images[slideCount];
  }
  else {
    document.getElementById('img').src = images[0];
    slideCount = 0;
  }
})
prev.addEventListener('click', function () {
  /*カウントをひとつずつ減らす*/
  slideCount--;
  clearInterval(timer);
  timer = setInterval(auto, 5000);
  /*nextと同じ設定にすると最初のスライド画像の後退ボタンを押すと、
  slideCountの値が-1になり最後のスライド画像が表示されない。
  その回避でelse文で-1以下の設定をしたいので、
  カウント用の変数の数値が0以上という条件を設定*/
  if (slideCount >= 0) {
    document.getElementById('img').src = images[slideCount];
  }
  else {
    document.getElementById('img').src = images[images.length - 1];
    /*slideCountにimages.length – 1という配列の最後に値する数値を格納
    これにより最初のスライド画像のprevボタンをクリックすると最後のスライド画像が表示されるしくみ*/
    slideCount = images.length - 1;
  }
})


/*自動スライド*/
let timer;
timer = setInterval(auto, 5000);
function auto() {
  slideCount++;
  if (slideCount < images.length) {
    document.getElementById('img').src = images[slideCount];
  }
  else {
    document.getElementById('img').src = images[0];
    slideCount = 0;
  }
}

/*memo
■setTimeout関数
関数が実行されてから指定した時間が経過した後に特定の動作を実行する。※時計の時間指定ではない
■setInterval関数
何度も動作させたい場合はこちらを使う。


setInterval(() => { (処理) }, 数値);を使うと自動で処理が実行される
アロー関数
setIntervalは数値を設定することで、その数値の時間ごとに処理が実行するメソッド
const auto = setInterval(() => {
  slideCount++;
  if (slideCount < images.length) {
    document.getElementById('img').src = images[slideCount];
  }
  else {
    document.getElementById('img').src = images[0];
    slideCount = 0;
  }
}, 5000);
*/