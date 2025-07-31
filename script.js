$(document).ready(function () {
  $(".popup-link").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    mainClass: "mfp-fade",
    removalDelay: 300,
    image: {
      verticalFit: true,
    },
  });
});

$(document).on("click", ".question", function () {
  $(".answer").hide();
  let answerHtml = $(this).next(".answer").html();

  $(".answer-view")
    .stop(true, true)
    .fadeOut(150, function () {
      $(this).html(
        '<button class="close-answer"><i class="bi bi-x"></i></button><div>' +
          answerHtml +
          "</div>"
      );
      $(this).fadeIn(250);
    });
});

$(document).on("click", ".close-answer", function (e) {
  e.stopPropagation();
  $(".answer-view").fadeOut(250, function () {
    $(this).empty();
  });
});

// Whatsapp redirection format
var $wa = $("#wa-link");
var desktopLink = $wa.data("desktop-link");
var mobileLink = $wa.attr("href");
function isMobileUA() {
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
    navigator.userAgent
  );
}

// Screen width check in rem converted to px (40rem * 16 = 640px)
function isSmallScreen() {
  return window.matchMedia("(max-width: 40rem)").matches;
}
// If user NOT on mobile user agent AND screen width is NOT less than 40rem => desktop
if (!isMobileUA() && !isSmallScreen()) {
  $wa.attr("href", desktopLink);
} else {
  $wa.attr("href", mobileLink);
}
