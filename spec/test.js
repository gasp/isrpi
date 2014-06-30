var isrpi = require("../index.js"), 
	fs = require("fs");

describe("isrpi is no pi", function() {
	var r = Math.floor(Math.random()*10000);
	var tmpfile = './tmp_nopi'+r+'.txt';
	fs.writeFileSync(tmpfile, 'I am no pi\ntoo bad');

	it("checks a non-rpi archi", function() {
		isrpi(false, function(is){
			expect(is).toBeFalsy();
		});
	});

	fs.unlink(tmpfile, function(){
		console.log("temp file %s cleaned",tmpfile);
	});
});

describe("isrpi is a pi", function() {
	var r = Math.floor(Math.random()*10000);
	var tmpfile = './tmp_nopi'+r+'.txt';
	fs.writeFileSync(tmpfile, 'I am a pi\nsjhkdksBCM2708bs\nsee the line above');

	it("checks a fake rpi archi", function() {
		isrpi(false, function(is){
			expect(is).toBeTruthy();
		});
	});

	fs.unlink(tmpfile, function(){
		console.log("temp file %s cleaned",tmpfile);
	});
});