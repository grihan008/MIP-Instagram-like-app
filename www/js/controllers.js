angular.module('app.controllers', [])

.controller('notInstagramCtrl', ['$scope', '$stateParams', '$http', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $rootScope) {

  // $scope.posts=$rootScope.posts;
  $scope.like=function(i){
    if (!$rootScope.posts[i].liked){
      $rootScope.posts[i].likes+=1;
      $rootScope.posts[i].liked=true;
    }
    else{
      $rootScope.posts[i].likes-=1;
      $rootScope.posts[i].liked=false;
    }
  }
  // $scope.posts = [{
  //     publisher: "bur.gr",
  //     avatar: "img/me.png",
  //     img: "img/me.png",
  //     likes: 14,
  //     comments: [{
  //         user: "bur.gr",
  //         text: "Lorem"
  //       }
  //     ],
  //     time: "12 minutes ago"
  //   },{
  //     publisher: "bur.gr",
  //     avatar: "img/me.png",
  //     img: "img/space.jpeg",
  //     likes: 2,
  //     comments: [{
  //         user: "bur.gr",
  //         text: "Space"
  //       },{
  //         user: "gr.bur",
  //         text: "Boring"
  //       }
  //     ],
  //     time: "45 minutes ago"
  //   }
  // ]
  //
  // $http.get("https://desolate-cliffs-89947.herokuapp.com/samplepost").then(function(res){
  //   res.data.forEach(function(item,i){
  //     $scope.posts.push(item);
  //   })
  // });

}])

.controller('searchCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  $scope.images = [{
      img: "img/me.png",
      url: "assddasddasd"
    },{
      img: "img/space.jpeg",
      url: "assddasddasd"
    },{
      img: "img/space.jpeg",
      url: "assddasddasd"
    },{
      img: "img/me.png",
      url: "assddasddasd"
    },{
      img: "img/space.jpeg",
      url: "assddasddasd"
    }
  ]

}])

.controller('addCtrl',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $ionicPlatform, $stateParams, $cordovaCamera, $rootScope) {

  $scope.picture = "http://placehold.it/300x300";
  $scope.takePhoto = function()
    {
        var options =  {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            encodingType: Camera.EncodingType.JPEG,
            mediaType: Camera.MediaType.PICTURE
        };
        if (arguments[0]){
          options.sourceType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
        }
        $ionicPlatform.ready(function() {
            $cordovaCamera.getPicture(options).then(function(imageData) {
                $scope.picture = imageData;
            }, function(err) {
                  // error
            });
        });
    }
})

.controller('profileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  $scope.user = {
    name: "Grigorii",
    surname: "Burdin",
    nickname: "bur.gr",
    avatar: "img/me.png"
  }

}])
