$(function () {
  $('.scrollup').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 500);
  })
})
$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $('.scrollup').fadeIn();
  }
  else {
    $('.scrollup').fadeOut();
  }
});



var $page = $('html, body');
$('a[href*="#"]').click(function () {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 400);
  return false;
});