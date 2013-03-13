jQuery(document).ready(function() {

  $('form#form').submit(function(e) {
    $('#smartphone, #tablet, #pc').animate({
      opacity: 0.0

    }, 400, function() {
      $('.weetje').removeClass('bounceOutLeft');
      $('.weetje').addClass('bounceInRight');
      $('.weetje').css({opacity: 1});

      var url = $('form').find('input').val();
      $('iframe').attr("src", url);

      setTimeout(function() {
        $('.weetje').removeClass('bounceInRight');
        $('.weetje').addClass('bounceOutLeft');
        setTimeout(function() {
          $('#smartphone, #tablet, #pc').animate({
            opacity: 1
          }, 400);
        }, 400)
      }, 3000);
    });

    e.preventDefault();
  })

});