$('.testimonial__wrapper').slick({
  arrows: true,
  prevArrow: '.testimonial__arrows-left',
  nextArrow: '.testimonial__arrows-right',
  dots: true,
  fade: true,
  appendDots: '.testimonial__dots'
});

if( $('.testimonial').length ) {

    $('.testimonial').each(function(i, v){
      var dots = $(this).find('.slick-dots li').length,
          controls = $(this).find('.testimonial__controls');

      if(dots <= 1){
        controls.hide();
      }
    })

}
