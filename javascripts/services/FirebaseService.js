'use strict';

app.service("FirebaseService", function ($http, $q, FIREBASE_CONFIG) {
  const getInfo = () => {
    return $http.get(`${FIREBASE_CONFIG.databaseURL}/name.json`);
  };

  return { getInfo: getInfo };
});