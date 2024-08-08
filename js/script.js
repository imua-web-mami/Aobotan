// loading

$(window).on('load',function(){
  $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});


// header アコーディオン

$(document).ready(function () {
	// 初期状態で全てのサブメニューを非表示にする
	$('.accodion .menu>li').find('ul').hide();

	// アコーディオンのタイトルをホバーした時の処理
	$('.accodion .menu>li').hover(function () {
			var parentLi = $(this).closest('li');
			// サブメニューを開いてopenクラスを追加
			parentLi.children('.sub-menu').stop().slideDown(500);
			parentLi.addClass('open');
	}, function () {
			// サブメニューを閉じてopenクラスを削除
			var parentLi = $(this).closest('li');
			parentLi.children('.sub-menu').stop().slideUp(500);
			parentLi.removeClass('open');
	});
});

// header g-nav

$(".menu-btn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
	$(".g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$(".g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
	$(".menu-btn").removeClass('active');//ボタンの activeクラスを除去し
	$(".g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

// about swiperスライドショー

document.addEventListener('DOMContentLoaded', function () {
	const swiper = new Swiper('.swiper', {
		direction: 'horizontal',
		loop: true,
		autoplay: {
			delay: 1000, // スライドが切り替わる間隔（ミリ秒）
			disableOnInteraction: false, // ユーザーが操作しても自動再生を無効にしない
		},
		speed: 5000, // トランジションのスピード（ミリ秒）
		slidesPerView: 'auto', // 'auto'の場合、適切なCSSスタイルが必要
		spaceBetween: 48, // スライド間の余白（px）
	});
});

// News モーダル

MicroModal.init({
	openClass: 'is-open',
	disableScroll: true,
});

document.addEventListener("DOMContentLoaded", function () {
	MicroModal.init({
		onShow: modal => {
			// モーダルが表示されたときにスクロール位置をリセット
			const modalContent = modal.querySelector('.modal__container');
			if (modalContent) {
				modalContent.scrollTop = 0;
			}
		}
	});
});