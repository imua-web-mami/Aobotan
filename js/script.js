// ヘッダーの高さ分だけコンテンツを下げる
$(function () {
  const height = $(".js-header").height();
  $("main").css("margin-top", height);
});
// ページ内スクロール
$(function () {
  // ヘッダーの高さ取得
  const headerHeight = $(".js-header").height();
  $('a[href^="#"]').click(function () {
    const speed = 600;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    // ヘッダーの高さ分下げる
    let position = target.offset().top - headerHeight;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

// loading

// $(window).on('load',function(){
//   $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
//   $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
// });

$(function () {
  var webStorage = function () {
    if (sessionStorage.getItem('access')) {
      /*
        2回目以降アクセス時の処理
      */
      $("#splash").addClass('is-active');
    } else {
      /*
        初回アクセス時の処理
      */
      sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
      $(".fadeUp").addClass('is-active'); // loadingアニメーションを表示
      setTimeout(function () {
        // ローディングを数秒後に非表示にする
        $("#splash").addClass('is-active');
        $(".fadeUp").removeClass('is-active');
      }, 3000); // ローディングを表示する時間
    }
  }
  webStorage();
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
	$("body").toggleClass("is-scroll");
});

$(".g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
	$(".menu-btn").removeClass('active');//ボタンの activeクラスを除去し
	$(".g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
	$("body").removeClass("is-scroll");
});

// resizeイベント
$(window).on('resize', function() {
	if (window.matchMedia("(min-width: 820px)").matches) {
			$(".menu-btn").removeClass("active");
			$(".g-nav").removeClass("panelactive");
			$("body").removeClass("is-scroll");
	}
});

// about swiperスライドショー

const swiper = new Swiper(".swiper", {
  loop: true, // ループ有効
  slidesPerView: 'auto', // 一度に表示する枚数
	spaceBetween: 48,
  speed: 6000, // ループの時間
  allowTouchMove: false, // スワイプ無効
  autoplay: {
    delay: 0, // 途切れなくループ
  },
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