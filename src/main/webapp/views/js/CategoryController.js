var CategoryController = function($scope, CategoryService) {
	CategoryService.getCategories(function(data){
	$scope.categories  = data;
	});
};

demoApp.controller('CategoryController', CategoryController);