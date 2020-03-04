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
        $('#contact-form').on('submit', function() {
            $('#contact-form').trigger("reset");
            $(".green").css("display", "block");
        });
});