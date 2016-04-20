(function() {
  'use strict';

  angular.module('optimusApp.service').service('aboutServices', about);

  about.$inject = ['$http','$q'];

  function about($http,$q) {
    var servicio = this;
    servicio.find =  getPost;
    servicio.update = onPut;
    servicio.delete = onDelete;
    servicio.add = onAdd;
    servicio.objectAbout = {};

    function getPost() {
      var deferred = $q.defer();
      var urlRequest ='http://beta.json-generator.com/api/json/get/DXXROxj';
      $http.get(urlRequest).success(function(response) {
          deferred.resolve(response);
      }).error(function(error) {
        deferred.reject(error);
      });
      return deferred.promise;
    }

    function onPut(loquesea) {
      var deferred = $q.defer();
      var urlRequest ='http://beta.json-generator.com/api/json/get/DXXROxj/'+loquesea.id;
      $http.put(urlRequest,loquesea).success(function(response) {
          deferred.resolve(response);
      }).error(function(error) {
        deferred.reject(error);
      });
      return deferred.promise;
    }

    function onDelete(loquesea) {
      var deferred = $q.defer();
      var urlRequest ='http://beta.json-generator.com/api/json/get/DXXROxj/'+loquesea.id;
      $http.delete(urlRequest).success(function(response) {
          deferred.resolve(response);
      }).error(function(error) {
        deferred.reject(error);
      });
      return deferred.promise;
    }

    function onAdd(loquesea) {
      var deferred = $q.defer();
      var urlRequest ='http://beta.json-generator.com/api/json/get/DXXROxj';
      $http.post(urlRequest,loquesea).success(function(response) {
          deferred.resolve(response);
      }).error(function(error) {
        deferred.reject(error);
      });
      return deferred.promise;
    }

  }
})();
