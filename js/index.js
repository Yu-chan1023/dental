$(function() {

  $(window).on('load',function () {
    // ローディングが10秒以内で終わる場合、読み込み完了後ローディング非表示
    endLoading();
  });
  //10秒経過した段階で、上記の処理を上書き、強制終了
  setTimeout('endLoading()', 10000);
  //ローディング非表示処理
  function endLoading(){
    // 1秒かけてロゴを非表示にし、その後0.8秒かけて背景を非表示にする
    $('.loading-wrapper').fadeOut(1000)
  }

  let open = false;
  let btn = document.getElementById('menu-btn');
  btn.addEventListener('click', () => {
    if (open === false) {
      $('.menu-btn div').addClass('open');
      $('.menu-btn div').removeClass('close');
      slide = new TimelineMax();
      slide.addLabel('slide')
           .to('.lists', .8, {x: 0}, 'slide')
           .to('.listImage', .8, {width: "50%"}, 'slide+=1')
           .to('.overlay', .8, {width: "100%"}, 'slide+=1.5')
           .staggerTo('.list ul li a', 1, {y: 0}, 0.2, 'slide+=.5')
    } else {
      $('.menu-btn div').removeClass('open');
      $('.menu-btn div').addClass('close');
      slide = new TimelineMax();
      slide.addLabel('slide')
           .staggerTo('.list ul li a', 1, {y: 100}, 0.2, 'slide')
           .to('.overlay', .8, {width: "0"}, 'slide')
           .to('.listImage', .8, {width: "0"}, 'slide+=.8')
           .to('.lists', .8, {x: "-100%"}, 'slide+=1.8')
    }
    open =! open
  })
})