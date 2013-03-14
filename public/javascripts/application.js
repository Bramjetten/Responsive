jQuery(document).ready(function() {

  var weetjes = ["Wist je dat het aantal tabletgebruikers in 2012<br />meer dan verdubbeld is?",
                "Zes op de tien internetters gebruiken<br /> smartphones om te internetten.",
                "In 2012 ging 86% van de jongeren<br /> regelmatig mobiel online.",
                "Zakelijk gebruik van tablets is in 2012<br />met 400% toegenomen."];

  $('form#form').submit(function(e) {
    var loadingImage = $('.loading-image');
    var submitButton = $(this).find('input[type="submit"]')
    submitButton.attr("disabled", "disabled");
    submitButton.addClass('disabled');
    submitButton.attr("value", "Testen...");
    loadingImage.removeClass('fadeOutUp');
    loadingImage.addClass('fadeInDown');
    loadingImage.css({opacity: 1});

    $('.weetje').html(weetjes[Math.floor(Math.random()*weetjes.length)]);

    $('.result-container').animate({
      opacity: 0
    }, 400, function() {
      $('.weetje').removeClass('bounceOutLeft');
      $('.weetje').addClass('bounceInRight');
      $('.weetje').css({opacity: 1});

      var url = encodeURI($('form').find('input').val());
      if(!url.match(/^http:\/\//)) {
        url = "http://" + url;
      }

      var regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");

      if(regex.test(url)){
        $('iframe').attr("src", url);
        $.post("/log", { url: url });
      }

      setTimeout(function() {
        $('.weetje').removeClass('bounceInRight');
        $('.weetje').addClass('bounceOutLeft');
        setTimeout(function() {
          $('.result-container').animate({
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
  });

});