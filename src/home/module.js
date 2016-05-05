/**
 * Created by msmenzyk on 25.04.2016.
 */

(function () {
    'use strict';

    angular.module('app.home', ['ui.router'])
        .config(function ($stateProvider) {

            $stateProvider
                .state('app.home', {
                    url: '/home',
                    data: {
                        title: 'Blank'
                    },
                    views: {
                        "content@app": {
                            templateUrl: 'app/home/views/home.html',
                            controller: 'HomeController'
                        }
                    }
                });
        });

})();