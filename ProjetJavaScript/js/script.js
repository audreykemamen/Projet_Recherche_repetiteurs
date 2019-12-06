
(function() {
    var Contents = document.getElementById("Contents");
    var taylor = document.querySelectorAll(".TayLorSwift");
    var time = 0;
    var hammer = new Hammer(Contents);

    hammer.on("swipeleft", function(e) {
        console.log("swipe");
        var active = document.querySelector(".TayLorSwift");
        for (i = 0; i < taylor.length; i++) {
            if (taylor[i] == active) {
                var replace = taylor[++i];;
            }
        }
    }});
