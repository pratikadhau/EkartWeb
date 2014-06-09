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

demoApp.controller('InvoiceController', InvoiceController);