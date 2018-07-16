$(document).ready(function() {
  
  $('.type-it').typeIt({
    strings: ['coded image'],
    callback: function() {
      $('.type-it').find('.ti-cursor').addClass('is-hidden');
    }
  });

});
