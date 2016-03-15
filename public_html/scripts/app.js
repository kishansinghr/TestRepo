/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var myapp = angular.module('myApp',[]);
        
myapp.controller('MainController',['alertService','$scope',function(alertService,$scope){
    $scope.message = "hello world";     
    $scope.onclick = function(){
        console.log("clicked")
    };
}]);
