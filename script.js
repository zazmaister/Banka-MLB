angular.module("banka",[]);

angular.module("banka").controller("BankaController", function($scope){
	$scope.izracun;
	$scope.izracunIzplacilo;

	$scope.calculate = function(){
		$scope.izracun = $scope.mesecnoVplacilo * $scope.steviloMesecev * ($scope.obrestnaMera/100);
	}

	$scope.calculateIzplacilo = function(){
		$scope.izracunIzplacilo = $scope.mesecnoIzplacilo * $scope.steviloMesecev1;
	}
});