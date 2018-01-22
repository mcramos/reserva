var sys = require('util');
var exec = require('child_process').exec;
var schedule = require('node-schedule');


function f(error, stdout, stderr) {
    "use strict";
    sys.print('stdout' + stdout);
    sys.print('stderr' + stderr);
}

var j = schedule.scheduleJob('15 0 7 * * *', function(){
    console.log(new Date());
    exec('reserve',f);

});
