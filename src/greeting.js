/**
 * Return a simple greeting message for someone.
 *
 * @param name A person's name.
 * @param place Where the person is from.
 */

//var sys = require ('sys'),
//url = require('url'),
//http = require('http'),
//qs = require('querystring');
// var method = '';

var querystring = require('querystring');
var http = require('http');
var fs = require('fs');
var request = require('request');

function main(params) {
   
    var name = params.name || params.payload || 'stranger'; 
    var place = params.place || 'i/o insights Richard v0.1' || pathname;

	    
		var rex='';
		var method = params.__ow_method;
		if (method=="get" ) {
		  rex = params.challenge;
		}
		if (method=="post") {
		  rex = "POST sent";
		}
		
    	var x = new Buffer(JSON.stringify(params)).toString();
	request.post(
    'http://logs-01.loggly.com/inputs/e156ff2e-23b6-48eb-8090-6a4c46cdec3a/tag/http/',
    { json: { "message": "Hello From GitHub v2" + x + ":Method=" + method + ", body " + rex} },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
); 

    
  return {
        statusCode: 200,
        headers: { 'Content-Type': 'text/plain' },
        body: rex,
    };
}
