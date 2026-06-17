document.addEventListener('DOMContentLoaded', function() {

  var watchFilm = document.getElementById('watch-film');
  if (watchFilm) {
    watchFilm.addEventListener('click', function() {
      document.getElementById('trailer-iframe').classList.add('invisible');
      document.getElementById('trailer-text').classList.add('invisible');
      document.getElementById('film-iframe').classList.remove('invisible');
      document.getElementById('film-text').classList.remove('invisible');
    });
  }

  var watchTrailer = document.getElementById('watch-trailer');
  if (watchTrailer) {
    watchTrailer.addEventListener('click', function() {
      document.getElementById('film-iframe').classList.add('invisible');
      document.getElementById('film-text').classList.add('invisible');
      document.getElementById('trailer-iframe').classList.remove('invisible');
      document.getElementById('trailer-text').classList.remove('invisible');
    });
  }

  var moviesBtn = document.getElementById('movies-btn');
  if (moviesBtn) {
    moviesBtn.addEventListener('click', function() {
      document.getElementById('contact-btn').classList.remove('selected');
      document.getElementById('about-btn').classList.remove('selected');
      document.getElementById('movies-btn').classList.add('selected');
      var sections = document.querySelectorAll('[id^=section]');
      sections.forEach(function(section) {
        section.classList.add('invisible');
      });
      document.getElementById('section-movies-list').classList.remove('invisible');
    });
  }

  var aboutBtn = document.getElementById('about-btn');
  if (aboutBtn) {
    aboutBtn.addEventListener('click', function() {
      document.getElementById('movies-btn').classList.remove('selected');
      document.getElementById('contact-btn').classList.remove('selected');
      document.getElementById('about-btn').classList.add('selected');
      var sections = document.querySelectorAll('[id^=section]');
      sections.forEach(function(section) {
        section.classList.add('invisible');
      });
      document.getElementById('section-about').classList.remove('invisible');
    });
  }

  var sectionSplash = document.getElementById('section-splash');
  if (sectionSplash) {
    sectionSplash.addEventListener('click', function() {
      document.getElementById('about-btn').classList.add('selected');
      var sections = document.querySelectorAll('[id^=section]');
      sections.forEach(function(section) {
        section.classList.add('invisible');
      });
      document.getElementById('section-about').classList.remove('invisible');
    });
  }

  var contactBtn = document.getElementById('contact-btn');
  if (contactBtn) {
    contactBtn.addEventListener('click', function() {
      document.getElementById('about-btn').classList.remove('selected');
      document.getElementById('movies-btn').classList.remove('selected');
      document.getElementById('contact-btn').classList.add('selected');
      var sections = document.querySelectorAll('[id^=section]');
      sections.forEach(function(section) {
        section.classList.add('invisible');
      });
      document.getElementById('section-contact').classList.remove('invisible');
    });
  }

  var aboutContactBtn = document.getElementById('about-contact-btn');
  if (aboutContactBtn) {
    aboutContactBtn.addEventListener('click', function() {
      var sections = document.querySelectorAll('[id^=section]');
      sections.forEach(function(section) {
        section.classList.add('invisible');
      });
      document.getElementById('about-btn').classList.remove('selected');
      document.getElementById('movies-btn').classList.remove('selected');
      document.getElementById('contact-btn').classList.add('selected');
      document.getElementById('section-contact').classList.remove('invisible');
    });
  }

  var expandCollapse = document.querySelectorAll('.expand-collapse');
  expandCollapse.forEach(function(element) {
    element.addEventListener('click', function() {
      var indicators = document.querySelectorAll('.indicator');
      indicators.forEach(function(indicator) {
        indicator.classList.toggle('invisible');
      });
      document.getElementById('embedded-movies-list').classList.toggle('invisible');
    });
  });

});