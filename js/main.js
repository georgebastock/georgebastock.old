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
        strings: ["Front End Developer.", "Web Designer.", "Cat Enthusiast.", "Web Developer.", "PC Builder.", "Web Warrior.", "Good Looking Dude."],
        typeSpeed: 80,
        backSpeed: 50,
        shuffle: true,
        backDelay: 2000,
        startDelay: 1600,
        loop: true
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

    $(".action-button").bind("webkitAnimationEnd mozAnimationEnd animationend", function(){
        $(this).removeClass("hoverAnimation");
    })

// Heart animation on click
    $('.fa-heart').click(function(){
        $(this).toggleClass('vibe');
    });

// Disable right click
//$(document).on("contextmenu", function (event) { event.preventDefault(); });

// Logs to console when loaded into the site
console.log("LOADED");