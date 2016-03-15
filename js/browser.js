var alarmClock = require('./alarmClock.js').alarmClock

$(document).ready(function(){
  $('#setAlarm').submit(function(event){
    event.preventDefault();
  });
});
