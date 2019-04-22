var currentBuild = 99;
var currentFac = 99;
//while (searchBox.addEventListener(null)) gpsHere();

//Filters
var librMarkers = [];
var librLocations = [
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
var librCounter = 0;

var vendmMarkers = [];
var vendmLocations = [
    {
        coords: { lat: 13.7393, lng: 100.5341 }
    },
    {
        coords: { lat: 13.7403, lng: 100.5351 }
    }
];
var vendmCounter = 0;

var copyMarkers = [];
var copyLocations = [
    {
        coords: { lat: 13.7383, lng: 100.5328 }
    }
];
var copyCounter = 0;

var coffeeshopMarkers = [];
var coffeeshopLocations = [
    {
        coords: { lat: 13.7393, lng: 100.5330 }
    }
];
var coffeeshopCounter = 0;

var museumMarkers = [];
var museumLocations = [
    {
        coords: { lat: 13.7373, lng: 100.5308 }
    }
];
var museumCounter = 0;

var canteenMarkers = [];
var canteenLocations = [
    {
        coords: { lat: 13.7386, lng: 100.5298 }
    }
];
var canteenCounter = 0;

var atmMarkers=[];
var atmLocations = [
    {
        coords: { lat: 13.7370, lng: 100.5308 },
        //iconImage: 'https://i.imgur.com/pIfdoIW.gif'
    },
    {
        coords: { lat: 13.7378, lng: 100.5300 },
        //iconImage: 'https://i.imgur.com/pIfdoIW.gif'
    }
];

var atmCounter = 0;


function initMap() {
    //Map options
    var options = {
        zoom: 17,
        center: { lat: 13.7384, lng: 100.5321 }
    }
    //Create Map
    var map = new google.maps.Map(document.getElementById('map'), options);
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay.setMap(map);

   /* document.getElementById("gps").addEventListener("click", function (){
        //while (true) {
            gpsHere();
            delay(20000);
        //}
    });*/
    document.getElementById("atm").addEventListener("click", function () {
        atmCounter++;
        //console.log(atmCounter);
        if (atmCounter%2 !=0) {
            for(i=0; i<=atmMarkers.length; i++){
                atmMarkers[i] = new google.maps.Marker({
                    position: new google.maps.LatLng(atmLocations[i].coords), 
                    map: map
                }); 
            }
        } else {
            for(i=0; i<=atmMarkers.length; i++){
                atmMarkers[i].setVisible(false);
                //console.log(atmCounter*(-1));
            }
        }
    });

    document.getElementById("canteen").addEventListener("click", function () {
        canteenCounter++;
        //console.log(atmCounter);
        if (canteenCounter%2 !=0) {
            for(i=0; i<=canteenMarkers.length; i++){
                canteenMarkers[i] = new google.maps.Marker({
                    position: new google.maps.LatLng(canteenLocations[i].coords), 
                    map: map
                }); 
            }
        } else {
            for(i=0; i<=canteenMarkers.length; i++){
                canteenMarkers[i].setVisible(false);
                //console.log(atmCounter*(-1));
            }
        }
    });

    document.getElementById("museum").addEventListener("click", function () {
        museumCounter++;
        //console.log(atmCounter);
        if (museumCounter%2 !=0) {
            for(i=0; i<=museumMarkers.length; i++){
                museumMarkers[i] = new google.maps.Marker({
                    position: new google.maps.LatLng(museumLocations[i].coords), 
                    map: map
                }); 
            }
        } else {
            for(i=0; i<=museumMarkers.length; i++){
                museumMarkers[i].setVisible(false);
                //console.log(atmCounter*(-1));
            }
        }
    });

    document.getElementById("coffeeshop").addEventListener("click", function () {
        coffeeshopCounter++;
        //console.log(atmCounter);
        if (coffeeshopCounter%2 !=0) {
            for(i=0; i<=coffeeshopMarkers.length; i++){
                coffeeshopMarkers[i] = new google.maps.Marker({
                    position: new google.maps.LatLng(coffeeshopLocations[i].coords), 
                    map: map
                }); 
            }
        } else {
            for(i=0; i<=coffeeshopMarkers.length; i++){
                coffeeshopMarkers[i].setVisible(false);
                //console.log(atmCounter*(-1));
            }
        }
    });

    document.getElementById("copyprint").addEventListener("click", function () {
        copyCounter++;
        //console.log(atmCounter);
        if (copyCounter%2 !=0) {
            for(i=0; i<=copyMarkers.length; i++){
                copyMarkers[i] = new google.maps.Marker({
                    position: new google.maps.LatLng(copyLocations[i].coords), 
                    map: map
                }); 
            }
        } else {
            for(i=0; i<=copyMarkers.length; i++){
                copyMarkers[i].setVisible(false);
                //console.log(atmCounter*(-1));
            }
        }
    });

    document.getElementById("vendm").addEventListener("click", function () {
        vendmCounter++;
        //console.log(atmCounter);
        if (vendmCounter%2 !=0) {
            for(i=0; i<=vendmMarkers.length; i++){
                vendmMarkers[i] = new google.maps.Marker({
                    position: new google.maps.LatLng(vendmLocations[i].coords), 
                    map: map
                }); 
            }
        } else {
            for(i=0; i<=vendmMarkers.length; i++){
                vendmMarkers[i].setVisible(false);
                //console.log(atmCounter*(-1));
            }
        }
    });

    document.getElementById("libr").addEventListener("click", function () {
        librCounter++;
        //console.log(atmCounter);
        if (librCounter%2 !=0) {
            for(i=0; i<=librMarkers.length; i++){
                librMarkers[i] = new google.maps.Marker({
                    position: new google.maps.LatLng(librLocations[i].coords), 
                    map: map
                }); 
            }
        } else {
            for(i=0; i<=librMarkers.length; i++){
                librMarkers[i].setVisible(false);
                //console.log(atmCounter*(-1));
            }
        }
    });

  /*  if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onRecievePosition, positionNotRecieved);
        //update current location (not tested yet)
        var overwatch = navigator.geolocation.watchPosition(onRecievePosition, positionNotRecieved);
        console.log(overwatch);
        navigator.geolocation.clearWatch(overwatch);
    }
    while (true){
        function onRecievePosition(currentPosition) {
            console.log(currentPosition);
            currentLat = currentPosition.coords.latitude;
            currentLng = currentPosition.coords.longitude;
            //mark current location
            var options = {
                zoom: 17,
                center: { lat: currentLat, lng: currentLng }
            }
            var map = new google.maps.Map(document.getElementById('map'), options);
            var marker = new google.maps.Marker({
                position: { lat: currentLat, lng: currentLng },
                map: map,
                //icon: ,
                //draggable:trues
            });
        }
    }
    function positionNotRecieved(positionError) {
        console.log(positionError);
    }
*/
    document.getElementById('getRoute').onclick = function () {
        getCurrentLocation();
        setTimeout(() => calculateAndDisplayRoute(directionsService, directionsDisplay, searchBox), 1000);
    };
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
    searchBox.addListener('places_changed', searchPlace);
    function searchPlace() {
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
            closeCourseInfo();
            //engineering building 1
            if (place.geometry.location == "(13.7365812, 100.53260790000002)" || place.geometry.location == "(13.7365812, 100.53257869999993)") {
                openFloorPlan();
                mapFunc(0, 1);
            }

            //engineering building 2
            else if (place.geometry.location == "(13.7364773, 100.53339249999999)") {
                openFloorPlan();
                mapFunc(0, 2);
            }
            //engineering building 3
            else if (place.geometry.location == "(13.7368903, 100.53315620000001)") {
                openFloorPlan();
                mapFunc(0, 3);
            }

            //engineering building 100
            else if (place.geometry.location == "(13.736365, 100.53394780000008)" || place.geometry.location == "(13.7364442, 100.53388510000002)") {
                openFloorPlan();
                mapFunc(0, 100);
            }

            //Maha Chakri Sirindhorn Building
            else if (place.geometry.location == "(13.7392952, 100.5340708)" || place.geometry.location == "(13.7392241, 100.53434160000006)") {
                openFloorPlan();
                mapFunc(1, 1);
            }
            else {
                closeFloorPlan();
            }

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    };


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

    document.getElementById("gobuilding").addEventListener("click", function () {
        if (document.getElementById("building-search-box").value.length == 0) {
            alert("Please enter destination.");
        } else {
            searchPlace();
        }
    });
    document.getElementById("building-search-box").onkeydown = function () {
        if (event.key === 'Enter') {
            if (document.getElementById("building-search-box").value.length == 0) {
                alert("Please enter destination.");
            } else {
                searchPlace();
            }
        }

    }

}


var listCourse = ["2190101 Computer Programming", "2183101 Engineering Graphics"];
var theCourse = ""

function courseOnEnter(ele) {
    if (event.key === 'Enter') {
        searchCourse()
    }
}

function searchCourse() {

    for (i = 0; i < listCourse.length; i++) {
        if (document.getElementById("course-search").value == (listCourse[i])) {
            theCourse = listCourse[i];
            break;
        }
    }
    if (theCourse != "") {
        showCourse();
    } else if (document.getElementById("course-search").value.length == 0) {
        alert("Please enter course.")
    } else {
        alert("Course Not Found");
        document.getElementById("course-info").style.display = "none";
    }
}

function showCourse() {
    var courseDiv = document.getElementById("course-info");
    courseDiv.style.display = "block";
    document.getElementById("course-info-head").style.display = "block";
    document.getElementById("course-info-head").scrollIntoView({ behavior: "smooth" });
    courseDiv.innerHTML = "<p>Course : " + theCourse + "<br> Section :<br> Lecturer :<br> Day : <br> Time : <br> Room number : <br> Building : <br> Floor : <br> Faculty : </p>";
    theCourse = ""; //prepare to use for next course search
}




function openFloorPlan() {
    document.getElementById("flPlan").style.display = "block";
    document.getElementById("flPlan").scrollIntoView(true, { behavior: "smooth" });
}

function closeCourseInfo() {
    document.getElementById("course-info").style.display = "none";
    document.getElementById("course-info-head").style.display = "none";
}

function closeFloorPlan() {
    document.getElementById("flPlan").style.display = "none";
}

function selBuild() {
    // document.getElementById("fl-4").classList.toggle("hide");
    document.getElementById("myDropdown").classList.toggle("show");
    //document.getElementById("fl-4").classList.toggle("hide");
}
/*old ver floor drop down
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
    }*/
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
//old ver floor drop down}

/* old ver floor drop down
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
*/

function mapFunc(fac, building) {

    //*
    var flList = document.getElementById("selfloorlist");

    //create floor list options
    var flarr = []
    //floor 1 to 12
    for (a = 1; a < 13; a++) {
        flarr[a] = document.createElement("option");
        flarr[a].text = "Floor " + a;
    }

    //floor M, M1, M2, M3
    for (b = 20; b < 24; b++) {
        flarr[b] = document.createElement("option");
        flarr[b].text = "Floor M" + (b - 20);
        if (b == 20) {
            flarr[b].text = "Floor M";
        }
    }

    //clear floor list value
    while (flList.options.length > 0) {
        flList.remove(0);
    }

    //selected building number and faculty
    currentBuild = building;
    currentFac = fac;

    //old ver floor drop down
    //document.getElementById("theDrop2").innerText = "Floor 1";

    if (fac == 0) { //if it is a building in faculty of engineering
        if (building == 100) {//default floor is M
            flList.add(flarr[20]);
            for (x = 3; x < 8; x++) {
                flList.add(flarr[x]);
            }
            flList.add(flarr[9]);
            flList.add(flarr[10]);
            flList.add(flarr[12]);
            document.getElementById("show-map").innerHTML = "<center><img src=\"img/ENG0100-FR90.jpg\"></center>"
            document.getElementById("theDrop2").innerText = "Floor M";
        }
        else {
            flList.add(flarr[1]);
            flList.add(flarr[2]);
            flList.add(flarr[3]);

            if (building == 3) {
                flList.add(flarr[4]);
            }

            //default floor is 1
            document.getElementById("show-map").innerHTML = "<center><img src=\"img/ENG0" + building + "-FR1.jpg\"></center>"
            //document.getElementById("theDrop").innerText = "Engineering Building " + building;
            document.getElementById("building-num").innerText = "Engineering Building " + building;
        }


    }
    else if (fac == 1) { //if it is a building in faculty of arts
        flList.add(flarr[21]);
        flList.add(flarr[23]);
        for (y = 1; y < 10; y++) {
            flList.add(flarr[y]);
        }
        flList.value = "Floor 1";

        document.getElementById("show-map").innerHTML = "<center><img src=\"img/ARTS01-FR1.jpg\"></center>"
        //document.getElementById("theDrop").innerText = "Maha Chakri Sirindhorn Building";
        document.getElementById("building-num").innerText = "Maha Chakri Sirindhorn Building";
    }
}

/*old ver floor drop down
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
}*/

//*

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

/*
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
*/
//geolocation
function gpsHere() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onRecievePosition, positionNotRecieved);
        //update current location (not tested yet)
        var overwatch = navigator.geolocation.watchPosition(onRecievePosition, positionNotRecieved);
        console.log(overwatch);
        navigator.geolocation.clearWatch(overwatch);
    }
    function onRecievePosition(currentPosition) {
        console.log(currentPosition);
        currentLat = currentPosition.coords.latitude;
        currentLng = currentPosition.coords.longitude;
        //mark current location
        var options = {
            zoom: 17,
            center: { lat: currentLat, lng: currentLng }
        }
        var map = new google.maps.Map(document.getElementById('map'), options);
        var marker = new google.maps.Marker({
            position: { lat: currentLat, lng: currentLng },
            map: map,
            //icon: ,
            //draggable:trues
        });
    }

    function positionNotRecieved(positionError) {
        console.log(positionError);
    }
}

