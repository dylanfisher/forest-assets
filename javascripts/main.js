//////////////////////////////////////////////////////////////
// App namespace
//////////////////////////////////////////////////////////////

window.App = window.App || {};

App.pageLoad = [];
App.pageResize = [];
App.pageScroll = [];
// App.pageThrottledScroll = [];
// App.pageDebouncedResize = [];
App.teardown = [];
App.runFunctions = function(array) {
  for (var i = array.length - 1; i >= 0; i--) {
    array[i]();
  }
};
App.isHomePage = function() {
  return App.$body.hasClass('controller--home_pages');
};

//////////////////////////////////////////////////////////////
// On page load
//////////////////////////////////////////////////////////////

$(function() {
  App.scrollTop = $(window).scrollTop();

  App.windowWidth  = $(window).width();
  App.windowHeight = $(window).height();

  App.$html = $('html');
  App.$body = $('body');
  App.$header = $('#header');

  App.$html.removeClass('no-js');

  App.runFunctions(App.pageLoad);
  App.runFunctions(App.pageResize);
  // App.runFunctions(App.pageDebouncedResize);
  App.runFunctions(App.pageScroll);
  // App.runFunctions(App.pageThrottledScroll);
});

//////////////////////////////////////////////////////////////
// On scroll
//////////////////////////////////////////////////////////////

$(window).on('scroll', function() {
  App.scrollTop = $(window).scrollTop();

  App.runFunctions(App.pageScroll);
});

// $(window).on('scroll', $.throttle(200, function() {
//   App.runFunctions(App.pageThrottledScroll);
// }));

//////////////////////////////////////////////////////////////
// On resize
//////////////////////////////////////////////////////////////

$(window).on('resize', function() {
  App.windowWidth  = $(window).width();
  App.windowHeight = $(window).height();

  App.runFunctions(App.pageResize);
});

// $(window).on('resize', $.debounce(500, function() {
//   App.runFunctions(App.pageDebouncedResize);
// }));

App.breakpoint = function(checkIfSize) {
  // Make sure these match the breakpoint variables set in variables.scss
  var sm = 576;
  var md = 768;
  var lg = 1100;
  var xl = 1400;
  var breakpoint;

  if ( App.windowWidth < sm) {
    breakpoint = 'xs';
  } else if ( App.windowWidth >= xl ) {
    breakpoint = 'xl';
  } else if ( App.windowWidth >= lg ) {
    breakpoint = 'lg'
  } else if ( App.windowWidth >= md ) {
    breakpoint = 'md';
  } else {
    breakpoint = 'sm';
  }

  if ( checkIfSize !== undefined ) {
    if ( checkIfSize == 'xs' ) {
      return App.windowWidth < sm;
    } else if ( checkIfSize == 'sm' ) {
      return (App.windowWidth >= sm && App.windowWidth < md);
    } else if ( checkIfSize == 'md' ) {
      return (App.windowWidth >= md && App.windowWidth < lg);
    } else if ( checkIfSize == 'lg' ) {
      return (App.windowWidth >= lg && App.windowWidth < xl);
    } else if ( checkIfSize == 'xl' ) {
      return App.windowWidth >= xl;
    }
  } else {
    return breakpoint;
  }
};

App.breakpoint.isMobile = function() {
  return ( App.breakpoint('xs') || App.breakpoint('sm') );
};
