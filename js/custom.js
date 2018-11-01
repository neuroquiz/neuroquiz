$(document).ready(function() {  
  var modals = ['#privacydicedm', '#portfolioModal-DiceDM'];
  if (window.location.pathname.includes("dicedmfree.html")) {
	   $("#portfolioModal-DiceDM").modal();
  }
  if (window.location.hash && ~modals.indexOf(window.location.hash)) {
     $(window.location.hash).modal();
  }
})