jQuery(document).ready(function() {

  $('form#form').submit(function(e) {
    var loadingImage = $('.loading-image');
    var submitButton = $(this).find('input[type="submit"]')
    submitButton.attr("disabled", "disabled");
    submitButton.addClass('disabled');
    submitButton.attr("value", "Testen...");
    loadingImage.removeClass('fadeOutUp');
    loadingImage.addClass('fadeInDown');
    loadingImage.css({opacity: 1});

    $('#smartphone, #tablet, #pc').animate({
      opacity: 0
    }, 400, function() {
      $('.weetje').removeClass('bounceOutLeft');
      $('.weetje').addClass('bounceInRight');
      $('.weetje').css({opacity: 1});

      var url = encodeURI($('form').find('input').val());
      if(!url.match(/^http:\/\//)) {
        url = "http://" + url;
      }

      $('iframe').attr("src", url);

      setTimeout(function() {
        $('.weetje').removeClass('bounceInRight');
        $('.weetje').addClass('bounceOutLeft');
        setTimeout(function() {
          $('#smartphone, #tablet, #pc').animate({
            opacity: 1
          }, 400);
        }, 400);

        submitButton.removeAttr("disabled");
        submitButton.removeClass('disabled');
        submitButton.attr("value", "Test mijn website");
        loadingImage.removeClass('fadeInDown');
        loadingImage.addClass('fadeOutUp');
      }, 4000);
    });

    e.preventDefault();
  })

});