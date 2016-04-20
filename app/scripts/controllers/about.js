(function() {
  'use strict';

  angular.module('optimusApp').controller('AboutCtrl',AboutCtrl);
  AboutCtrl.$inject = ['$scope', '$routeParams','$location','$timeout','ngDialog','aboutServices'];

  function AboutCtrl($scope, $routeParams,$location,$timeout,ngDialog,aboutServices) {

    var ab=this;
    ab.dataAbouts=[];
    ab.objAbout=aboutServices.objectAbout;

    function listAbouts(){
      aboutServices.find().then(function(data){ab.dataAbouts=data});
    }

    ab.onViewDetail = function (item){
        console.log(item);
        ab.objAbout.name = item.name;
        ab.objAbout.eyeColor = item.eyeColor;
        ab.objAbout.age = item.age;
        console.log(ab.objAbout.name);
        ngDialog.open({ template: 'views/viewdetail-about.html', className: 'ngdialog-theme-default', closeByDocument: false });
    };

    ab.logChange = function(oldValue,newValue){
      console.log('OLD value:', oldValue, ' NEW value:', newValue);
    };

    ab.onSave = function(){
      aboutServices.add(ab.objAbout).then(function(data){alert('Actividad guardada....');});
    };

    ab.clickToOpen = function() {
        ngDialog.open({ template: 'views/viewdetail-about.html', className: 'ngdialog-theme-default' });
    };

    ab.limpiar = function() {
        ab.name = " ";
        ab.eyeColor = " ";
        ab.age = " ";
    };

    listAbouts();
  }
})();
