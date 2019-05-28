// -----------------------------------------------------------------------------------------------
// This file contains:
//                      JS file with all custom built functionality to make the site reactive
//                      to the user.
// -----------------------------------------------------------------------------------------------


// Time Title Changer - On Page Load
    let heroTitleElement = document.querySelector('#adaptiveTitle');
    let currentHour = new Date().getHours();
    let possibleTextDisplay = ["Good Morning!", "Good Afternoon!", "Good Evening!", "Check Console!"]

    if (currentHour != null) {
        if (currentHour >= 3 && currentHour < 12) {
            heroTitleElement.textContent = possibleTextDisplay[0];
        } else if (currentHour >= 12 && currentHour < 18) {
            heroTitleElement.textContent = possibleTextDisplay[1];
        } else {
            heroTitleElement.textContent = possibleTextDisplay[2];
        }
    } else {
        heroTitleElement.textContent = possibleTextDisplay[3];
    }

// Typing Sub Title
    var options = {
        strings: [
            "I <i class='fas fa-heart'></i> Being A Front End Developer.", 
            "I <i class='fas fa-heart'></i> Being A Web Designer.", 
            "I <i class='fas fa-heart'></i> Being A PC Builder.", 
            "I <i class='fas fa-heart'></i> Being A Web Warrior."], 
        typeSpeed: 80,
        backSpeed: 50,
        shuffle: true,
        backDelay: 2000,
        startDelay: 1600,
        loop: true,
        contentType: 'html',
        smartBackspace: true
    }

    $(document).ready(function(){
        var typed = new Typed("#typed", options);
    });

// Lettering Effect
    $("h1").html(
        $("h1").text().split("").map(a => `<span class="letter">${a}</span>`)
    )

// Animation delay
    $(".button").mouseenter(function() {
        $(this).removeClass("entranceAnimation");
        $(this).addClass("hoverAnimation");
    });

    $(".button").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
        $(this).removeClass("hoverAnimation");
    })

    $(".bio-image").mouseenter(function() {
        $(this).removeClass("entranceAnimation");
        $(this).addClass("hoverAnimation");
    });

    $(".bio-image").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
        $(this).removeClass("hoverAnimation");
    })

// Fullpage Scroll
    var myFullpage = new fullpage('#fullpage', {
        licenseKey: 'PLACE_KEY_HERE',
        //Navigation
        menu: '.navbar-menu',
        anchors: ['homepage', 'projects', 'about', 'contact'],
        //Scrolling
        paddingTop: '69px',
        bigSectionsDestination: top,
        css3: true,
        scrollingSpeed: 600,
        autoScrolling: true,
        scrollBar: true,
        easing: 'easeInOutCubic',
        //Accessibility
        keyboardScrolling: true,
        //Custom selectors
        lazyLoading: true,
        //events
        onLeave: function(origin, destination, direction){
            if (destination.index == 1){
                $('.projects-summary h2 ,.projects-summary h3 ,.project-panel ,.projects-button').addClass('entranceAnimation');
            } else if (destination.index == 2){
                $('.about-bio h2 ,.about-bio p ,.bio-image ,.about-skills h3 ,.about-skills p ,.skills .skill').addClass('entranceAnimation');
            }
            
            if (destination.index != 0) {
                $('#navbar').addClass('small');
                $('.scroll-indicator').addClass('hidden');
            } else {
                $('#navbar').removeClass('small');
                $('.scroll-indicator').removeClass('hidden');
            }
        },
    });

// Initial homepage animations
    $('.navbar .container ,.scroll-indicator').addClass('entranceAnimation');
    $('.hero-body h1 ,.line-break ,.hero-body h2 ,.action-button ,.typed-container').addClass('entranceAnimation');

// Button coming soon click
    $('#projects-button').click(function(){
        var $this = $(this);
        $this.toggleClass('comingSoon');
        if($this.hasClass('comingSoon')){
            $this.text('Coming Soon');			
        } else {
            $this.text('View More...');
        }
    });

// Google Maps
    var selector_map = $('#map');
    var draggable = selector_map.attr('data-draggable');

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 52.6309, lng: 1.2974},
        zoom: 14,
        disableDefaultUI: true,
        scrollwheel: false,
        zoomControl: false,  
        disableDoubleClickZoom: true,
        navigationControl: true,
        mapTypeControl: false,
        scaleControl: false,
        draggable: draggable
    });

// Form

    var submitted=false;

    $('#gform').on('submit', function(e) {
        $('#gform').prepend('Your submission has been processed...');
        document.getElementById("gform").reset();
        console.clear();
    });

// Disable right click
//$(document).on("contextmenu", function (event) { event.preventDefault(); });