$(".sidebar-icon").hover(
  function () {
    $('.sidebar').addClass("show");
  }
);

$(".sidebar").mouseleave(
  function () {
    $('.sidebar').removeClass("show");
  }
);
  // Handle touch events for mobile devices
  $(".sidebar-icon").on("touchstart", function () {
    $('.sidebar').addClass("show");
});

$(document).on("touchstart", function (e) {
    if (!$(e.target).closest('.sidebar-icon, .sidebar').length) {
        $('.sidebar').removeClass("show");
    }
});