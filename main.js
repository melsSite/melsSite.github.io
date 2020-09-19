
$( document ).ready(function() {
    let b = $("#vidId").get(0);
    $(window).scroll(function() {
        if($(document).scrollTop() > 0) {
            $("#vidId").addClass("vidMin")
            $("#vidId").removeClass("vid")
        } else {
            
            $("#vidId").removeClass("vidMin")
            $("#vidId").addClass("vid")
        }

        clearTimeout($.data(this, 'scrollTimer'));
        b.play()
        $.data(this, 'scrollTimer', setTimeout(function() {
            // do something
            b.playbackRate = 2.0;
            
            b.pause()
        }, 50));
    });

    // $("#a").click(alert("hey"))
});

function scrollToAnchor(aid, time){
    var aTag = $("#" +aid);
    $('html,body').animate({scrollTop: aTag.offset().top},time);
}