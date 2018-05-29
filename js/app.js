(function(){
	var app = angular.module('gemStore', []);

	app.controller('Practice', function(){
		this.tab = 1;

		this.setTab = function(value){
			this.tab = value;
		};

		this.isSet = function(check){
			return this.tab === check;
		};
	});


})();