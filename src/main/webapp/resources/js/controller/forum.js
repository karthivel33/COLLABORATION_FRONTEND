
	var app = angular.module('webapp', []);
	
	app.controller('ForumListController', ['$http', function($http) {
		var self = this;
		self.collections = {};
		self.error = '';
		
		$http.get('/Swirlfeed/forum/all')
			.then(function mySuccess(response){
				self.collections = response.data;
			}, function myError(response) {
				self.error = response.statusText;
			}
		)
	}]);
	

	app.controller('ForumController', ['$http', function($http) {
		var self = this;
		self.collection = {};
		self.error = '';
		//alert(forumId);
		$http.get('/Swirlfeed/post/all/' + forumId)
			.then(function mySuccess(response){
				self.collection = response.data;
			}, function myError(response) {
				self.error = response.statusText;
			}
		)
	}]);
	
	
	app.controller('PublicForumListController', ['$http', function($http) {
		var self = this;
		self.forums = {};
		self.error = '';
		
		$http.get('/Swirlfeed/forums/all')
			.then(function mySuccess(response){
				self.forums = response.data;
			}, function myError(response) {
				self.error = response.statusText;
			}
		)
		
	}]);
	 	
	
	app.controller('PublicForumController', ['$http', function($http) {
		var self = this;
		self.forum = {};
		self.error = '';
		
		$http.get('/Swirlfeed/get/forum/' + forumId)
			.then(function mySuccess(response){
				self.forum = response.data;
			}, function myError(response) {
				self.error = response.statusText;
			}
		)
		
	}]);
	