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
    $(".action-button").mouseenter(function() {
        $(this).removeClass("entranceAnimation");
        $(this).addClass("hoverAnimation");
    });

    $(".action-button").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
        $(this).removeClass("hoverAnimation");
    })

// Navbar scroll shrink / Scroll hide
    $(document).ready(function($) {
        $(window).on('scroll touchmove', function () {
            $('#navbar').toggleClass('small', ($(document).scrollTop() > 400));
            $('.scroll-indicator').toggleClass('hidden', ($(document).scrollTop() > 400))
        }).scroll();
    });

// Fullpage Scroll
    $(document).ready(function() {
        $('#fullpage').fullpage({
            licenseKey: 'YOUR_KEY_HERE',
            anchors: ['homepage', 'projects'],
            autoScrolling: true,
            scrollBar: true
        });
    });

// Disable right click
//$(document).on("contextmenu", function (event) { event.preventDefault(); });