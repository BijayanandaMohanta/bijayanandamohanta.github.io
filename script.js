// script.js - Main JavaScript file for portfolio site

$(document).ready(function () {
  // Initialize Magnific Popup for image links
  $(".popup-link").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    mainClass: "mfp-fade",
    removalDelay: 300,
    image: {
      verticalFit: true,
    },
  });

  // FAQ Interaction Handlers
  $(document).on("click", ".question", function () {
    $(".answer").hide();
    const answerHtml = $(this).next(".answer").html();

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
});

// WhatsApp Redirection Logic
function setupWhatsAppRedirection() {
  const $wa = $("#wa-link");
  const desktopLink = $wa.data("desktop-link");
  const mobileLink = $wa.attr("href");

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
}

// Initialize WhatsApp redirection on load
setupWhatsAppRedirection();
