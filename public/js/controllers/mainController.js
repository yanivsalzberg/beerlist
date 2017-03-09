 app.controller('BeerController', function($scope){
  $scope.beers = [];

  $scope.addBeer = function() {
    console.log("button works");
    var beer = {
      name: $scope.name,
      style: $scope.style,
      abv: $scope.abv,
      image: $scope.image 
    };
    $scope.beers.push(beer);
    console.log($scope.beers);

    $scope.name = "";
    $scope.style = "";
    $scope.abv = "";
    $scope.image = "";

  }

  $scope.removeBeer = function(index) {
    console.log(index);
    $scope.beers.splice(index, 1);




  }

});