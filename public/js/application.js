
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

$('.hero__video-play').click(function(e){
  e.preventDefault();

  var video = $(this).siblings('video');

  if(!$(this).hasClass('hero__video-play--active')){
    $(this).addClass('hero__video-play--active');
    $(this).addClass('hero__video-play--in-progress');
    video.get(0).play();
    video.attr('controls', true);
  }
});

$('video').on('pause', function() {
  $(this).siblings('.hero__video-play').removeClass('hero__video-play--active');
});

$('.image-grid__wrapper').slick({
  arrows: true,
  prevArrow: '.image-grid__arrows-left',
  nextArrow: '.image-grid__arrows-right',
  dots: true,
  fade: true,
  appendDots: '.image-grid__dots'
});

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

$(window).on('load', function() {
  headerScrolled();
  $(window).scrollTop();
});

$(window).on('scroll', function() {
  headerScrolled();
  $(window).scrollTop();
});

$(window).on('resize', function() {

});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiLCJzY3JpcHRzL2hlYWRlci5qcyIsInNjcmlwdHMvaGVyby5qcyIsInNjcmlwdHMvaW1hZ2UtZ3JpZC5qcyIsInNjcmlwdHMvcHJvZHVjdC5qcyIsInNjcmlwdHMvdGVzdGltb25pYWwuanMiLCJzY3JpcHRzL3dpbmRvdy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHBsaWNhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiIsImZ1bmN0aW9uIGhlYWRlclNjcm9sbGVkKCl7XG5cbiAgaWYoICQod2luZG93KS5zY3JvbGxUb3AoKSA+IDMwICl7XG4gICAgJCgnLmhlYWRlci1nbG9iYWwnKS5hZGRDbGFzcygnaGVhZGVyLWdsb2JhbC0tc2Nyb2xsZWQnKTtcbiAgfSBlbHNlIHtcbiAgICAkKCcuaGVhZGVyLWdsb2JhbCcpLnJlbW92ZUNsYXNzKCdoZWFkZXItZ2xvYmFsLS1zY3JvbGxlZCcpO1xuICB9XG5cbn1cblxuJCgnLmhlYWRlci1nbG9iYWxfX25hdi10cmlnZ2VyJykuY2xpY2soZnVuY3Rpb24oZSl7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcblxufSlcbiIsIiQoJy5oZXJvX192aWRlby1wbGF5JykuY2xpY2soZnVuY3Rpb24oZSl7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICB2YXIgdmlkZW8gPSAkKHRoaXMpLnNpYmxpbmdzKCd2aWRlbycpO1xuXG4gIGlmKCEkKHRoaXMpLmhhc0NsYXNzKCdoZXJvX192aWRlby1wbGF5LS1hY3RpdmUnKSl7XG4gICAgJCh0aGlzKS5hZGRDbGFzcygnaGVyb19fdmlkZW8tcGxheS0tYWN0aXZlJyk7XG4gICAgJCh0aGlzKS5hZGRDbGFzcygnaGVyb19fdmlkZW8tcGxheS0taW4tcHJvZ3Jlc3MnKTtcbiAgICB2aWRlby5nZXQoMCkucGxheSgpO1xuICAgIHZpZGVvLmF0dHIoJ2NvbnRyb2xzJywgdHJ1ZSk7XG4gIH1cbn0pO1xuXG4kKCd2aWRlbycpLm9uKCdwYXVzZScsIGZ1bmN0aW9uKCkge1xuICAkKHRoaXMpLnNpYmxpbmdzKCcuaGVyb19fdmlkZW8tcGxheScpLnJlbW92ZUNsYXNzKCdoZXJvX192aWRlby1wbGF5LS1hY3RpdmUnKTtcbn0pO1xuIiwiJCgnLmltYWdlLWdyaWRfX3dyYXBwZXInKS5zbGljayh7XG4gIGFycm93czogdHJ1ZSxcbiAgcHJldkFycm93OiAnLmltYWdlLWdyaWRfX2Fycm93cy1sZWZ0JyxcbiAgbmV4dEFycm93OiAnLmltYWdlLWdyaWRfX2Fycm93cy1yaWdodCcsXG4gIGRvdHM6IHRydWUsXG4gIGZhZGU6IHRydWUsXG4gIGFwcGVuZERvdHM6ICcuaW1hZ2UtZ3JpZF9fZG90cydcbn0pO1xuIiwiJCgnLnByb2R1Y3RfX2NvbnRlbnQtd3JhcHBlcicpLnNsaWNrKHtcbiAgYXJyb3dzOiB0cnVlLFxuICBwcmV2QXJyb3c6ICcucHJvZHVjdF9fYXJyb3dzLWxlZnQnLFxuICBuZXh0QXJyb3c6ICcucHJvZHVjdF9fYXJyb3dzLXJpZ2h0JyxcbiAgYXNOYXZGb3I6ICcucHJvZHVjdF9faW1hZ2Utd3JhcHBlcicsXG4gIGRvdHM6IHRydWUsXG4gIGZhZGU6IHRydWUsXG59KTtcblxuJCgnLnByb2R1Y3RfX2ltYWdlLXdyYXBwZXInKS5zbGljayh7XG4gIGFycm93czogZmFsc2UsXG4gIGFzTmF2Rm9yOiAnLnByb2R1Y3RfX2NvbnRlbnQtd3JhcHBlcicsXG4gIGZhZGU6IHRydWVcbn0pO1xuXG5pZiggJCgnLnByb2R1Y3QnKS5sZW5ndGggKSB7XG5cbiAgICAkKCcucHJvZHVjdCcpLmVhY2goZnVuY3Rpb24oaSwgdil7XG4gICAgICB2YXIgZG90cyA9ICQodGhpcykuZmluZCgnLnNsaWNrLWRvdHMgbGknKS5sZW5ndGgsXG4gICAgICAgICAgY29udHJvbHNEb3RzID0gJCh0aGlzKS5maW5kKCcuc2xpY2stZG90cycpLFxuICAgICAgICAgIGNvbnRyb2xzQXJyb3dzID0gJCh0aGlzKS5maW5kKCcucHJvZHVjdF9fYXJyb3dzJyk7XG5cbiAgICAgIGlmKGRvdHMgPD0gMSl7XG4gICAgICAgIGNvbnRyb2xzRG90cy5oaWRlKCk7XG4gICAgICAgIGNvbnRyb2xzQXJyb3dzLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KVxuXG59XG4iLCIkKCcudGVzdGltb25pYWxfX3dyYXBwZXInKS5zbGljayh7XG4gIGFycm93czogdHJ1ZSxcbiAgcHJldkFycm93OiAnLnRlc3RpbW9uaWFsX19hcnJvd3MtbGVmdCcsXG4gIG5leHRBcnJvdzogJy50ZXN0aW1vbmlhbF9fYXJyb3dzLXJpZ2h0JyxcbiAgZG90czogdHJ1ZSxcbiAgZmFkZTogdHJ1ZSxcbiAgYXBwZW5kRG90czogJy50ZXN0aW1vbmlhbF9fZG90cydcbn0pO1xuXG5pZiggJCgnLnRlc3RpbW9uaWFsJykubGVuZ3RoICkge1xuXG4gICAgJCgnLnRlc3RpbW9uaWFsJykuZWFjaChmdW5jdGlvbihpLCB2KXtcbiAgICAgIHZhciBkb3RzID0gJCh0aGlzKS5maW5kKCcuc2xpY2stZG90cyBsaScpLmxlbmd0aCxcbiAgICAgICAgICBjb250cm9scyA9ICQodGhpcykuZmluZCgnLnRlc3RpbW9uaWFsX19jb250cm9scycpO1xuXG4gICAgICBpZihkb3RzIDw9IDEpe1xuICAgICAgICBjb250cm9scy5oaWRlKCk7XG4gICAgICB9XG4gICAgfSlcblxufVxuIiwiJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gIGhlYWRlclNjcm9sbGVkKCk7XG4gICQod2luZG93KS5zY3JvbGxUb3AoKTtcbn0pO1xuXG4kKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICBoZWFkZXJTY3JvbGxlZCgpO1xuICAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG59KTtcblxuJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcblxufSk7XG4iXX0=
