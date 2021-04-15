

$(function(){
  //scroll
  $('.marquee').marquee({
    speed: 100,
    gap: 50,
    delayBeforeStart: 0,
    direction: 'left',
    duplicated: true,
    pauseOnHover: true
  });

//about me
$('.menu li').eq(0).on('click',function(){
  $('.about_me').slideDown()
  });
  $('.about_me h4').on('click',function(){
    $('.about_me').slideUp()
  });

$('.menu li').eq(1).on('click',function(){
  $('.career').slideDown()
});
$('.career h4').on('click',function(){
  $('.career').slideUp()
});


  // touch button 영역
  $('.btn').on('click',function(){
    $(this).css('display','none')
    $('.img_box').css('display','none')
    $('.commu').css('display','block')
  });
  $('.commu h4').on('click',function(){
    $('.commu').css('display','none')
   $('.care').css('display','block') 
  });
  $('.care h4').on('click',function(){
    $('.faith').css('display','block')
    $('.care').css('display','none')
  });
  $('.faith').on('click',function(){
    $(this).css('display','none')
    $('.img_box').css('display','block')
    $('.btn').css('display','block')
  })

  //skill 영역
  $('.list_box > li').eq(0).on('click',function(){
     $('.html').stop().slideToggle()
      $('.html').nextAll().stop().slideUp()
  });
  $('.html').on('click',function(){
    $(this).slideUp()
  });
  $('.list_box > li').eq(1).on('click',function(){
    $('.java').stop().slideToggle()
    $('.java').nextAll().stop().slideUp()
  });
  $('.java').on('click',function(){
    $(this).slideUp()
  });
  $('.list_box > li').eq(2).on('click',function(){
    $('.xd').stop().slideToggle()
    $('.xd').nextAll().stop().slideUp()
  });
  $('.xd').on('click',function(){
    $(this).slideUp()
  });
  $('.list_box > li').eq(3).on('click',function(){
    $('.ps_ai').stop().slideToggle()  
    $('.ps_ai').nextAll().stop().slideUp()
  });
  $('.ps_ai').on('click',function(){
    $(this).slideUp()
  });

  //click me
  $('.click_me').on('click',function(){
    $(this).css('display','none')
    $('.gif_box').css('display','block')
  });

});