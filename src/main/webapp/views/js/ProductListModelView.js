function ProductListModelView(CartService){
       this.cartProductList=CartService.getCartProducts();
       this.productList=[];

       this.removeFromCart = function(productId){
        CartService.removeFromCart(productId);
      }

      this.addToCart = function(product) {
        CartService.addToCart(product);
      };

}