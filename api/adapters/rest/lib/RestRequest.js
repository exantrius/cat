var Client = require('node-rest-client').Client;
var url = require('url');
var _i = require('underscore.inflections');

var client = new Client();

/**
 * This is constructor of RestRequest
 * @param params
 * @constructor
 */
function RestRequest(params) {
	this.connections = params.connections;
	this.connection = params.connection;
	this.collection = params.collection;
	this.options = params.options;
	this.defaults = params.defaults;
	this.cb = params.cb;
};

/**
 * This method gets url and after that make a request to api server
 * @return void
 */
RestRequest.prototype.exec = function() {
	// get url for future request
	var preparedUrl = this._getUrl();

	// send query
	var request = client.get(preparedUrl, function(data) {
		// success -> send data to model method callback
		this.cb(null, data);
	}.bind(this));

	// request error handling
	request
		.on('error', function (err) {
			this.cb(err);
		})
		.on('requestTimeout', function (req) {
			console.log("request has expired");
			req.abort();
		})
		.on('responseTimeout', function (res) {
			console.log("response has expired");
		});
};

/**
 * This method derives url as string for future rest request
 * @private
 * @return string
 */
RestRequest.prototype._getUrl = function() {
	// get host, port for future url
	var urlObj = {
		protocol: 'http',
		slashes: true,
		hostname: this.connections[this.connection].host || this.defaults.host,
		port: this.connections[this.connection].port || this.defaults.port
	};

	// get resource name
	var resource = _i.pluralize(this.collection);

	// add resource name to pathname
	var pathname = resource + '/';

	// parse options and integrate to request
	var id = this.options.id || this.options.where.id;
	if (id) {
		pathname += id + '/';
	}

	urlObj.pathname = pathname;

	// shape url string for future request
	var preparedUrl = url.format(urlObj);

	return preparedUrl;
};


module.exports = RestRequest;
