$(function () {
    // slickを利用してカルーセルを実装する
    $('.slider').slick({
      arrows: false,
      dots: true,
      autoplay: true,
      fade: true,
      speed: 1500,
      pauseOnHover: false
    });

      // リンクのホバー時に不透明度をアニメーションで変更する
  $('a').hover(
    function () {
      $(this).animate({ 'opacity': 0.6 }, 300);
    },
    function () {
      $(this).animate({ 'opacity': 1.0 }, 300);
    }
  );