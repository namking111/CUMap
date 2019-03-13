function initMap() {
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

    var markers = [];
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

    //tick box ja
    /*
    var librTick = document.getElementById("libr")
   function funcLib(){
    if (librTick.checked) {
        alert ("The check box is checked.");
    }
    else {
        alert ("The check box is not checked.");
    }
   }*/

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
        markers.forEach(function (marker) {
            marker.setMap(null);
        });
        markers = [];

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
            markers.push(new google.maps.Marker({
                map: map,
                iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                title: place.name,
                position: place.geometry.location,
            }));

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