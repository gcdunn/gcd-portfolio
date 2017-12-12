'use strict';

app.controller("MainCtrl", function ($location, $rootScope, $scope, FirebaseService) {

  FirebaseService.getInfo().then((results) => {
    $scope.name = results.data;
  }).catch((err) => {
    console.log("error in getInfo", err);
  });
});