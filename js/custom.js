$(document).ready(function() {  
  var modals = ['#privacydicedm'];
  if (window.location.hash && ~modals.indexOf(window.location.hash)) {
     $(window.location.hash).modal();
  }
})