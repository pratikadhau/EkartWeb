var CategoryController = ['$scope','CategoryService',function($scope, CategoryService) {
	CategoryService.getCategories(function(data){
	$scope.categories  = data;
	});
}];

demoApp.controller('CategoryController', CategoryController);