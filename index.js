// am I on a PI running on a debian-like distrop
// if grep -q BCM2708 /proc/cpuinfo ; then echo "It's a pi"; fi; 

var isrpi = function (cpufile, cb) {
	var cpuinfo = cpufile || '/proc/cpuinfo',
	fs = require('fs');
	
	fs.exists(cpuinfo, function (exists) {
		if(!exists)
			return cb(false);

		fs.readFile(cpuinfo, function (err, data) {
		  if (err) return cb(false);
		  return cb(/BCM2708/g.test(data));
		});

		return cb(false);
	});
};

module.exports = isrpi;