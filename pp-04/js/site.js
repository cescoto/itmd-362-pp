// Tell jQuery to give up the dollar sign
$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});
WebFont.load({
  google: {
    families: ['Droid Sans Mono', 'VT323']
  }
});