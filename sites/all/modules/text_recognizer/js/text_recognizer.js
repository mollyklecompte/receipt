(function ($) {
  $(document).ready(function(){
    $.getScript("sites/all/modules/text_recognizer/js/ocrad.js", function(){

    });
    $('#execute_button').click(function() {
      $('#uploaded-image').hide();
      $('#draw_button').hide();
      $('#execute_button').hide();
      var image = document.getElementById("image-canvas");
      var translation_string = OCRAD(image);
      $('#translation').text(translation_string);
    });
  });
})(jQuery);
