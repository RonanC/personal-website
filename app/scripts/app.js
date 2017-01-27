'use strict';

/**
 * @ngdoc overview
 * @name personalWebsiteApp
 * @description
 * # personalWebsiteApp
 *
 * Main module of the application.
 */
angular
  .module('personalWebsiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/tweets', {
        templateUrl: 'views/tweets.html',
        controller: 'TweetsCtrl',
        controllerAs: 'tweets'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/posts', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl',
        controllerAs: 'posts'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl',
        controllerAs: 'portfolio'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      })
      .when('/webdev', {
        templateUrl: 'views/webdev.html',
        controller: 'WebdevCtrl',
        controllerAs: 'webdev'
      })
      .when('/gmitcat-priv-pol', {
        templateUrl: 'views/gmitcat-priv-pol.html',
        controller: 'GmitcatPrivPolCtrl',
        controllerAs: 'gmitcatPrivPol'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
