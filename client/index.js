import angular from 'angular';

const app = angular.module('App', []);

app.controller('LogFileController', function ($scope, $http) {
	let total;
	$http({
		method: `GET`,
		url: `http://localhost:8000/api/syslogs`,
	}).then(
		function successCallBack(res) {
			total = res.data.length;
			$scope.data = res.data;
		},
		function errorCallback(err) {
			console.log(err);
		}
	);

	$scope.totalDisplayed = 10;
	$scope.reload50 = function () {
		$scope.totalDisplayed += 50;
	};
	$scope.reloadAll = function () {
		$scope.totalDisplayed = total;
	};
});

app.controller('MiscController', function ($scope) {
	$scope.printThisPage = function () {
		window.print();
	};
});
