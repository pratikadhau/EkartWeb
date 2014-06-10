var CategoryService= ['$http','ENV',function($http,ENV) {
	var categoryService={};
	categoryService.getCategories = function(callBack) {
        $http.get(ENV.EKartBaseURL+"/category/").success(function(data){
            callBack(data);
        });
	};
	return categoryService;
}];

demoApp.factory("CategoryService",CategoryService);