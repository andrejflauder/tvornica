
    function yz_roll_banner(){
  $('.boxImgWrap').append($('.boxImgWrap div:first').clone());
  var i = 0;
  // roll function
  function banner(){
    $('.boxImgWrap').stop().animate({'left':-i*500+'px'},500);
    if(i==$('.boxImgWrap div').length){
      i=0;
      $('.boxImgWrap').animate({'left':'0px'},1);
    }
    $('.boxBottomNav a').eq(i).css('background-color','#f00').siblings().css('background-color','rgba(200,200,200,0.5)');
  } 
  // next/prev button
  $('.box').append('<div class="roll prev"><img src="left-arrow.svg"></div><div class="roll next"><img src="right-arrow.svg"></div>');

  $('.prev').click(function(){
    if(i==0){
      i=$('.boxImgWrap div').length;
      $('.boxImgWrap').css('left',-i*50+'vw');
    }
    i--;
    banner();
  })
  $('.next').click(function(){
    i++;
    banner();
  })  
}
   yz_roll_banner();
