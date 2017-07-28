/*
* @Author: sunpei
* @Date:   2017-07-10 09:24:10
* @Last Modified by:   sunpei
* @Last Modified time: 2017-07-10 10:55:15
*/

'use strict';
$(document).ready(function() {
  var $sub = $('#sub');

  var activeRow;
  var activeMenu;

  var timer;

  var mouseInSub = false;

  $sub.on('mouseenter', function(e) {
    mouseInSub = true;
  }).on('mouseleave', function(e) {
    mouseInSub = false;
  })

  $('#test').on('mouseenter',function(e) {
    $sub.removeClass('none')
  }).on('mouseleave', function(e) {
    $sub.addClass('none');

    if (activeRow) {
      activeRow.removeClass('active');
      activeRow = null;
    }
    if (activeMenu) {
      activeMenu.addClass('none');
      activeMenu = null;
    }
  }).on('mouseenter', 'li', function(e) {
    if (!activeRow) {
        activeRow = $(e.target);
        activeRow.addClass('active');
        activeMenu = $('#' + activeRow.data('id'));
        activeMenu.removeClass('none');
        return;
    }
    timer = setTimeout(function() {
      if (mouseInSub) {
        return;
      }; 
      activeRow.removeClass('active');
      activeMenu.addClass('none');

      activeRow = $(e.target).addClass('active');
      activeMenu = $('#' + activeRow.data('id')).removeClass('none');
    },300)
  });
})