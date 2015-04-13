// countdown timer scripts //
	// set the date we're counting down to
var target_date = new Date('Apr, 15, 2015 10:00:00').getTime();
 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
var countdown = document.getElementById('countdown');
 
// update the tag with id "countdown" every 1 second
setInterval(function () {
 
    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // format countdown string + set tag value
    countdown.innerHTML = '<div class="row center"><div class="container"><div class="col-xs-0 col-sm-0 col-md-3"></div><div class="col-xs-12 col-sm-12 col-md-7 col-lg-6"><div class="col-md-2"></div><div class="col-md-2"><span class="days"><h1>' + days +  ' </h1><b>Days</b></span></div><div class="col-md-2"><span class="hours"><h1>' + hours +  ' </h1><b>Hours</b></span></div><div class="col-md-2"><span class="minutes"><h1>' + minutes +  ' </h1><b>Minutes</b></span></div><div class="col-md-2"><span class="seconds"><h1>' + seconds +  ' </h1><b>Seconds</b></span></div><div class="col-md-2"></div></div><div class="col-xs-0 col-sm-0 col-md-3"></div></div></div>' ;  
}, 1000);

// end countdown timer scripts //


// hover roll //

$(document).ready( function() {

    $('.gallery-item').hover( function() {
        $(this).find('.img-title').fadeIn(300);
    }, function() {
        $(this).find('.img-title').fadeOut(100);
    });
    
});

// end hover roll //