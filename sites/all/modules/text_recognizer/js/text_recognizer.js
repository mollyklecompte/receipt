(function ($) {
  $(document).ready(function(){
    $.getScript("sites/all/modules/text_recognizer/js/ocrad.js", function(){

   alert("We're ready! Click the execute button to get your translation.");

    });
    $('#execute_button').click(function() {
      var image = document.getElementById("image-canvas");
      var translation_string = OCRAD(image);
      $('#translation').text(translation_string);
      alert(translation_string);
    });
  });
})(jQuery);
