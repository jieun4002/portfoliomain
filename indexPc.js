$(function(){
  let userAgent = navigator.userAgent;

  //스마트폰 구분
  let smartPhone = ['iphone', 'ipad', 'android'];
  for(let i in smartPhone) {
    //.toLowerCase();소문자로 변환
    if(navigator.userAgent.toLowerCase().match(new RegExp(smartPhone[i]))) {
      location = 'http://jieun4002.dothome.co.kr/indexM.html';
    }
  }
  $('.marquee').marquee({
    speed: 100,
    gap: 50,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    pauseOnHover: true
  });
  $('.marquee_1').marquee({
    speed: 100,
    gap: 50,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    pauseOnHover: true
  });
  // a 속성
  $('a[href="#"]').on('click',function(e){
    e.preventDefault();
  });
  
  // about me 영역
  $('.about_wrap .menu li > .about li:first-child').on('click',function(){
    $(this).nextAll().slideToggle();
    $('.about_wrap .menu .career').slideToggle();
  });
  $('.about_wrap .menu .career > li:first-child').on('click',function(){
    $(this).nextAll().slideToggle();
  });

  // btn 클릭
  $('.about_wrap .btn_me').on('click',function(){
    $('.about_wrap .about_list').stop().toggle('slow');
  });
  $('.about_wrap .btn_me').on('click',function(){
    $('.about_img img').stop().toggle();
  });

  //skill 영역
  $('.skill_marquee').marquee({
    speed: 100,
    gap: 50,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    pauseOnHover: true
  });
  // skill
  $('.skill .skill_list a').on('click',function(){
    $(this).next().stop().slideToggle();
  });
  $('.skill .skill_list a').on('click',function(){
    $(this).parent().siblings().children('ul').stop().slideUp();
  });
  // project marquee
  $('.project_marquee').marquee({
    speed: 100,
    gap: 50,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    pauseOnHover: true
  });
  $('.skill .click_here').on('click',function(){
    $('.skill .gif_box').css('display', 'block');
  });
   

  //하단 화살표
  $('#up').on('click',function(){
    $('html,body').animate({
      scrollTop:0
    },1000);
  });
  $(window).scroll(function(){
    let wscroll = $(window).scrollTop();
    console.log('scrollTop: '+ wscroll);
    let obj = $('.contact').offset().top - $(window).height();
    console.log('offset: '+ obj) 

    if( 2400 < wscroll ){
      $('#up').animate({right:0},300)
    } else {// 
      $('#up').stop(1,1).animate({right:-300},200)
    }
   });
  

});