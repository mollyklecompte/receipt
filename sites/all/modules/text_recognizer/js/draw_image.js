
(function ($) {
  $(document).ready(function(){
    $('#draw_button').click(function() {
      var canvas = document.getElementById("image-canvas");
      var context = canvas.getContext("2d");
      var img = document.getElementById("uploaded-image");

      context.drawImage(img,100,100);
    });
  });
})(jQuery);
