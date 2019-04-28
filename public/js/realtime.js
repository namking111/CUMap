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
        publishKey:   'pub-c-19f1bc50-34bb-4a5d-ad29-604de4f163ad',
        subscribeKey: 'sub-c-1cf19444-6983-11e9-a1d6-2a8c316da507'
      });
  
      pubnub.subscribe({channels: [pnChannel]});
      pubnub.addListener({message:redraw});
  
      setInterval(function() {
        pubnub.publish({channel:pnChannel, message:currentLocation()});
      }, 5000);
}

    
    