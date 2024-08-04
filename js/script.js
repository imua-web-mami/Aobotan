// header アコーディオン
$('.accodion .menu>li').find('ul').hide();

$('.accodion .menu>li').hover(function () {
	$(this).children('.sub-menu').stop().slideDown(500);
}, function () {
	$(this).children('.sub-menu').stop().slideUp(500);
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
			delay: 0, // スライドが切り替わる間隔（ミリ秒）
			disableOnInteraction: false, // ユーザーが操作しても自動再生を無効にしない
		},
		speed: 6000, // トランジションのスピード（ミリ秒）
		slidesPerView: 'auto', // 'auto'の場合、適切なCSSスタイルが必要
		spaceBetween: 48, // スライド間の余白（px）
		// breakpoints: {
		// 	320: {
		// 		slidesPerView: 1,
		// 		spaceBetween: 0,
		// 		slidesPerGroup: 1,
		// 	},
		// 	820: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 0
		// 	}
		// },
	});
});


// service 画像疑似要素

document.addEventListener("DOMContentLoaded", function () {
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

document.addEventListener("DOMContentLoaded", function () {
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