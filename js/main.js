// -----------------------------------------------------------------------------------------------
// This file contains:
//                      JS file with all custom built functionality to make the site reactive
//                      to the user.
// -----------------------------------------------------------------------------------------------


loader();

$(window).on('load', function () {
    setTimeout(function() {
        if ($(".pre-loader").length > 0)
        {
            $("body").addClass("loaded");
        }
    }, 1000);
});

function loader() {
    inner = document.querySelector('.pre-loader-percentage');
    bar = $('.block');
    bar.addClass("loading");
    var w = 0,
        t = setInterval(function() {
            w = w + 3;
            inner.textContent = w+'%';
            if (w > 99){
                inner.textContent = '100%';
                clearInterval(t);
            }
        }, 20);
}

// Calls each html component onto the main page
    $(document).ready(function() {
        $('#navbar').load("html/navbar.html");
        $.getScript("/js/partials/navbar.js");
        $('#hero').load("html/hero.html");
        $.getScript("/js/partials/hero.js");
        $('#social-hud').load("html/social-hud.html");
        $('#showcase').load("html/showcase.html");
        $('#about').load("html/about.html");
        $('#contact').load("html/contact.html");
        $.getScript("/js/partials/contact.js");
        $('#footer').load("html/footer.html");
    });