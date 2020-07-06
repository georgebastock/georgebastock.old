$(document).ready(function(){
    
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

    // Viewheight Mobile Fix
    $("#js-vh").height(window.innerHeight);

    var delay = (function(){
        var timer = 0;
        return function(callback, ms){
          clearTimeout (timer);
          timer = setTimeout(callback, ms);
        };
    })();

    $(window).resize(function() {
        delay(function(){
            console.log($(window).scrollTop());
            console.log(window.innerHeight);
            if (window.innerHeight > 558 && ($(window).scrollTop() < window.innerHeight)) {
                $("#js-vh").height(window.innerHeight);
            }
        }, 200);
    });

    // Typing Sub Title
        var options = {
            strings: [
                "I <i class='fas fa-heart'></i> Being A Software Developer.", 
                "I <i class='fas fa-heart'></i> Being A Front End Developer.", 
                "I <i class='fas fa-heart'></i> Being A Website Designer.", 
                "I <i class='fas fa-heart'></i> Being A Crazy Cat Guy.", 
                "I <i class='fas fa-heart'></i> Being A PC Tech Wizard.", 
                "I <i class='fas fa-heart'></i> Being A Constant Learner."],
            typeSpeed: 80,
            backSpeed: 50,
            shuffle: true,
            backDelay: 2000,
            startDelay: 1600,
            loop: true,
            contentType: 'html',
            smartBackspace: false
        }

        var typed = new Typed("#typed", options);

    // Lettering Effect
        $("h1").html(
            $("h1").text().split("").map(a => `<span class="letter">${a}</span>`)
        )
});