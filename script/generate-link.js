
var myapp = angular.module('myapp', [ "ngClipboard", "bitly.generator" ]);

myapp.config([ 'ngClipProvider', 'bitlyProvider', function(ngClipProvider, bitlyProvider) {
	ngClipProvider.setPath("script/ZeroClipboard.swf");
	bitlyProvider.cfgBitly({
		login : 'ctoiquies',
		api : 'R_476c40c75ba9a8cfd9e0f2fb60f5d7e2',
		domain : 'https://api-ssl.bitly.com', // optional. (http://api.bit.ly by default)
		version : '3' // optional. Tested with bitly api versions: 2.0.1 & 3 (3 by default)
	});
} ]);

myapp.controller('mainController', [ '$scope', 'bitly', function($scope, bitly) {

	$scope.model = {
		shortUrls : {},
		input : "moche",
		getLink : function() {
			if (this.shortUrls[this.input] != null) {
				return this.shortUrls[this.input];
			} else {
				return this.generateLink();
			}
		},
		show: function(){
			return this.input !== "";
		},
		generateLink : function() {
			var adj = this.input.trim().replace(/[ ]/g, "_");
			var href = document.location.href;
			var index = href.lastIndexOf("/");
			var url = index === -1 ? href:href.substring(0, index);
			return url + "/" + adj;
		},
		shorten : function() {
			if (this.input != null) {
				var model = this;
				var longUrl = this.generateLink();
				bitly.getShortUrl(longUrl).then(function(data) {
					console.log("bit.ly DATA:", data);
					model.shortUrls[model.input] = data;
				}, function(e) {
					console.log("Bit.ly ERROR: ", e);
					model.shortUrls[model.input] = null;
				});
			}
		}
	};

	$scope.fallback = function(copy) {
		window.prompt('Press cmd+c to copy the text below.', copy);
	};

} ]);