//routing
/*
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

//variable to store current location
var currentLat;
var currentLng;

//get the current location and update variable "currentLat" and "currentLng"
function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            currentLat = position.coords.latitude;
            currentLng = position.coords.longitude;
        });
    }
}

//Draw route from current location to destination
function calculateAndDisplayRoute(directionsService, directionsDisplay, searchBox) {
    var places = searchBox.getPlaces();

    if (!places) {
        alert("Please input the destination location");
        return;
    }

    var destinationLat = places[0].geometry.location.lat();
    var destinationLng = places[0].geometry.location.lng();
    var start = new google.maps.LatLng(currentLat, currentLng);
    var end = new google.maps.LatLng(destinationLat, destinationLng);
    var popbus1 = new google.maps.LatLng(13.7400, 100.5315);
    var popbus2 = new google.maps.LatLng(13.7374, 100.5311);

    directionsService.route({
        origin: start,
        destination: end,
        waypoints: [{location: popbus1, stopover: true}, {location: popbus2, stopover: true}],
        optimizeWaypoints: true,
        travelMode: 'WALKING',
    }, function (response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

function flFunc() {
    var flList = document.getElementById("selfloorlist");
    var selectedFloor = flList.value + ""
    var flstr = selectedFloor.slice(6)
    if (flstr == "M") {
        flstr = 90;
    }
    else if (flstr[0] == "M") {
        flstr = parseInt(flstr[1]) + 90;
    }
    if (currentFac == 0) { //if it is a building in faculty of engineering
        document.getElementById("show-map").innerHTML = "<center><img src=\"img/ENG0" + currentBuild + "-FR" + flstr + ".jpg\"></center>"
    }
    else if (currentFac == 1) { //if it is a building in faculty of arts
        document.getElementById("show-map").innerHTML = "<center><img src=\"img/ARTS01-FR" + flstr + ".jpg\"></center>"
    }
}