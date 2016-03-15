function Clock() {
  this.alarm = alarm;
}

// Clock.prototype.setAlarm = function (time) {
//   var newAlarm = moment(time, "hh:mm a").format("LT");
//   this.alarm = newAlarm;
// };


exports.Clock = Clock;


// var alarmTime = $('#setAlarmTime').val();
// if(currentTime === setAlarmTime){
//   return true;
// } else{
//   return false;
// }

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

var alarmClock = require('./../js/Clock.js');
var prompt = require('prompt');
prompt.start();

prompt.get('alarm_time', function(err, result) {
  result = alarmClock(result.alarm_time);
  console.log(result);
});

// var currentTime = null,
//
// var update = function(){
//   var time = moment(new Time())
//   currentTime.html(time.format('MMMM Do YYYY, h:mm:ss a')('LTS'));
// };
//
// $(document).ready(function(){
//   $('#time').text(moment.format());
//   currentTime = $('#time')
//   update();
//   setInterval(update, 1000);
// });

// var datetime = null;
// var date = null;
//
// var update = function () {
//   date = moment(new Date())
//   datetime.html(date.format('dddd, h:mm:ss a'));
// };
//
// $(document).ready(function(){
//   $('#time').text(moment().format('dddd, h:mm:ss a'));
//   datetime = $('#time')
//   update();
//   setInterval(update, 1000);
// });
