$(document).ready(function() {

  $('#watch-film').click(function() {
    $('#trailer-iframe').addClass('invisible');
    $('#trailer-text').addClass('invisible');
    $('#film-iframe').removeClass('invisible');
    $('#film-text').removeClass('invisible');
  });

  $('#watch-trailer').click(function() {
    $('#film-iframe').addClass('invisible');
    $('#film-text').addClass('invisible');
    $('#trailer-iframe').removeClass('invisible');
    $('#trailer-text').removeClass('invisible');
  });

  $('#movies-btn').click(function() {
    $('#contact-btn').removeClass('selected');
    $('#about-btn').removeClass('selected');
    $('#movies-btn').addClass('selected');
    $('[id^=section]').addClass('invisible');
    $('#section-movies-list').removeClass('invisible');
  });

  $('#about-btn').click(function() {
    $('#movies-btn').removeClass('selected');
    $('#contact-btn').removeClass('selected');
    $('#about-btn').addClass('selected');
    $('[id^=section]').addClass('invisible');
    $('#section-about').removeClass('invisible');
  });

  $('#section-splash').click(function() {
    $('#about-btn').addClass('selected');
    $('[id^=section]').addClass('invisible');
    $('#section-about').removeClass('invisible');
  });

  $('#contact-btn').click(function() {
    $('#about-btn').removeClass('selected');
    $('#movies-btn').removeClass('selected');
    $('#contact-btn').addClass('selected');
    $('[id^=section]').addClass('invisible');
    $('#section-contact').removeClass('invisible');
  });

  $('#about-contact-btn').click(function() {
    $('[id^=section]').addClass('invisible');
    $('#about-btn').removeClass('selected');
    $('#movies-btn').removeClass('selected');
    $('#contact-btn').addClass('selected');
    $('#section-contact').removeClass('invisible');
  });

  $('.expand-collapse').click(function() {
    $('.indicator').toggleClass('invisible');
    $('#embedded-movies-list').toggleClass('invisible');
  });

});