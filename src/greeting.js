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

function main(params) {
    var name = params.name || params.payload || 'stranger';
    var place = params.place || 'i/o insights Richard v0.1';
    //challenge 
    
    http.createServer(function (req, res) {
    if(req.method=='POST') {
            var body='';
            req.on('data', function (data) {
                body +=data;
            });
            req.on('end',function(){
                var POST =  qs.parse(body);
                console.log(POST);
            });
    }
    else if(req.method=='GET') {
        var url_parts = url.parse(req.url,true);
        console.log(url_parts.query);
    }
});
    
   
const options = {  
    url: 'http://logs-01.loggly.com/inputs/e156ff2e-23b6-48eb-8090-6a4c46cdec3a/tag/http/',
        method: 'POST',
    json: {"message": "Hello From GitHub v2"}
    
};



request(options, function(err, res, body) {  
    let json = JSON.parse(body);
    console.log(json);
});
    
   
    

    
    return {payload:  'Hello, ' + name + ' from ' + place + ' !' + req.method};
}
