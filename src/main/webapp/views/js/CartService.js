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