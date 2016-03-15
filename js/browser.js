var Clock = require('./../js/Clock.js').Clock;


$(document).ready(function(){
  var alarm = null;
  $('#alarm-sounder').hide();

  setInterval(function(){
    $('.time-display').text(moment().format("dddd, hh:mm:ss a"));
  });

  $('#setAlarm').submit(function(event){
    event.preventDefault();

    alarm = $('#setAlarmTime').val();
    $('#timer').text("You set your alarm for: " + alarm);
  });

  function alarmGoesOff(){
    if (alarm){
      if (moment().format("HH:mm") === alarm){
        $('#alarm-sounder').toggle();
      }
      else {
        console.log("go to sleep");
      }
    } else {
      console.log("no alarm is set");
    }
  }
  setInterval(alarmGoesOff, 500);
});
