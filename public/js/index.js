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


    //search box ja
    var searchBox = new google.maps.places.SearchBox(document.getElementById("building-search-box"));
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

            //engineering building 1
            if (place.geometry.location == "(13.7365812, 100.53260790000002)" || place.geometry.location == "(13.7365812, 100.53257869999993)") {
                openFloorPlan()
                mapFunc(0, 1)
            }

            //engineering building 2
            if (place.geometry.location == "(13.7364773, 100.53339249999999)") {
                openFloorPlan()
                mapFunc(0, 2)
            }
            //engineering building 3
            if (place.geometry.location == "(13.7368903, 100.53315620000001)") {
                openFloorPlan()
                mapFunc(0, 3)
            }

            //engineering building 100
            if (place.geometry.location == "(13.736365, 100.53394780000008)") {
                openFloorPlan()
                mapFunc(0, 100)
            }

            //Maha Chakri Sirindhorn Building
            if (place.geometry.location == "(13.7392952, 100.5340708)") {
                openFloorPlan()
                mapFunc(1, 1)
            }



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
function searchPlace() {
    if (typeChosen != true) {
        alert("Please select type of search.");
    }
    else {
        alert("<show search result jaa>");
    }
}
var listCourse = ["2190101 Computer Programming", "2183101 Engineering Graphics"];
var theCourse = ""
function searchCourse() {

    for (i = 0; i < listCourse.length; i++) {
        if (document.getElementById("course-search").value == (listCourse[i])) {
            theCourse = listCourse[i];
            break;
        }
    }
    if (theCourse != "") {
        showCourse();
    } else {
        alert("Course Not Found");
        document.getElementById("course-info").style.display = "none";
    }
}

function showCourse() {
    var courseDiv = document.getElementById("course-info");
    courseDiv.style.display = "block";
    courseDiv.scrollIntoView({ behavior: "smooth" });
    courseDiv.innerHTML = "<h2>Course Information</h2> <br> <p>Course : " + theCourse + "<p>";
    theCourse = ""; //prepare to use for next course search
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

var currentBuild = 99;
var currentFac = 99;



function openFloorPlan() {
    document.getElementById("flPlan").style.display = "block";
    document.getElementById("flPlan").scrollIntoView({ behavior: "smooth" });
}

function selBuild() {
    // document.getElementById("fl-4").classList.toggle("hide");
    document.getElementById("myDropdown").classList.toggle("show");
    //document.getElementById("fl-4").classList.toggle("hide");
}
function selFloor() {
    document.getElementById("myDropdown2").classList.toggle("show");

    //show floor list according to each building
    if ((currentBuild == 1 && currentFac == 0) || (currentBuild == 2 && currentFac == 0)) {//engineering building 1 and 2
        for (i = 4; i < 13; i++) {
            document.getElementById("fl-" + i).classList.toggle("hide");
        }
        for (j = 90; j < 94; j++) {
            document.getElementById("fl-" + j).classList.toggle("hide");
        }
    }
    else if (currentBuild == 3 && currentFac == 0) {//engineering building 3
        for (i = 5; i < 13; i++) {
            document.getElementById("fl-" + i).classList.toggle("hide");
        }
        for (j = 90; j < 94; j++) {
            document.getElementById("fl-" + j).classList.toggle("hide");
        }
    }
    else if (currentBuild == 100 && currentFac == 0) {//engineering building 100
        for (j = 91; j < 94; j++) {
            document.getElementById("fl-" + j).classList.toggle("hide");
        }
        document.getElementById("fl-1").classList.toggle("hide");
        document.getElementById("fl-2").classList.toggle("hide");
        document.getElementById("fl-8").classList.toggle("hide");
        document.getElementById("fl-11").classList.toggle("hide");
    }
    else if (currentBuild == 1 && currentFac == 1) {//arts MCS
        for (i = 10; i < 13; i++) {
            document.getElementById("fl-" + i).classList.toggle("hide");
        }
        document.getElementById("fl-90").classList.toggle("hide");
        document.getElementById("fl-92").classList.toggle("hide");
    }
    /*
    if(currentBuild==100&&currentFac==0){//engineering building 100
        for(i=5;i<13;i++){
            document.getElementById("fl-"+i).classList.toggle("hide");
        }
        for(j=90;j<94;j++){
            document.getElementById("fl-"+j).classList.toggle("hide");
        }
    }*/
    /*
    //use here
    else if (currentBuild==3&&currentFac==0){//engineering building 3
        for(i=5;i<13;i++){
            document.getElementById("fl-"+i).classList.toggle("hide");
        }
    }
    else if(currentBuild==100&&currentFac==0){//engineering building 100

    }
    else if(currentBuild==1&&currentFac==1){//arts MCS building

    }
    */

    /*
    alert("clicked"+currentBuild)
    
    if(currentBuild==1){
        alert("inloop")
        alert(document.getElementById("fl-90").classList.style)
        if(document.getElementById("fl-90").classList.style.display != "none"){
            alert("inif")
            document.getElementById("fl-90").classList.style.display = "none"
            document.getElementById("fl-90").style.display = "none"
            document.getElementById("fl-90").style.visibility = "hidden"
            alert("did")
        }
    }
    else if(currentBuild==2){
        if(document.getElementById("fl-93").classList.style.display != "none"){
            document.getElementById("fl-93").classList.style.display = "none"
        }
    }*/
    //document.getElementById("myDropdown2").classList.toggle("show");
    //document.getElementById("fl-4").classList.toggle("hide");
}


// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("mapDropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function mapFunc(fac, building) {
    currentBuild = building;
    currentFac = fac;
    document.getElementById("theDrop2").innerText = "Floor 1";
    if (fac == 0) { //if it is a building in faculty of engineering
        //if change building, default floor is 1 or M
        document.getElementById("show-map").innerHTML = "<center><img src=\"img/ENG0" + building + "-FR1.jpg\"></center>"
        document.getElementById("theDrop").innerText = "Engineering Building " + building;
        if (building == 100) {
            document.getElementById("show-map").innerHTML = "<center><img src=\"img/ENG0100-FR90.jpg\"></center>"
            document.getElementById("theDrop2").innerText = "Floor M";
        }
    }
    if (fac == 1) { //if it is a building in faculty of arts
        document.getElementById("show-map").innerHTML = "<center><img src=\"img/ARTS01-FR1.jpg\"></center>"
        document.getElementById("theDrop").innerText = "Maha Chakri Sirindhorn Building";
    }
    //document.getElementById("fl-4").classList.toggle("hide");
}

