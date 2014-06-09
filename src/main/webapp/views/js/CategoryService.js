var CategoryService= function($http,$q) {
	var categoryService={};
	categoryService.getCategories = function(callBack) {
        $http.get("http://localhost:8080/Ekart/category/").success(function(data){
            callBack(data);
        });
	};
	return categoryService;
};

demoApp.factory("CategoryService",CategoryService);