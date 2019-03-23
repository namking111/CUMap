function initMap(librfeed, vendmfeed, copyfeed, coffeefeed, museumfeed, canteenfeed, atmfeed) {
    //Map options
    var options = {
        zoom: 17,
        center: { lat: 13.7384, lng: 100.5321 }
    }
    //Create Map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Listen for click on map
    google.maps.event.addListener(map, 'click', function (event) {
    });

    var markerDefault = new google.maps.Marker({
        position:{lat: 13.7403, lng: 100.5309},
        map: map,
        draggable:true
    });

    for(var i=0; i<librfeed.length; i++){
        var marker = new google.maps.Marker({
            position: librfeed[i].coords,
            map: map,
            icon: librfeed[i].iconImage,
            //draggable:true
        });
    }

    for(var i=0; i<vendmfeed.length; i++){
        var marker = new google.maps.Marker({
            position: vendmfeed[i].coords,
            map: map,
            icon: vendmfeed[i].iconImage,
            //draggable:true
        });
    }

    for(var i=0; i<copyfeed.length; i++){
        var marker = new google.maps.Marker({
            position: copyfeed[i].coords,
            map: map,
            icon: copyfeed[i].iconImage,
            //draggable:true
        });
    }

    for(var i=0; i<coffeefeed.length; i++){
        var marker = new google.maps.Marker({
            position: coffeefeed[i].coords,
            map: map,
            icon: coffeefeed[i].iconImage,
            //draggable:true
        });
    }

    for(var i=0; i<museumfeed.length; i++){
        var marker = new google.maps.Marker({
            position: museumfeed[i].coords,
            map: map,
            icon: museumfeed[i].iconImage,
            //draggable:true
        });
    }
    for(var i=0; i<canteenfeed.length; i++){
        var marker = new google.maps.Marker({
            position: canteenfeed[i].coords,
            map: map,
            icon: canteenfeed[i].iconImage,
            //draggable:true
        });
    }
    for(var i=0; i<atmfeed.length; i++){
        var marker = new google.maps.Marker({
            position: atmfeed[i].coords,
            map: map,
            icon: atmfeed[i].iconImage,
            //draggable:true
        });
    }
    
    /*
    // Array of markers
    var markers = [
        {
            coords: { lat: 13.7367, lng: 100.5331 },
            iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content: '<h1>Faculty of Engineering</h1>'
        },
        {
            coords: { lat: 13.7393, lng: 100.5341 },
            content: '<h1>Faculty of Art</h1>'
        }
    ];*/

    //search box ja
    var searchBox = new google.maps.places.SearchBox(document.getElementById("search-box"));
    map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
    });

    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        /*markers.forEach(function (marker) {
            marker.setMap(null);
        });
        markers = [];*/

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
           /* markers.push(new google.maps.Marker({
                map: map,
                iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                title: place.name,
                position: place.geometry.location,
            })); */

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });

    /*
        // Loop through markers
        for (var i = 0; i < markers.length; i++) {
            // Add marker
            addMarker(markers[i]);
        }
    
        // Add Marker Function
        function addMarker(props) {
            var marker = new google.maps.Marker({
                position: props.coords,
                map: map,
                draggable:true
            });
    
            // Check for custom icon
            if (props.iconImage) {
                // Set icon image
                marker.setIcon(props.iconImage);
            }
    
            //query place
            
            var tempPlace
            service = new google.maps.places.PlacesService(map);   
    
            // Check for content
            if (props.content) {
                var infoWindow = new google.maps.InfoWindow({
                    content: props.content
                });
    
                marker.addListener('click', function () {
                    infoWindow.open(map, marker);
                    infoWindow.setContent("<h1></h1>")
                    
                });
            }
        }
        */
}


// Add Marker Function
/*function addMarker(props) {
    var marker = new google.maps.Marker({
        position: props.coords,
        map: map,
        //draggable:true
    });

    // Check for custom icon
    if (props.iconImage) {
        // Set icon image
        marker.setIcon(props.iconImage);
    }

    //query place
    
    var tempPlace
    service = new google.maps.places.PlacesService(map);   

    // Check for content
    if (props.content) {
        var infoWindow = new google.maps.InfoWindow({
            content: props.content
        });

        marker.addListener('click', function () {
            infoWindow.open(map, marker);
            infoWindow.setContent("<h1></h1>")
            
        });
    }
}*/

