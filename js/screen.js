;(function ($) {
  $(window).load(function(){
    resp_max_height = function(elements){
      var resize = function(){
        var max_height = 0;
        elements.css({'height': ''});
        elements.each(function(){
          max_height = Math.max(max_height, $(this).height());
        });
        elements.height(max_height);
      };
      resize();
      $(window).resize(resize);  
    }
    resp_max_height($('.grid_block'));
  });
}(jQuery));
