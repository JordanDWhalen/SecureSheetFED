function headerScrolled(){

  if( $(window).scrollTop() > 30 ){
    $('.header-global').addClass('header-global--scrolled');
  } else {
    $('.header-global').removeClass('header-global--scrolled');
  }

}

$('.header-global__nav-trigger').click(function(e){
  e.preventDefault();

  $(this).toggleClass('active');

})
