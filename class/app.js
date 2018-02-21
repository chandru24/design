var myApp=angular.module("testApp",[]);

myApp.service("random",function(){
    var num=Math.round(Math.random()*100);
    this.randomNumber=function(){
        return num;
    }
});

myApp.controller("serviceCtr",function($scope,random){
    $scope.randomTest=function(){
        console.log("test");
        $scope.testRandom=random.randomNumber();
    };
});