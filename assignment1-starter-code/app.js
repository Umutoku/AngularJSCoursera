var app = angular.module('lunchCheck', []);

app.controller('LunchCheckController', ['$scope', function($scope) {
  $scope.lunchItems = "";
  $scope.message = "";

  $scope.checkLunch = function() {
    var items = $scope.lunchItems.split(",");
    var count = 0;

    for (var i = 0; i < items.length; i++) {
      if (items[i].trim() !== "") {
        count++;
      }
    }

    if (count === 0) {
      $scope.message = "Please enter data first";
    } else if (count <= 3) {
      $scope.message = "Enjoy!";
    } else {
      $scope.message = "Too much!";
    }
  };
}]);
