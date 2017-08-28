huggeoApp.directive('headerGroup', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/headerGroup.htm',
        replace: true,
        transclude: true
    }
});

huggeoApp.directive('inputGroup', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/inputGroup.htm',
        replace: true,
        transclude: true
    }
});


huggeoApp.directive('userItem', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/userItem.htm',
        replace: true,
        scope: {
            user: '='
        }
    }
});