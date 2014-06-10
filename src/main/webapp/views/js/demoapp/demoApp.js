var demoApp = angular.module("demoApp", ["ngRoute","config"]);

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

demoApp.filter('currencyF', function(){
    return function (input,exchangeRate){
        if(!exchangeRate){
            exchangeRate = 0.017;
        }
        var amount =input * exchangeRate
        return amount.toFixed(2);
    }
})