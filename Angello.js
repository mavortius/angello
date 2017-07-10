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

angelloModule.factory('AngelloHelper', function () {
    var buildIndex = function (source, property) {
        var tempArray = [];

        for(var i = 0, len = source.length; i < len; ++i) {
            tempArray[source[i][property]] = source[i];
        }

        return tempArray;
    };

    return {
        buildIndex: buildIndex
    };
});

angelloModule.service('AngelloModel', function () {
    var service = this,
        stories = [
            {
                title: 'First story',
                description: 'Our first story.',
                criteria: 'Criteria pending.',
                status: 'To Do',
                type: 'Feature',
                reporter: 'Lukas Ruebbelke',
                assignee: 'Brian Ford'
            },
            {
                title: 'Second story',
                description: 'Do something.',
                criteria: 'Criteria pending.',
                status: 'Back Log',
                type: 'Feature',
                reporter: 'Lukas Ruebbelke',
                assignee: 'Brian Ford'
            },
            {
                title: 'Another story',
                description: 'Just one more.',
                criteria: 'Criteria pending.',
                status: 'Code Review',
                type: 'Enhancement',
                reporter: 'Lukas Ruebbelke',
                assignee: 'Brian Ford'
            }
        ];

    service.getStories = function () {
        return stories;
    }
});

angelloModule.controller('MainCtrl', function () {
    var main = this;

    main.stories = AngelloModel.getStories();

    main.createStory = function () {
        main.stories.push({
            title: 'New Story',
            description: 'Description pending.',
            criteria: 'Criteria pending.',
            status: 'Back Log',
            type: 'Feature',
            reporter: 'Pending',
            assignee: 'Pending'
        })
    }
});

angelloModule.directive('story', function () {
    return {
        scope: true,
        replace: true,
        template: '<div><h4>{{story.title}}</h4><p>{{story.description}}</p></div>'
    }
});