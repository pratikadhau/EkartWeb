var demoApp = angular.module("demoApp", []);

demoApp.config(function($routeProvider) {
	$routeProvider.when('/categoryList', {
		templateUrl : "partial/categoryList.html",
		controller : CategoryController
	}).when('/productList/:categoryId/', {
		templateUrl : "partial/productList.html",
		controller : ProductController
	}).when('/invoice', {
		templateUrl : "partial/invoice.html",
		controller : InvoiceController
	}).otherwise({
		redirectTo : '/categoryList'
	});
});
