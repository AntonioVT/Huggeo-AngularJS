huggeoApp.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

    $routeProvider
        .when('/my-view1', {
            templateUrl: 'pages/view1.html',
            controller: 'View1Ctrl'
        })

        .when('/my-view2', {
            templateUrl: 'pages/view2.html',
            controller: 'View2Ctrl'
        })

        .when('/home', {
            templateUrl: 'pages/main.html',
            controller: 'MainCtrl'
        })

        .otherwise({ redirectTo: '/home' });
}]);