function mapFunc2(floor) {
    if (currentFac == 0) { //if it is a building in faculty of engineering
        document.getElementById("show-map").innerHTML = "<center><img src=\"img/ENG0" + currentBuild + "-FR" + floor + ".jpg\"></center>"
    }
    if (currentFac == 1) { //if it is a building in faculty of arts
        document.getElementById("show-map").innerHTML = "<center><img src=\"img/ARTS01-FR" + floor + ".jpg\"></center>"
    }

    document.getElementById("theDrop2").innerText = "Floor " + floor;
    if (floor == 90) {
        document.getElementById("theDrop2").innerText = "Floor M";
    }
    else if (floor == 91) {
        document.getElementById("theDrop2").innerText = "Floor M1";
    }
    else if (floor == 92) {
        document.getElementById("theDrop2").innerText = "Floor M2";
    }
    else if (floor == 93) {
        document.getElementById("theDrop2").innerText = "Floor M3";
    }

    if ((currentBuild == 1 && currentFac == 0) || (currentBuild == 2 && currentFac == 0)) {//engineering building 1 and 2
        for (i = 4; i < 13; i++) {
            document.getElementById("fl-" + i).classList.toggle("hide");
        }
        for (j = 90; j < 94; j++) {
            document.getElementById("fl-" + j).classList.toggle("hide");
        }
    }
    else if (currentBuild == 3 && currentFac == 0) {//engineering building 3
        for (i = 5; i < 13; i++) {
            document.getElementById("fl-" + i).classList.toggle("hide");
        }
        for (j = 90; j < 94; j++) {
            document.getElementById("fl-" + j).classList.toggle("hide");
        }
    }
    else if (currentBuild == 100 && currentFac == 0) {//engineering building 100
        for (j = 91; j < 94; j++) {
            document.getElementById("fl-" + j).classList.toggle("hide");
        }
        document.getElementById("fl-1").classList.toggle("hide");
        document.getElementById("fl-2").classList.toggle("hide");
        document.getElementById("fl-8").classList.toggle("hide");
        document.getElementById("fl-11").classList.toggle("hide");
    }
    else if (currentBuild == 1 && currentFac == 1) {//arts MCS
        for (i = 10; i < 13; i++) {
            document.getElementById("fl-" + i).classList.toggle("hide");
        }
        document.getElementById("fl-90").classList.toggle("hide");
        document.getElementById("fl-92").classList.toggle("hide");
    }
}

//func use : 'use'
/*
function funcLib(boxx){
    
    if (boxx.checked) {
        var options = {
            zoom: 17,
            center: { lat: 13.7384, lng: 100.5321 }
        }
        var map = new google.maps.Map(document.getElementById('map'), options);







        var request = {
            query: 'Museum of Contemporary Art Australia',
            //keyword: 'Museum',
            fields: ['name', 'geometry'],
          };
        
          var service = new google.maps.places.PlacesService(map);
*/



