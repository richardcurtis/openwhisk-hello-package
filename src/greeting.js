/**
 * Return a simple greeting message for someone.
 *
 * @param name A person's name.
 * @param place Where the person is from.
 */

var sys = require ('sys'),
url = require('url'),
http = require('http'),
qs = require('querystring');
 var method = '';


function main(params) {
   
    var name = params.name || params.payload || 'stranger';
    
    
    //challenge 
//     app.get('/', function(req, res) {
//      method = 'User-Agent: ' + req.headers['user-agent']
//});
     //var method = params.__ow_method;
     //var pathname = url.parse(request.url).pathname;
 function onRequest(request, response) {
var pathname = url.parse(request.url).pathname;         // I don't understand the pathname property
}
 
    var place = params.place || 'i/o insights Richard v0.1' || pathname;
 

   
const options = {  
    url: 'http://logs-01.loggly.com/inputs/e156ff2e-23b6-48eb-8090-6a4c46cdec3a/tag/http/',
        method: 'POST',
    json: {"message": "Hello From GitHub v2"}
    
};

    
   
    

    
    //return {payload:  'Hello, ' + name + ' from ' + place + ' !' + method};
  return { response: params };
}
