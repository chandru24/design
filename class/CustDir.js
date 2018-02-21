var myApp=angular.module("testApp",[]);

myApp.directive("enter",function(){
    return{
        restrict:"A",
        //template:"<h1>NEW CUSTOM DIRECTIVE</h1>"
        link:function(scope,element,attrs){
            element.bind("mouseenter",function(){
            console.log("mouse enterd");
            element.addClass("enter");
        });
        }
    }
});

myApp.directive("leave",function(){
    return{
        restrict:"A",
        //template:"<h1>NEW CUSTOM DIRECTIVE</h1>"
        link:function(scope,element,attrs){
            element.bind("mouseleave",function(){
            console.log("mouse leave");
            element.removeClass("enter");
        });
        }
    }
});