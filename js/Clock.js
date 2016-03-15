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
