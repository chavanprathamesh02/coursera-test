(function () {
'use strick';

var x = "Hello";

angular.module('myFirstApp',[])

.controller('myFirstController', function ($scope){
  $scope.name = "Prathamesh";
  $scope.sayHello = function () {
    return "Hello Coursera!"
  }
});

})();