//var allMarkers=[];
var librMarkers=[];
var vendmMarkers=[];
var copyMarkers=[];
var coffeeMarkers=[];
var museumMarkers=[];
var canteenMarkers=[];
var atmMarkers=[]

var atmTick = document.querySelector('#atm')
var canteenTick = document.querySelector('#canteen')
var museumTick = document.querySelector('#museum')
var coffeeTick = document.querySelector('#coffeeshop')
var copyTick = document.querySelector('#copyprint')
var vendmTick = document.querySelector('#vendm')
var librTick = document.querySelector('#libr')

function funClick(){
    switch(librTick != null){
        case librTick.checked:
            //alert ("The libr check box is checked.");
            librMarkers=[
            {
                coords: {lat: 13.7367, lng: 100.5331},
                iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                content: '<h1>Faculty of Engineering</h1>'
            },
            {
                coords: {lat: 13.7386, lng: 100.5352},
                iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                content: '<h1>fuck off</h1>'
            }
         ];
         break;
        case librTick.checked == false:
            //alert ("The libr check box is not checked.");
            librMarkers = [];
    }
    switch(vendmTick != null){
        case vendmTick.checked:
            //alert ("The vendm check box is checked.");
            vendmMarkers=[
                {
                    coords:{lat: 13.7393, lng: 100.5341}
                },
                {
                    coords:{lat: 13.7403, lng: 100.5351}
                }
            ];
            break;
        case vendmTick.checked == false:
            //alert ("The vendm check box is not checked.");
            vendmMarkers = [];

    }
    switch(copyTick != null){
        case copyTick.checked:
            //alert ("The copy check box is checked.");
            copyMarkers=[
                {
                    coords:{lat: 13.7383, lng: 100.5328}
                }                
            ];
            break;
        case copyTick.checked == false:
            //alert ("The copy check box is not checked.");
            copyMarkers = [];

    }
    switch(coffeeTick != null){
        case coffeeTick.checked:
            //alert ("The coffee check box is checked.");
            coffeeMarkers=[
                {
                    coords:{lat: 13.7393, lng: 100.5330}
                }                
            ];
            break;
        case coffeeTick.checked == false:
            //alert ("The coffee check box is not checked.");
            coffeeMarkers = [];

    }
    switch(museumTick != null){
        case museumTick.checked:
            //alert ("The museum check box is checked.");
            museumMarkers=[
                {
                    coords:{lat: 13.7373, lng: 100.5308}
                }                
            ];
            break;
        case museumTick.checked == false:
            //alert ("The museum check box is not checked.");
            museumMarkers = [];

    }
    switch(canteenTick != null){
        case canteenTick.checked:
            //alert ("The canteen check box is checked.");
            canteenMarkers=[
                {
                    coords:{lat: 13.7386, lng: 100.5298}
                }                
            ];
            break;
        case canteenTick.checked == false:
            //alert ("The canteen check box is not checked.");
            canteenMarkers = [];

    }
    switch(atmTick != null){
        case atmTick.checked:
            //alert ("The atm check box is checked.");
            atmMarkers=[
                {
                    coords:{lat: 13.7370, lng: 100.5308},
                    //iconImage: 'https://i.imgur.com/pIfdoIW.gif'
                }                
            ];
            break;
        case atmTick.checked == false:
            //alert ("The copy check box is not checked.");
            atmMarkers = [];

    }

    initMap(librMarkers, vendmMarkers, copyMarkers, coffeeMarkers, museumMarkers, canteenMarkers, atmMarkers);

}

var typeChosen;
function seachPlace() {
    if (typeChosen != true) {
        alert("Please select type of search.");
    }
    else {
        alert("<show search result jaa>");
    }
}

function searchType(type) {
    if (type == 1) {
        document.getElementById("crs").style.background = "rgb(212, 161, 212)";
        document.getElementById("dest").style.background = "";
    }
    else if (type == 2) {
        document.getElementById("dest").style.background = "rgb(212, 161, 212)";
        document.getElementById("crs").style.background = "";
    }
    typeChosen = true;
}

function openFloorPlan() {
    document.getElementById("flPlan").style.display = "block";
    document.getElementById("flPlan").scrollIntoView({ behavior: "smooth" });
}

function selBuild() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("buildDropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}