/// @file services.js
/// @brief AngularJS services, AJAX communication with the server

angular.module('myAppServices', [])
    .service('srvInfo', //current information from zsm server
             function($http) {
                 this.baseURL = client_server_prefix + '/ajax/'; //the prefix defined in version.js

                 this.getVersion = function(callback) {
                     return $http.get(this.baseURL + 'version/get').success(callback);
				 };
                 this.getCurrent = function(callback) {
                     return $http.get(this.baseURL + 'current/get').success(callback);
                 };
                 this.getCppNumber = function(callback) {
                     return $http.get(this.baseURL + 'calcpy/getNumber').success(callback);
                 };

		 this.doLoginUser = function(callback, name, pass) { 
		     return $http.get(this.baseURL + 'calcpy/loginUser', { params: { 'name': name, 'pass': pass } }).success(callback);
		 };
				 
		 this.doRegisterUser = function(callback, name, pass) { 
		     return $http.get(this.baseURL + 'calcpy/registerUser', {  params: { 'name': name, 'pass': pass} }).success(callback);
		 };

		 this.sendID = function(callback, idSource,idDest) {
                     return $http.get(this.baseURL + 'calcpy/printID', { params: { 'IDsource': idSource , 'IDdestination' : idDest} }).success(callback);
                 };
		 
		 this.communicateCpp = function(callback) {
                     return $http.get(this.baseURL + 'calcpy/cppCom').success(callback);
                 };
	
			 })
	.service('srvCommands', //commands
			 function($http) {
                 this.baseURL = client_server_prefix + '/ajax/calcpy/'; //the prefix is defined in version.js

                 this.getCppCommands = function(callback) {
                     return $http.get(this.baseURL + 'getCommands').success(callback);
                 };
				 this.startCommand = function(callback) {
					 return $http.get(this.baseURL + 'startCommand').success(callback);
				 };
             });
