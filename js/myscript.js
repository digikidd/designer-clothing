$(document).ready(function() {

  $('#navigation').slimmenu({
      resizeWidth: '800',
      collapserTitle: 'Main Menu',
      animSpeed: 'medium',
      easingEffect: null,
      indentChildren: false,
      childrenIndenter: '&nbsp;'
  });
  
  $(window).load(function() {
    $('.flexslider').flexslider();
  });
});