//  service.nearbySearch(
//    {location: pyrmont, radius: 500, type: ['store']},
//    function(results, status, pagination) {
//      if (status !== 'OK') return;

//     createMarkers(results);
//    });





//func use : 'use'
/*
  service.findPlaceFromQuery(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        createMarkers(results[i]);
        alert("done")
      }
      map.setCenter(results[0].geometry.location);
    }
  });
  
  function createMarkers(places) {
    alert("dunn")
      var marker2 = new google.maps.Marker({
        map: map,
        iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        position: places.geometry.location
      });
      alert("donee")
    }*/









/*
        
        //alert ("The check box is checked.");
        var requestlib = {
            location: map.center,
            keyword: 'library'
        };
       
        service = new google.maps.places.PlacesService(map);
      
       


        alert("done")
          service.nearbySearch(requestlib, function(results, status) {
            
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              for (var i = 0; i < results.length; i++) {
                  
                var place = results[i];
                //createMarker(results[i]);
              }
  
              //map.setCenter(results[0].geometry.location);
            }
          });

*/

//func use : 'use'
/*     
}
else {
   //alert ("The check box is unchecked.");
}
}*/

//Filters
var librMarkers = [];
var vendmMarkers = [];
var copyMarkers = [];
var coffeeMarkers = [];
var museumMarkers = [];
var canteenMarkers = [];
var atmMarkers = []

var atmTick = document.querySelector('#atm')
var canteenTick = document.querySelector('#canteen')
var museumTick = document.querySelector('#museum')
var coffeeTick = document.querySelector('#coffeeshop')
var copyTick = document.querySelector('#copyprint')
var vendmTick = document.querySelector('#vendm')
var librTick = document.querySelector('#libr')

