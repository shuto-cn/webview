// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

	.run(function ($ionicPlatform) {
		$ionicPlatform.ready(function () {
			if (window.cordova && window.cordova.Keyboard) {
				// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
				// for form inputs)
				cordova.Keyboard.hideKeyboardAccessoryBar(true);

				// Don't remove this line unless you know what you are doing. It stops the viewport
				// from snapping when text inputs are focused. Ionic handles this internally for
				// a much nicer keyboard experience.
				// cordova.plugins.Keyboard.disableScroll(true);
			}
			if (window.StatusBar) {
				StatusBar.styleDefault();
			}
		});
	})

	.controller('webviewController', ['$scope', '$ionicPlatform', function ($scope, $ionicPlatform) {
		$scope.webview = { enabled: false, version: 0 };
		$ionicPlatform.ready(function () {
			plugins.webViewChecker.isWebViewEnabled()
				.then(function (enabled) {
					console.log(enabled);
					$scope.$apply(function(){
						$scope.webview.enabled = enabled;
					})
					console.log($scope.webview);
				})
				.catch(function (error) {
					console.error(error);
				});
			plugins.webViewChecker.getWebViewVersion()
				.then(function (version) {
					console.log(version);
					$scope.$apply(function(){
						$scope.webview.version = version;
					})
					console.log($scope.webview);
				})
				.catch(function (error) {
					console.error(error);
				});
		})
	}])
