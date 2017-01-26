(function () {
'use strict';

angular.module('FoodApp', [])
.controller('FoodController', FoodController);

FoodController.$inject = ['$scope', '$filter'];
function FoodController($scope, $filter) {


  $scope.HowMuchFood = function () {


      // if input is empty
      if(!$scope.food || $scope.food == null){
        $scope.howMuchFood =  "Empty input!!!!";
        // if something is in this box less than 4
      }else if( $scope.food.split(',').length<=3){
        $scope.howMuchFood =  "Enjoy!";
        // more than 3
      }else{
        $scope.howMuchFood =  "Too much!";
      }

  };
}

})();
