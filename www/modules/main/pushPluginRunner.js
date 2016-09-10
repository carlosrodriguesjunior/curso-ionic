(function() {

  angular.module('starter')
    .run(['$cordovaPushV5', '$rootScope',
      function( $cordovaPushV5, $rootScope) {

        var options = {
          android: {
            clearNotifications: false,
            senderID: "696558918545"
          },
          ios: {
            alert: "true",
            badge: "true",
            sound: "true"
          },
          windows: {}
        };

        // initialize

        if (window.cordova) {
          $cordovaPushV5.initialize(options).then(function() {
            // start listening for new notifications
            $cordovaPushV5.onNotification();
            // start listening for errors
            $cordovaPushV5.onError();

            // register to get registrationId
            $cordovaPushV5.register().then(function(data) {
              // `data.registrationId` save it somewhere;
              console.log("registrado");
              console.log(data);

            });
          });
        }

        // triggered every time notification received
        $rootScope.$on('$cordovaPushV5:notificationReceived', function(event, data) {
          // data.message,
          // data.title,
          // data.count,
          // data.sound,
          // data.image,
          // data.additionalData

          console.log("notificação recebida");
          console.log(data);
        });

        // triggered every time error occurs
        $rootScope.$on('$cordovaPush:errorOcurred', function(event, e) {
          // e.message

          console.log("notificação error");
          console.log(data);
        });

      }
    ]);

}());
