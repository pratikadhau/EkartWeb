
var CategoryController = function($scope, CategoryService) {
	$scope.categories = CategoryService.getCategories();
};

var ProductController = function($scope, $routeParams, $http,CartService) {
	$http.get("http://localhost:8080/Ekart/category/"+$routeParams.categoryId).success(function(data) {
		$scope.productList=data;
	});
	$scope.cartprosuctList = CartService.getCartProducts();
	
	$scope.addToCart = function(product) {
		CartService.addToCart(product);
	};
	
};



var InvoiceController= function($scope, $http, CartService){
	 $http({
         url: 'http://localhost:8080/Ekart/cart',
         method: "POST",
         data : CartService.getCart(),
         headers: {'Content-Type': 'application/json'}
     }).success(function(data) {
		$scope.invoice=data;
		CartService.clear();
	});
};

demoApp.factory('CartService', function() {
	var cartprosuctList = [];
	return {
		getCartProducts : function() {
			return cartprosuctList;
		}
	,
		addToCart : function(product) {
			cartprosuctList.push(product);
		}
	,
		getCart : function() {
			var cart = {
				productIds : []
			};
			for (var int = 0; int < cartprosuctList.length; int++) {
				var productId = cartprosuctList[int].productId;
				cart.productIds.push(productId);
			}
			return cart;
		}
	,
		clear : function(){
			cartprosuctList=[];
		}
	};
});


demoApp.controller('CategoryController', CategoryController);
demoApp.controller('ProductController', ProductController);
demoApp.controller('InvoiceController', InvoiceController);