//check which filter is clicked
function funClick() {
    switch (librTick != null) {
        case librTick.checked:
            //alert ("The libr check box is checked.");
            librMarkers = [
                {
                    coords: { lat: 13.7367, lng: 100.5331 },
                    iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                    content: '<h1>Faculty of Engineering</h1>'
                },
                {
                    coords: { lat: 13.7386, lng: 100.5352 },
                    iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                    content: '<h1>fuck off</h1>'
                }
            ];
            break;
        case librTick.checked == false:
            //alert ("The libr check box is not checked.");
            librMarkers = [];
    }
    switch (vendmTick != null) {
        case vendmTick.checked:
            //alert ("The vendm check box is checked.");
            vendmMarkers = [
                {
                    coords: { lat: 13.7393, lng: 100.5341 }
                },
                {
                    coords: { lat: 13.7403, lng: 100.5351 }
                }
            ];
            break;
        case vendmTick.checked == false:
            //alert ("The vendm check box is not checked.");
            vendmMarkers = [];

    }
    switch (copyTick != null) {
        case copyTick.checked:
            //alert ("The copy check box is checked.");
            copyMarkers = [
                {
                    coords: { lat: 13.7383, lng: 100.5328 }
                }
            ];
            break;
        case copyTick.checked == false:
            //alert ("The copy check box is not checked.");
            copyMarkers = [];

    }
    switch (coffeeTick != null) {
        case coffeeTick.checked:
            //alert ("The coffee check box is checked.");
            coffeeMarkers = [
                {
                    coords: { lat: 13.7393, lng: 100.5330 }
                }
            ];
            break;
        case coffeeTick.checked == false:
            //alert ("The coffee check box is not checked.");
            coffeeMarkers = [];

    }
    switch (museumTick != null) {
        case museumTick.checked:
            //alert ("The museum check box is checked.");
            museumMarkers = [
                {
                    coords: { lat: 13.7373, lng: 100.5308 }
                }
            ];
            break;
        case museumTick.checked == false:
            //alert ("The museum check box is not checked.");
            museumMarkers = [];

    }
    switch (canteenTick != null) {
        case canteenTick.checked:
            //alert ("The canteen check box is checked.");
            canteenMarkers = [
                {
                    coords: { lat: 13.7386, lng: 100.5298 }
                }
            ];
            break;
        case canteenTick.checked == false:
            //alert ("The canteen check box is not checked.");
            canteenMarkers = [];

    }
    switch (atmTick != null) {
        case atmTick.checked:
            //alert ("The atm check box is checked.");
            atmMarkers = [
                {
                    coords: { lat: 13.7370, lng: 100.5308 },
                    //iconImage: 'https://i.imgur.com/pIfdoIW.gif'
                }
            ];
            break;
        case atmTick.checked == false:
            //alert ("The copy check box is not checked.");
            atmMarkers = [];

    }
    if (librTick.checked == false && vendmTick.checked == false && copyTick.checked == false && coffeeTick.checked == false && museumTick.checked == false && canteenTick.checked == false && atmTick.checked == false) {
        initMap();
    } else {
        initMap2(librMarkers, vendmMarkers, copyMarkers, coffeeMarkers, museumMarkers, canteenMarkers, atmMarkers);
    }
}
//draw filter markers
function initMap2(librfeed, vendmfeed, copyfeed, coffeefeed, museumfeed, canteenfeed, atmfeed) {
    //Map options
    var options = {
        zoom: 17,
        center: { lat: 13.7384, lng: 100.5321 }
    }
    //Create Map
    var map = new google.maps.Map(document.getElementById('map'), options);

    if (librfeed != [] || vendmfeed != [] || copyfeed != [] || coffeefeed != [] || museumfeed != [] || canteenfeed != [] || atmfesed != []) {
        var markerDefault = new google.maps.Marker({
            position: { lat: 13.7403, lng: 100.5309 },
            map: map,
            draggable: true
        });

        for (var i = 0; i < librfeed.length; i++) {
            var marker = new google.maps.Marker({
                position: librfeed[i].coords,
                map: map,
                icon: librfeed[i].iconImage,
                //draggable:true
            });
        }

        for (var i = 0; i < vendmfeed.length; i++) {
            var marker = new google.maps.Marker({
                position: vendmfeed[i].coords,
                map: map,
                icon: vendmfeed[i].iconImage,
                //draggable:true
            });
        }

        for (var i = 0; i < copyfeed.length; i++) {
            var marker = new google.maps.Marker({
                position: copyfeed[i].coords,
                map: map,
                icon: copyfeed[i].iconImage,
                //draggable:true
            });
        }

        for (var i = 0; i < coffeefeed.length; i++) {
            var marker = new google.maps.Marker({
                position: coffeefeed[i].coords,
                map: map,
                icon: coffeefeed[i].iconImage,
                //draggable:true
            });
        }

        for (var i = 0; i < museumfeed.length; i++) {
            var marker = new google.maps.Marker({
                position: museumfeed[i].coords,
                map: map,
                icon: museumfeed[i].iconImage,
                //draggable:true
            });
        }
        for (var i = 0; i < canteenfeed.length; i++) {
            var marker = new google.maps.Marker({
                position: canteenfeed[i].coords,
                map: map,
                icon: canteenfeed[i].iconImage,
                //draggable:true
            });
        }
        for (var i = 0; i < atmfeed.length; i++) {
            var marker = new google.maps.Marker({
                position: atmfeed[i].coords,
                map: map,
                icon: atmfeed[i].iconImage,
                //draggable:true
            });
        }
    }    
}



//geolocation
function gpsHere() {

    function onRecievePosition(currentPosition){
        console.log(currentPosition);
        //mark current location
        var options = {
            zoom: 17,
            center: {lat: currentPosition.coords.latitude, lng: currentPosition.coords.longitude}
        }
        var map = new google.maps.Map(document.getElementById('map'), options);
        var marker = new google.maps.Marker({
            position: {lat: currentPosition.coords.latitude, lng: currentPosition.coords.longitude},
            map: map,
            //icon: ,
            //draggable:trues
        });

    }

    function positionNotRecieved(positionError){
        console.log(positionError);
    }

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onRecievePosition, positionNotRecieved);
        //update current location (not tested yet)
        var overwatch = navigator.geolocation.watchPosition(onRecievePosition, positionNotRecieved);
        console.log(overwatch);
        navigator.geolocation.clearWatch(overwatch);

    }
}
/*
//routing
function routeTo(){
    var directionDisplay = new google.maps.DirectionsRenderer();
    var directionService = new google.maps.DirectionsService();
    var map;
    var sauce = new google.maps.LatLng(13.7403, 100.5309);
    var desty = new google.maps.LatLng(13.7384,100.5298);
    var options = {
        zoom: 17,
        center: { lat: 13.7384, lng: 100.5321 }
    }
    map = new google.maps.Map(document.getElementById('map'), options);
    directionDisplay.setMap(map);

    function calculateRoute(){
        var request = {
            origin: sauce,
            destination: desty,
            travelMode: 'DRIVING'
        };

        directionService.route(request, function(result, status){
            console.log(result, status);

        });

    }

    document.getElementById('getRoute').onclick=function(){
        calculateRoute();
    };
}*/
