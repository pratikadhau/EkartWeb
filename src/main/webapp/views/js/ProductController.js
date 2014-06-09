var ProductController = ['$scope','$routeParams','ProductService','CartService',function($scope, $routeParams,
                                                                ProductService, CartService){
    ProductService.getProducts($routeParams.categoryId,function(data){
        var model1 =new ProductListModelView(CartService)
        $scope.model=model1;
        $scope.model.productList=data;

    });
}]

demoApp.controller('ProductController',ProductController);