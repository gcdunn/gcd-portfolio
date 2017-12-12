'use strict';

app.run(function(FIREBASE_CONFIG){
  firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider){
  $routeProvider
    .when("/", {
      templateUrl: 'partials/main.html',
      controller: 'MainCtrl'
    })
    .otherwise('/');
});