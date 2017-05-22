/**
 * Return a simple greeting message for someone.
 *
 * @param name A person's name.
 * @param place Where the person is from.
 */
var http = require('http');

function main(params) {
    var name = params.name || params.payload || 'stranger';
    var place = params.place || 'i/o insights Richard v0.1';
    //challenge 
    
    var method = "";
    var server = module.exports = http.createServer(function (req, res) {
        method = req.headers['method']
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
    
   
    

    
    return {payload:  'Hello, ' + name + ' from ' + place + ' !' + method};
}
