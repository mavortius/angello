var angelloModule = angular.module('Angello', [
    'ngRoute',
    'ngAnimate',
    'Angello.Storyboard'
]);

angelloModule.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'storyboard/templates/storyboard.html',
            controller: 'StoryboardController',
            controllerAs: 'storyboard'
        })
        .when('/dashboard', {
            templateUrl: 'dashboard/templates/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dashboard'
        })
        .when('/users', {
            templateUrl: 'user/templates/users.html',
            controller: 'UsersController',
            controllerAs: 'users'
        })
        .when('/users/:userId', {
            templateUrl: 'user/templates/user.html',
            controller: 'UserController',
            controllerAs: 'myUser'
        })
        .when('/login', {
            templateUrl: 'login/templates/login.html',
            controller: 'LoginController',
            controllerAs: 'login'
        })
        .otherwise({redirectTo: '/'});
});
