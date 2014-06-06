
var CategoryController = function($scope, CategoryService) {
	$scope.categories = CategoryService.getCategories();
};

var ProductController = function($scope, $routeParams, $http,CartService) {
	$http.get("http://localhost:8080/Ekart/category/"+$routeParams.categoryId).success(function(data) {
		$scope.productList=data;
	});
	$scope.cartProductList = CartService.getCartProducts();

	$scope.removeFromCart = function(productId){
	    CartService.removeFromCart(productId);
	}

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
	var cartProductList = [];
	return {
		getCartProducts : function() {
			return cartProductList;
		}
	,
		addToCart : function(product) {
			cartProductList.push(product);
		}
	,
		getCart : function() {
			var cart = {
				productIds : []
			};
			for (var int = 0; int < cartProductList.length; int++) {
				var productId = cartProductList[int].productId;
				cart.productIds.push(productId);
			}
			return cart;
		}
	,
		clear : function(){
			cartProductList=[];
		}
	,
	   removeFromCart : function(productId){
	        var index={};
	        for (var int = 0; int < cartProductList.length; int++) {
	            if(productId == cartProductList[int].productId){
	                index=int;
	            }
	        }
	        cartProductList.splice(index,1);
	    }
	};
});


demoApp.controller('CategoryController', CategoryController);
demoApp.controller('ProductController', ProductController);
demoApp.controller('InvoiceController', InvoiceController);