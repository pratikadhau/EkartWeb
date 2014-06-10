var ProductService = ['$http','CartService','ENV',function ($http,CartService,ENV){
    var productService={};

    productService.getProducts = function(categoryId,callBack){
        $http.get(ENV.EKartBaseURL+"/category/"+categoryId).success(function(data) {
             callBack(data);
        });
    }

    return productService;
}]

demoApp.factory("ProductService",ProductService);