'use strict';

//(function()
//{*
	
	var app = angular.module('learningengine',['ngRoute']);
	
	app.config(['$routeProvider', function($routeProvider) 
	{
      $routeProvider.
        when('/app',
        {
          templateUrl: 'resources/views/home.html',
          controller: 'HomeController'
        }).
        when('/app/courses',
        {
          templateUrl: 'resources/views/allCourses.html',
          controller: 'CourseController'
        }).
        otherwise(
        {
          redirectTo: '/app'
        });
    }]);

	
	app.controller('HomeController', ['$scope', function ($scope) 
	{
         $scope.message = "home page";
    }]);
	
	app.controller('CourseController', ['$scope', '$http', function ($scope, $http) 
	{
		$scope.message = "all courses page";
         
         $http.get('app/courses').success(function(data)
		 {
             $scope.courses = data;
             
         });
         
    }]);
	
	


//})();