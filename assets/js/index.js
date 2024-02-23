// JQUERY slowerScroll
$(document).ready(function () {
    $("a").click(function () {
      var slowerScroll = this.hash;
      $("html,body").animate(
        {
          scrollTop: $(slowerScroll).offset().top - 70,
        },
        3000
      );
    });
  });
  
  //Tooltip de Bootstrap.
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);