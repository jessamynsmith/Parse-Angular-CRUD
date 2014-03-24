'use strict';

/* Controllers */

angular.module('assets.controllers', ["parse-angular"])
  .controller('wp-themesCtrl', [function() {

  }])
  .controller('wp-pluginsCtrl', [function() {

  }])

  .controller('homeCtrl', [function() {

  }])

  .controller('insperationCtrl', [function() {

  }])

  .controller('tutorialsCtrl', [function() {

  }])

//////////////////////////////////////////////////////////////////////
// Using jbroquist - parse-angular
//////////////////////////////////////////////////////////////////////

//   .controller('addAssetCtrl', ['$scope', 'ParseObject', 'ParseQuery',
//   function ($scope, ParseObject, ParseQuery) {
//     //field schema
//     var fields = [
//         'name',
//         'link',
//         'tags',
//         'click',
//     ];

//         var Asset = Parse.Object.extend('Asset');

//     //instantiate new contact record
//     $scope.newAsset = new ParseObject('Asset', fields);
// }])

// // Display All Corals
// .controller('allCtrl', ['$scope', 'ParseObject', 'ParseQuery',
//   function ($scope, ParseObject, ParseQuery) {
//     var fields = [
//         'name',
//         'link',
//         'tags',
//         'click',
//     ];

//     var Asset = Parse.Object.extend('Asset');

//     function getAllAssets(){
//       var query = new Parse.Query(Asset);
//       ParseQuery(query, {functionToCall:'find'}).then(function(assets){
//         $scope.allAssets = [];
//         for(var i=0; i<assets.length; i++)
//         {
//           $scope.allAssets.push(new ParseObject(assets[i],fields));
//         }
//       })
//     }
//     getAllAssets();
//   }]
// );


// Controls the active class on main navigation
function NavController($scope, $location) { 
	$scope.isActive = function (viewLocation) { 
		return viewLocation === $location.path();
	};

//Auto-Close on Click for Navigation
  $('.nav-list a').click(function(e){
    $('.off-canvas-wrap').removeClass('move-right');
  })
}