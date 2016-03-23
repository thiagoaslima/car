var app = angular.module("custodocarro", [
    "firebase",
    "highcharts-ng",
    "ui.router"
]);

app.config(["$stateProvider", "$urlRouterProvider", 
    function ($stateProvider, $urlRouterProvider) {
    
     $urlRouterProvider.otherwise("/");
     
     $stateProvider
        
        .state('novo', {
            url: "/novo",
            templateUrl: "partials/formulario.html"
        });
        
}]);