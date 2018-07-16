angular.module('mainApp').controller('mainCtrl', function($scope, mainServ, $location){

  $scope.test = "working";

  var local = $location.url();
  $scope.currentURL = getLocal(local);
  function getLocal(local) {
    console.log('local: ' + local);
    console.log('local cut: ' + local.slice(1, local.length + 1));
    return local.slice(1, local.length + 1);
  };

});
