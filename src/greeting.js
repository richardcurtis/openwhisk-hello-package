/**
 * Return a simple greeting message for someone.
 *
 * @param name A person's name.
 * @param place Where the person is from.
 */
function main(params) {
    var name = params.name || params.payload || 'stranger';
    var place = params.place || 'i/o insights Richard';
    
    var request = require("request");
request("http://logs-01.loggly.com/inputs/e156ff2e-23b6-48eb-8090-6a4c46cdec3a/tag/http/'", function(error, response, body) {
});
    

    
    return {payload:  'Hello, ' + name + ' from ' + place + ' !'};
}
