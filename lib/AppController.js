(function() {

  var AppController = function($scope, $timeout) {
    this.showCode2 = false;
    this.showCode3 = false;
    this.showCode5 = false;
    this.showCode8 = false; 
    $scope.reducedText = ""
    $scope.joinText = ""
    $scope.tallyText = ""
    $scope.startText = "1,2,3,4,5,6,7,8,9"
    $scope.startTallyText = "a,a,b,b,c,d,e,e,e,f,g,g,g,g";
    $scope.startMapText = "5,6,7";
    
    $scope.onReduceClick = function() {
       var dataArray = $scope.startText.split(",").map(Number)
       $scope.reducedText = dataArray.reduce(reducer, 0)
     }
     
    $scope.onJoinClick = function() {
       var dataArray = $scope.startText.split(",")
       $scope.joinText = dataArray.reduce(reducer, 0)
     }  
     
    $scope.onTallyClick = function() {
       var initialValue = {};
       var dataArray = $scope.startTallyText.split(",")
       $scope.tallyText = dataArray.reduce(tallyReducer, initialValue);
     }     

    $scope.onMapClick = function() {
      var dataArray = $scope.startMapText.split(",");
      $scope.mapText = dataArray.map(function(item) {
        return item * 2;
      });       
    } 
     
  }
  
  
  app.controller("AppController", AppController);
  
}());   

var reducer = function(accumulator, item) {
  return accumulator + item;
};

var tallyReducer = function(tally, vote) {
  if (!tally[vote]) {
    tally[vote] = 1;
  } else {
    tally[vote] = tally[vote] + 1;
  }

  return tally;
};
