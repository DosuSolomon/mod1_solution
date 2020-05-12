(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunch = "";
    $scope.wordSplit = [];

    $scope.splitLunch = function () {
      $scope.wordSplit = $scope.lunch.split(",");

      $scope.msgController = function (length) {

        if (($scope.wordSplit.length ==2)||($scope.wordSplit.length ==3)){
          return "Enjoy!" ;
        }
        else if ($scope.wordSplit.length >3) {
          return "Too much!";
        }
        else {
          return "Please enter data first";
        }

      };

      console.log($scope.wordSplit);
    };



  };

})();
