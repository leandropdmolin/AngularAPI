var app = angular.module('AngularAPI',['ngRoute']);

app.controller('ListController', ['$scope', '$http', function($scope, $http){
  $scope.results = [];
  $scope.search = function(){
      $http({
        methods: 'GET',
        url: 'https://api.flickr.com/services/rest',
        params: {
          method: 'flickr.photos.search',
          api_key: 'b83663df0f2553ffc7d00878d481de15',
          format: 'json',
          text: $scope.searchTerm,
          extras: 'description,date_upload,owner_name,views',
          nojsoncallback: 1
        }
      }).then(function(data){
        $scope.results = data;
      });
  };
}]);
