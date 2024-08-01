// header アコーディオン
//アコーディオンをクリックした時の動作
$('.title').on('click', function() {//タイトル要素をクリックしたら
  $('.box').slideUp(500);//クラス名.boxがついたすべてのアコーディオンを閉じる
    
  var findElm = $(this).next(".box");//タイトル直後のアコーディオンを行うエリアを取得
    
  if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
    $(this).removeClass('close');//クラス名を除去    
  }else{//それ以外は
    $('.close').removeClass('close'); //クラス名closeを全て除去した後
    $(this).addClass('close');//クリックしたタイトルにクラス名closeを付与し
    $(findElm).slideDown(500);//アコーディオンを開く
  }
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function(){
  $('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
  $(".open").each(function(index, element){ //openクラスを取得
    var Title =$(element).children('.title'); //openクラスの子要素のtitleクラスを取得
    $(Title).addClass('close');       ///タイトルにクラス名closeを付与し
    var Box =$(element).children('.box'); //openクラスの子要素boxクラスを取得
    $(Box).slideDown(500);          //アコーディオンを開く
  });
});



Resources
document.addEventListener('DOMContentLoaded', function () {
	const swiper = new Swiper('.swiper', {
		direction: 'horizontal',
		loop: true,
		autoplay: true,
		slidesPerView: auto, 
  	spaceBetween: 48, // スライド間の余白（px）

		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				slidesPerGroup: 1,
			},
			// when window width is >=  ~ px
			820: {
				slidesPerView: 2,
				spaceBetween: 0
			}
		},
	});
});


// service 画像疑似要素

document.addEventListener("DOMContentLoaded", function() {
	const serviceItems = document.querySelectorAll(".service__img-box");
	serviceItems.forEach((item, index) => {
			item.setAttribute("data-number", ("0" + (index + 1)).slice(-2));
	});
});


// News モーダル

MicroModal.init({
  openClass: 'is-open',
  disableScroll: true,
});

document.addEventListener("DOMContentLoaded", function() {
	MicroModal.init({
			onShow: modal => {
					// モーダルが表示されたときにスクロール位置をリセット
					const modalContent = modal.querySelector('.modal__content');
					if (modalContent) {
							modalContent.scrollTop = 0;
					}
			}
	});
});