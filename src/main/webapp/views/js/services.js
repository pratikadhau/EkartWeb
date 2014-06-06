var CategoryService= function($http,$q) {
	 var categoryService={};
	categoryService.getCategories = function() {
		var promise= $http.get("http://localhost:8080/Ekart/category/").then(function(response) {
			return response.data;
		});
		return  promise ;
	};
	return categoryService;
};

demoApp.factory("CategoryService",CategoryService);