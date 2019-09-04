$(document).ready(function () {
  $(window).scroll(function () {
    return $('nav').toggleClass("fixed", $(window).scrollTop() > 0);
  });

  function timer() {


    var end = new Date(2019, 8, 6, 23, 59, 59, 0);

    var _milisec = 10;
    var _second = _milisec * 100;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;

    function showRemaining() {
      var now = new Date();
      var distance = end - now + 480000;

      if (distance < 0) {

        $('.minutes').text("00");
        $('.seconds').text("00");
        $('.milliseconds').text("00");

        clearInterval(intervalTimer);
        return;
      }

      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);
      var miliseconds = Math.floor((distance % _second) / _milisec);

      if (seconds < 10) seconds = '0' + seconds;
      if (minutes < 10) minutes = '0' + minutes;
      if (hours < 10) hours = '0' + hours;
      if (days < 10) days = '0' + days;

      $('.days span').text(days);
      $('.minutes span').text(minutes);
      $('.seconds span').text(seconds);
      $('.milliseconds span').text(miliseconds);


    };

    var intervalTimer = setInterval(showRemaining, 10);
  }
  timer();

  $('.days').append('<b class="title">дней</b>');
  $('.minutes').append('<b class="title">минут</b>');
  $('.seconds').append('<b class="title">секунд</b>');
  $('.milliseconds').append('<b class="title">миллисек.</b>');

  $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top - 40
    }, 1500);

  });

  $('#nav-icon').click(function () {
    $(this).toggleClass('open');
    $(this).parents('nav').toggleClass('open');
    $('.menu').slideToggle(200);
  });


  $('a[data-fancybox="gallery"]').click(function () {
    setTimeout(function () {
      $('[data-fancybox-thumbs]').trigger('click');
      $('[data-fancybox-thumbs]').trigger('click');
    }, 500)
  })
  
  $('.loop').owlCarousel({
    center: true,
    loop: true,
    margin: 70,
    nav: true,
    autoHeight: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        margin: 0 ,
      },
      600: {
        items: 2,
        margin: 20,
      },
      1200: {
        items: 3
      }
    }
  });

  
    var observer = lozad();
  observer.observe();
  
    $('#phone').intlTelInput({
		defaultCountry: "ua",
		initialCountry: "auto",
		preferredCountries: ["ua", "ru", 'az', 'am', 'by', 'kz', 'kg', 'md', 'tj', 'uz', 'tm', 'ge'],
		autoPlaceholder: 'aggressive',
		nationalMode: false,
		customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
			return "+" + selectedCountryData.dialCode;
		},
		geoIpLookup: function(success, failure) {
			/*
			$.get( "https://ip-api.com/json/", function( data ) {
				var countryCode = (data.countryCode) ? data.countryCode : "ru";
				success(countryCode);
			}, "json" );*/
			
			$.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
				var countryCode = (resp && resp.country) ? resp.country : "ua";
				success(countryCode);
			});
		},
		separateDialCode: false,
		formatOnDisplay: false,
//		utilsScript: 'https://mk.beauty-matrix.ru/assets/plugins/intltelinput/js/utils.js',
	});
  
    
    $('.check').each(function(){
       $(this).on('change', function(){
            var form = $(this).parents('form');

            if( $(this).prop('checked') ) {
                
                form.find('.phone').slideDown();
            } else {
                form.find('.phone').slideUp();
            }
        });
    });
  
  
  $('.fade').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated fadeIn', // Class to add to the elements when they are visible
        classToRemove: 'hidden_animation', 
        offset: 0    
    });
  
  
  $('.down').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated fadeInDown', // Class to add to the elements when they are visible
        classToRemove: 'hidden_animation', 
        offset: 0    
    });
  
  $('.left').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated fadeInLeft', // Class to add to the elements when they are visible
        classToRemove: 'hidden_animation', 
        offset: 0    
    });
  
  $('.right').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated fadeInRight', // Class to add to the elements when they are visible
        classToRemove: 'hidden_animation', 
        offset: 0    
    });
  
  $('.up').addClass("hidden_animation").viewportChecker({
        classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
        classToRemove: 'hidden_animation', 
        offset: 0    
    });
  
  
});