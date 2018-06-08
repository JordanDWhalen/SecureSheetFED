$('.product__content-wrapper').slick({
  arrows: true,
  prevArrow: '.product__arrows-left',
  nextArrow: '.product__arrows-right',
  asNavFor: '.product__image-wrapper',
  dots: true,
  fade: true,
});

$('.product__image-wrapper').slick({
  arrows: false,
  asNavFor: '.product__content-wrapper',
  fade: true
});

if( $('.product').length ) {

    $('.product').each(function(i, v){
      var dots = $(this).find('.slick-dots li').length,
          controlsDots = $(this).find('.slick-dots'),
          controlsArrows = $(this).find('.product__arrows');

      if(dots <= 1){
        controlsDots.hide();
        controlsArrows.hide();
      }
    })

}
