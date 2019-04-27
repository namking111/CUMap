var counter=0;
var updatePosCounter=0;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(updatePosition);
    }
  
    return null;
};

function updatePosition(position) {
    if (position) {
      window.lat = position.coords.latitude;
      window.lng = position.coords.longitude;
    }
   
  }

  
      function currentLocation() {
    return {lat:window.lat, lng:window.lng};
    };


function realtimeSetup(){
    var redraw = function(payload) {
      mark.setVisible(true);
        lat = payload.message.lat;
        lng = payload.message.lng;
        
        if(stopCounter==true){
          map.setCenter({lat:lat, lng:lng, alt:0});
          stopCounter=false;
          console.log("stopCounter"+ stopCounter);
        }

        mark.setPosition({lat:lat, lng:lng, alt:0});
        
      };
  
      var pnChannel = "map2-channel";
  
      var pubnub = new PubNub({
        publishKey:   'pub-c-8a6e3109-f222-4078-92d0-500fb9e850c6',
        subscribeKey: 'sub-c-cac7da44-6508-11e9-b9ce-c68ae278081b'
      });
  
      pubnub.subscribe({channels: [pnChannel]});
      pubnub.addListener({message:redraw});
  
      setInterval(function() {
        pubnub.publish({channel:pnChannel, message:currentLocation()});
      }, 5000);
}

    
    