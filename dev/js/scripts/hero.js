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
