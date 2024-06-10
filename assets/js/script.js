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
/**********For toaster*********/
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}
/***********Tooltip************/
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
/**************Header background changes on scroll**********/
$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $(".header-wrap").addClass("header-active");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $(".header-wrap").removeClass("header-active");
      }
  });
});