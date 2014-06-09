var ProductService = function ($http,CartService){
    var productService={};

    productService.getProducts = function(categoryId,callBack){
        $http.get("http://localhost:8080/Ekart/category/"+categoryId).success(function(data) {
             callBack(data);
        });
    }

    return productService;
}

demoApp.factory("ProductService",ProductService);