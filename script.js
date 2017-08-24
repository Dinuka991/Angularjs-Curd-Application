var app =  angular.module('appController',[])

app.controller('myCtrl',function ($scope) {
    $scope.records = ['saman','vimal','agith']
    $scope.next = function ($scope , nE) {
            $scope.message = $scope.nE

    }

})