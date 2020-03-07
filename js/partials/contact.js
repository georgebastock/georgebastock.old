$(document).ready(function(){
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