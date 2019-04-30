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
        publishKey:   'pub-c-fe6d4631-e538-4ada-bba5-cdb7a0f2b4e4',
        subscribeKey: 'sub-c-69e40716-6b4d-11e9-912a-e2e853b4b660'
      });
  
      pubnub.subscribe({channels: [pnChannel]});
      pubnub.addListener({message:redraw});
  
      setInterval(function() {
        pubnub.publish({channel:pnChannel, message:currentLocation()});
      }, 5000);
}

    
    