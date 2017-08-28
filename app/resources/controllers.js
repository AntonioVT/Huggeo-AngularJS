
huggeoApp.controller('View1Ctrl', ['$scope', function ($scope) {
    $scope.example = 'Example';
}]);


huggeoApp.controller('View2Ctrl', [function () {

}]);


huggeoApp.controller('MainCtrl', ['$scope', 'databaseService', function($scope, databaseService){
    $scope.users = databaseService.users;

}]);
