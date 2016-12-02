// TIMER

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

// TIMER DISPLAY & Narrator story display

jQuery(function ($) {
    var fiveMinutes = 60 * 5,
        display = $('#time');
    startTimer(fiveMinutes, display);
});

// jQuery(function ($) {
//    
//});


// SCROLLING FADES LOGO GRAPHIC

var fadeStart=100,
    fadeUntil=200,
    fading = $('#introGraphic');

$(window).bind('scroll', function(){
    var offset = $(document).scrollTop(),
    opacity=0;

if(offset<=fadeStart){
    opacity=1;
} else if (offset<=fadeUntil){
    opacity=1-offset/fadeUntil;
}
    fading.css('opacity',opacity).html(opacity);
});