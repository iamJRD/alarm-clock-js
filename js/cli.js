var alarmClock = require('./alarmClock.js');
var prompt = require('prompt');
prompt.start();

prompt.get('alarm_time', function(err, result) {
  result = alarmClock(result.alarm_time);
  console.log(result);
});
