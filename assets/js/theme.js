$(document).ready(function () {
    var $body = $("body"),
        $window = $(window),
        $document = $(document);

    var WT = {
        init: function () {
            this.mobileMenu();
        },
        mobileMenu: function () {
            var $toggler = $(".header-icon"),
                $menuClose = $(".menu-close button.menu-close-btn"),
                $mobileMenu = $("#mobile-menu");

            // Open the mobile menu
            $toggler.on("click", function () {
                $mobileMenu.addClass("active");
                $body.addClass("hidden");
            });

            // Close the mobile menu
            $menuClose.on("click", function () {
                $mobileMenu.removeClass("active");
                $body.removeClass("hidden");
            });
        }
    };

    WT.init();
});



// ===========================================================
// Go to Top button Starts
// ===========================================================

$(function () {
    //Scroll event
    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 200) $('.got-to-top-button').fadeIn('slow');
        if (scrolled < 200) $('.got-to-top-button').fadeOut('slow');
    });

    //Click event
    $('.got-to-top-button').click(function () {
        $("html, body").animate({ scrollTop: "0" }, 500);
    });

});

// ===========================================================
// Go to Top button Starts
// ===========================================================