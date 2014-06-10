var InvoiceController= ['$scope','$http','CartService','ENV',function($scope, $http, CartService,ENV){
	 $http({
         url: ENV.EKartBaseURL+'/cart',
         method: "POST",
         data : CartService.getCart(),
         headers: {'Content-Type': 'application/json'}
     }).success(function(data) {
		$scope.invoice=data;
		CartService.clear();
	});
}];

demoApp.controller('InvoiceController', InvoiceController);