'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {

  $scope.wolfImage = "'sheep.jpg'";
  $scope.sheepImage = 'sheep.jpg';

  $scope.sheep = [...new Array(8)].map(() => {
    // Uses random value to decide which element to turn into a wolf
    return Math.random() > 0.2;
  });


  $scope.saySomething = (event) => {
    console.log(event.detail, event.target.tagName);
    if(event.target.tagName === 'NG-WOLF') {
      $scope.wolfImage = 'wolf.jpg';
      alert(event.detail);
    } else {
      event.target.style['opacity'] = 0.5;
    }
  }
}]);