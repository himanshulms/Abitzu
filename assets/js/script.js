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
