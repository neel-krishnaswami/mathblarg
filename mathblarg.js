/***********************************************
 *
 *  A Phantom.js script using MathJax to
 *  convert the TeX equations in a file into SVG images.
 *  
 *  Usage:  phantomjs mathblarg.js input.html > output.html
 *  
 */


var system = require('system');
var webpage = require('webpage');

//
//  Get arguments, and print usage if not enough
//
if (system.args.length !== 2) {
  console.log('Usage: '+system.args[0]+' filename');
  phantom.exit();
}

var filename = system.args[1];

var page = webpage.create();

page.open(filename, function (status) {
    if (status !== "success") {
	console.log("ERROR -- Something went wrong....");
	phantom.exit();
    } else {
	//
	//  This gets called when the MathJax is done
	//
	page.onCallback = function (msg) {
	    if (msg === "MathJax Done") {
		console.log(page.evaluate(function () {
		    // remove the MathJax processing info. 
		    var msg = document.getElementById("MathJax_Message");
		    if (msg) { 
			msg.outerHTML = "";
		    };
		    var elts = document.querySelectorAll("span[id*='MathJax'],div[id*='MathJax']");
		    for (var i = 0; i < elts.length; i++) {
			elts[i].id = null;
		    }
		    var elts = document.querySelectorAll("span[class*='MathJax'], div[class*='MathJax']");
		    for (var i = 0; i < elts.length; i++) {
			elts[i].className = elts[i].className.replace('MathJax','FooJax');
		    }
		    var scripts = document.querySelectorAll("script[type*='math/tex']");
		    for (var i = 0; i < scripts.length; i++) {
			scripts[i].outerHTML = "";
		    }			
		    return document.body.innerHTML;
		}));
	    } else if (msg === "MathJax Timeout") {
		console.log("ERROR -- Timed out waiting for MathJax");
	    } else {
		console.log(msg);
	    }
	    phantom.exit();
	};
	//
	// Timeout after 10 seconds
	//
//	page.evaluate(function () {
//	    setTimeout(function () {window.callPhantom("MathJax Timeout")},10000);  
//	});
    };
});
