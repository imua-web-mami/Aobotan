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

$(function () {
  var hash = location.hash;
  if(hash) {
    var target = $('[data-id="'+hash+'"]');//offset()を使うためjQueryオブジェクト化
    if(!target.length) return;/* targetがなかったときはそれ以降の処理をしない */
    // 移動先を数値で取得
    $(window).on('load',function(){
      history.replaceState('','','./');/* 再読み込みしたときにスムーススクロールしないようにhashを取り除く */

      //loadの中に書くことで、画像を読み込んだ後に実行されるようになる
      //loadの中に書かないと画像が読み込まれる前にoffset().topしてしまうため、正しい位置にならない
      var position = target.offset().top;
      //headerの高さ
      var headerHeight = $('#header').innerHeight();


      position = position - headerHeight;

      // スムーススクロール
      $('body,html').animate({scrollTop:position}, 300, 'swing');

    });
  }
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