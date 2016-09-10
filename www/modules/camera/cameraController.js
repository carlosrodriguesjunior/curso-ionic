(function() {

  function CameraController($cordovaCamera) {

    this.$cordovaCamera = $cordovaCamera;

  }

  CameraController.prototype.getPicture = function() {

    var vm  = this;

    var cameraOptions = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: false,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 400,
      targetHeight: 400,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

   this.$cordovaCamera.getPicture(cameraOptions)
   .then(function(picture){
     var src = "data:image/jpeg;base64," + picture;
     vm.picture = src;
   })
   .catch(function(error){
     console.log(error);
   });

  }

  CameraController.$inject = ['$cordovaCamera'];

  angular.module('starter')
    .controller('cameraController', CameraController)
    .config(function($stateProvider) {

      $stateProvider
        .state('app.camera', {
          url: '/camera',
          views: {
            'menuContent': {
              templateUrl: 'modules/camera/cameraView.html',
              controller: 'cameraController as vm'
            }
          }
        })
    });
}());
