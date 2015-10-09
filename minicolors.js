var app = angular.module('minicolors', ['minicolors']);

app.config(function (minicolorsProvider) {
    angular.extend(minicolorsProvider.defaults, {
        control: 'hue',
        position: 'bottom left'
    });
});

app.controller('mcCtrl', function ($scope) {
    
});
