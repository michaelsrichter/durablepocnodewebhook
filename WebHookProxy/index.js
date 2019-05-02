var request = require('request');

module.exports = function (context) {
    request(context.bindings.azureFunctionUrl, function (error, response, body) {
        context.done(null, body);
    });
};