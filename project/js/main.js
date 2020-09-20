$(document).ready(function() {
  var headerHeight = $("header").outerHeight();
  adjustContentMargin();

  $(window).scroll(function () {
  // Get the offset position of the header
    if (document.body.scrollTop > headerHeight/2 || document.documentElement.scrollTop > headerHeight/2) {
      $("header").css("opacity", 0.8);
      $("header").css("padding", "0%");
      $("header h1 a").css("font-size", '4vh')
      $("header h1").css("margin", '1% 3% 0 3%');
    } else {
      $("header").css("opacity", 1);
      $("header").css("padding", "");
      $("header h1 a").css("font-size", '')
      $("header h1").css("margin", '')
    }
  });

  $(window).resize(function(){
      //makes sure the context always have correct spacing
    adjustContentMargin();
  });
    
  function adjustContentMargin() {
    headerHeight = $("header").outerHeight();
      if (document.body.scrollTop > headerHeight/2 || document.documentElement.scrollTop > headerHeight/2) {
        $(".content").css("margin-top", headerHeight*1.5);
      } else {
        $(".content").css("margin-top", headerHeight);
      }
  }
  document.getElementById("seagull").onclick = function() {
    $(".speech").animate({
        width: "toggle"
    },"slow");
  };
});