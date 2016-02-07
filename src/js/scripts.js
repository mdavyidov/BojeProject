$(document).ready(function() {
  $('[data-range]').each(function() {
    $(this).slider({
      range: true,
      min: 0,
      max: 500
    });
  });

  $(".filterParam_name").click(function(){
    $(this).parent('div').toggleClass("filterParam_rootActive");
  });

  $(".sorting_type").click(function(){
    $(this).toggleClass("sorting_typeActive");
  });

  $('[data-slider="mainSlider"]').bxSlider();

  $('[data-slider="mainProductSlider"]').each(function() {
    var slider = $(this).bxSlider({
      maxSlides: 4,
      slideWidth: $(this).find('li').width()
    });
  });
});
