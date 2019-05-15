// -----------------------------------------------------------------------------------------------
// This file contains:
//                      JS file with all custom built functionality to make the site reactive
//                      to the user.
// -----------------------------------------------------------------------------------------------


// Time Title Changer - On Page Load
    let heroTitleElement = document.querySelector('#adaptiveTitle');

    let currentHour = new Date().getHours();

    let possibleTextDisplay = ["Good Morning!", "Good Afternoon!", "Good Evening!", "Good Night!", "Check Console!"]

    if (currentHour != null) {
        if (currentHour >= 4 && currentHour < 12) {
            heroTitleElement.textContent = possibleTextDisplay[0];
        } else if (currentHour >= 12 && currentHour < 17) {
            heroTitleElement.textContent = possibleTextDisplay[1];
        } else if (currentHour >= 17 && currentHour < 21) {
            heroTitleElement.textContent = possibleTextDisplay[2];
        } else {
            heroTitleElement.textContent = possibleTextDisplay[3];
        }
    } else {
        heroTitleElement.textContent = possibleTextDisplay[4];
    }

// Typing Sub Title
    var options = {
        strings: ["Front End Developer.", "Web Designer.", "Cat Enthusiast.", "Web Developer.", "PC Builder.", "Web Warrior.", "Good Looking Dude."],
        typeSpeed: 80,
        backSpeed: 50,
        shuffle: true,
        backDelay: 2000,
        startDelay: 200,
        loop: true
    }

    var typed = new Typed("#typed", options);

// Lettering Effect
    $("h1").html(
        $("h1").text().split("").map(a => `<span class="letter">${a}</span>`)
    )

// Animation delay
    $(".action-button").mouseenter(function() {
        $(this).addClass("animated");
    });

    $(".action-button").bind("webkitAnimationEnd mozAnimationEnd animationend", function(){
        $(this).removeClass("animated");
    })

// Line double click effect
    $(".line-break").dblclick(function(){
        $(".line-break").addClass("animated").delay(2000).queue(function(next){
            $(this).removeClass("animated");
            next();
        });
    })

// Disable right click
//$(document).on("contextmenu", function (event) { event.preventDefault(); });

// Logs to console when loaded into the site
console.log("LOADED");