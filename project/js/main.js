$(document).ready(function() {
    var headerHeight = $("header").outerHeight();
    $(".content").css("margin-top", headerHeight);

  $(window).scroll(function () {
  // Get the offset position of the header
    if ($(window).scrollTop() > 0) {
      $("header").css("opacity", 0.8);
    } else {
      $("header").css("opacity", 1);
    }
  });

  $(window).resize(function(){
      //makes sure the context always have correct spacing
    headerHeight = $("header").outerHeight();
    $(".content").css("margin-top", headerHeight);
  });
    
  
});