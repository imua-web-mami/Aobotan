// loading

$(function () {
  var webStorage = function () {
    if (sessionStorage.getItem('access')) {
      /*
        2回目以降アクセス時の処理
      */
      $(".loading").addClass('is-active');
    } else {
      /*
        初回アクセス時の処理
      */
      sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
      $(".loading-animation").addClass('is-active'); // loadingアニメーションを表示
      setTimeout(function () {
        // ローディングを数秒後に非表示にする
        $(".loading").addClass('is-active');
        $(".loading-animation").removeClass('is-active');
      }, 3000); // ローディングを表示する時間
    }
  }
  webStorage();
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

// 別ページにリンクで飛んでスクロール
// ハッシュを取得
var urlHash = location.hash;
// ハッシュが存在する時
if (urlHash) {
  // スクロール先を取得
  var target = jQuery(urlHash);
  // スクロール先が存在する時
  if (target.length) {
    // ページトップから開始（ブラウザ差異を考慮して併用）
    history.replaceState(null, '', window.location.pathname); // ハッシュを削除
    jQuery("html,body").stop().scrollTop(0); // ページトップへジャンプ

    // ページを読み込んで処理
    jQuery(window).on("load", function () {
      // ヘッダーの高さを取得
      var headerHeight = jQuery("header").outerHeight();
      // スクロール先の位置を計算（ヘッダーと任意の高さを引く）
      var position = target.offset().top - headerHeight - 20;
      // スクロール実行（500ミリ秒、swing指定）
      jQuery("html, body").animate({ scrollTop: position }, 500, "swing");

      // ハッシュを再設定
      history.replaceState(null, '', window.location.pathname + urlHash);
    });
  }
}

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
	spaceBetween: 16,
  speed: 6000, // ループの時間
  allowTouchMove: false, // スワイプ無効
  autoplay: {
    delay: 0, // 途切れなくループ
  },
  breakpoints: {
    1024: {
      spaceBetween: 48,
    }
  }
});

// News モーダル

MicroModal.init({
	openClass: 'is-open',
	disableScroll: true,
});

document.addEventListener('DOMContentLoaded', function() {
  let scrollPosition = 0;

  // モーダルが開かれた時の処理
  function openModal() {
      scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition}px`;
      document.body.style.width = '100%';
  }

  // モーダルが閉じられた時の処理
  function closeModal() {
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, scrollPosition);
  }

  // Micromodalのイベントリスナーを追加
  MicroModal.init({
      onShow: openModal, // モーダルが開かれた時にopenModalを実行
      onClose: closeModal // モーダルが閉じられた時にcloseModalを実行
  });
});

// form 全て入力したら有効にする

// form 全て入力したら送信ボタンを機能させる

document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contactForm");
  const submitButton = document.getElementById("js-submit");

  contactForm.addEventListener("input", function() {
    update(contactForm, submitButton);
  });

  function update(form, button) {
    const isRequired = form.checkValidity();
    if (isRequired) {
      button.style.opacity = 1;
      button.style.cursor = "pointer";
    } else {
      button.style.opacity = 0.2;
      button.style.cursor = "default";
    }
  }
});