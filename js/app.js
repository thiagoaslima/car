var app = angular.module("carapp", [
    "ui.router",
    "firebase",
    "ngHighcharts"
]);

console.log(app);

app.config(["$stateProvider", "$urlRouterProvider", 
    function ($stateProvider, $urlRouterProvider) {
    
     $urlRouterProvider.otherwise("/");
     
     $stateProvider
     
        .state('home', {
            url: '/',
            views: {
                'montadoras': {
                    templateUrl: "partials/formulario.html"
                }
            }
        })
        
        .state('novo', {
            url: "/novo",
            templateUrl: "partials/formulario.html"
        });
        
}]);