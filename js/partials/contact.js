$(document).ready(function(){
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

        map.setOptions({
            draggableCursor:'default'
        });

    // Form
        $('.contact-form').on('submit', function(e) {
            $(e.target[3]).val("Sending...");
            setTimeout(function() {
                $('.contact-form').trigger("reset");
                $(".green").css("display", "block");
                $(e.target[3]).val("Send Another?");
            }, 1000);
        });

        $(".input").click(function(e) {
            $(e.target).removeClass("required");
        })

        $( ".input" ).change(function(e) {
            $(e.target.previousSibling).css("display", "none");
        });

        document.addEventListener('invalid', (function () {
            return function (e) {
                e.preventDefault();
                $(e.target).addClass("required");
                var spaceChar = e.target.placeholder.indexOf(" ")
                if (e.target.placeholder.substring(0,spaceChar) != "Please") {
                    $(e.target).attr("placeholder", "Please complete : " + e.target.placeholder);
                }
                $(e.target.previousSibling).css("display", "block");
            };
        })(), true);
});