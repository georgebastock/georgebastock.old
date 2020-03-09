$(document).ready(function(){
    
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;

    var navbar = $("#navbar");
    var socialhud = $("#social-hud");
    var navbarHeight = navbar.outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var scrollTop = $(this).scrollTop();

        if (Math.abs(lastScrollTop - scrollTop) <= delta) {
            return;
        }

        if (scrollTop > lastScrollTop && scrollTop > navbarHeight){
            navbar.addClass("nav-up");
        } else {
            if(scrollTop + $(window).height() < $(document).height()) { 
                navbar.removeClass("nav-up");
            }
        }

        if (scrollTop > 20) {
            navbar.addClass("nav-scroll");
            socialhud.addClass("social-scroll");
        } else {
            navbar.removeClass("nav-scroll");
            socialhud.removeClass("social-scroll");
        }

        lastScrollTop = scrollTop;
    }
});