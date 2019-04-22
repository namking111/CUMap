var currentBuild = 99;
var currentFac = 99;
var GGM;
var service;
var origins = [];
var pos;
var numb;
var arr_Destination = [
    { title: 'Place A', lat: 13.736363, lng: 100.533980 },
    { title: 'Place B', lat: 13.736086, lng: 100.533973 },
    /*  {title:'Place C',lat:ddddd,lng:ddddd},
        {title:'Place D',lat:ddddd,lng:ddddd},
        {title:'Place E',lat:ddddd,lng:ddddd},
        {title:'Place F',lat:ddddd,lng:ddddd},*/
];
var destinations = [];
var posPlace;

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

var atmMarkers = [];
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
    GGM = new Object(google.maps);
    service = new GGM.DistanceMatrixService();
    directionsDisplay.setMap(map);

    document.getElementById("atm").addEventListener("click", function () {
        atmCounter++;
        //console.log(atmCounter);
        if (atmCounter % 2 != 0) {
            for (i = 0; i <= atmMarkers.length; i++) {
                atmMarkers[i] = new google.maps.Marker({
                    position: new google.maps.LatLng(atmLocations[i].coords),
                    map: map
                });
            }
        } else {
            for (i = 0; i <= atmMarkers.length; i++) {
                atmMarkers[i].setVisible(false);
                //console.log(atmCounter*(-1));
            }
        }
    });

    document.getElementById("canteen").addEventListener("click", function () {
        canteenCounter++;
        //console.log(atmCounter);
        if (canteenCounter % 2 != 0) {
            for (i = 0; i <= canteenMarkers.length; i++) {
                canteenMarkers[i] = new google.maps.Marker({
                    position: new google.maps.LatLng(canteenLocations[i].coords),
                    map: map
                });
            }
        } else {
            for (i = 0; i <= canteenMarkers.length; i++) {
                canteenMarkers[i].setVisible(false);
                //console.log(atmCounter*(-1));
            }
        }
    });

    document.getElementById("museum").addEventListener("click", function () {
        museumCounter++;
        //console.log(atmCounter);
        if (museumCounter % 2 != 0) {
            for (i = 0; i <= museumMarkers.length; i++) {
                museumMarkers[i] = new google.maps.Marker({
                    position: new google.maps.LatLng(museumLocations[i].coords),
                    map: map
                });
            }
        } else {
            for (i = 0; i <= museumMarkers.length; i++) {
                museumMarkers[i].setVisible(false);
                //console.log(atmCounter*(-1));
            }
        }
    });

    document.getElementById("coffeeshop").addEventListener("click", function () {
        coffeeshopCounter++;
        //console.log(atmCounter);
        if (coffeeshopCounter % 2 != 0) {
            for (i = 0; i <= coffeeshopMarkers.length; i++) {
                coffeeshopMarkers[i] = new google.maps.Marker({
                    position: new google.maps.LatLng(coffeeshopLocations[i].coords),
                    map: map
                });
            }
        } else {
            for (i = 0; i <= coffeeshopMarkers.length; i++) {
                coffeeshopMarkers[i].setVisible(false);
                //console.log(atmCounter*(-1));
            }
        }
    });

    document.getElementById("copyprint").addEventListener("click", function () {
        copyCounter++;
        //console.log(atmCounter);
        if (copyCounter % 2 != 0) {
            for (i = 0; i <= copyMarkers.length; i++) {
                copyMarkers[i] = new google.maps.Marker({
                    position: new google.maps.LatLng(copyLocations[i].coords),
                    map: map
                });
            }
        } else {
            for (i = 0; i <= copyMarkers.length; i++) {
                copyMarkers[i].setVisible(false);
                //console.log(atmCounter*(-1));
            }
        }
    });

    document.getElementById("vendm").addEventListener("click", function () {
        vendmCounter++;
        //console.log(atmCounter);
        if (vendmCounter % 2 != 0) {
            for (i = 0; i <= vendmMarkers.length; i++) {
                vendmMarkers[i] = new google.maps.Marker({
                    position: new google.maps.LatLng(vendmLocations[i].coords),
                    map: map
                });
            }
        } else {
            for (i = 0; i <= vendmMarkers.length; i++) {
                vendmMarkers[i].setVisible(false);
                //console.log(atmCounter*(-1));
            }
        }
    });

    document.getElementById("libr").addEventListener("click", function () {
        librCounter++;
        //console.log(atmCounter);
        if (librCounter % 2 != 0) {
            for (i = 0; i <= librMarkers.length; i++) {
                librMarkers[i] = new google.maps.Marker({
                    position: new google.maps.LatLng(librLocations[i].coords),
                    map: map
                });
            }
        } else {
            for (i = 0; i <= librMarkers.length; i++) {
                librMarkers[i].setVisible(false);
                //console.log(atmCounter*(-1));
            }
        }
    });

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
    calculateDistance();

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
        waypoints: [{ location: popbus1, stopover: true }, { location: popbus2, stopover: true }],
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
function calculateDistance() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var myPosition_lat = position.coords.latitude; // เก็บค่าตำแหน่ง latitude  ปัจจุบัน  
            var myPosition_lon = position.coords.longitude;  // เก็บค่าตำแหน่ง  longitude ปัจจุบัน           

            // สรัาง LatLng ตำแหน่ง สำหรับ google map  
            pos = new GGM.LatLng(myPosition_lat, myPosition_lon);
            origins = [];
            origins.push(pos);
            for (i = 0; i < arr_Destination.length; i++) {
                var htmlTr = '<tr><td>' + arr_Destination[i].title + '</td><td class="place_distance"></td></tr>';
                $("#placeData").append(htmlTr);

                posPlace = new GGM.LatLng(arr_Destination[i].lat, arr_Destination[i].lng);
                destinations.push(posPlace);
            }
            service.getDistanceMatrix(
                {
                    origins: origins,
                    destinations: destinations,
                    travelMode: 'DRIVING',
                    avoidHighways: true,
                    avoidTolls: true,
                }, callback);




            function callback(response, status) {
                if (status == 'OK') {
                    console.log(response.rows);
                    $.each(response.rows[0].elements, function (i, elm) {
                        console.log(i);
                        console.log(elm);
                        $(".place_distance:eq(" + i + ")").text(elm.distance.text);
                        var txt = elm.distance.text;
                        numb = txt.match(/\d/g);
                        numb = numb.join("");
                        console.log(numb);
                    });
                }
            }


        }, function () {
            // คำสั่งทำงาน ถ้า ระบบระบุตำแหน่ง geolocation ผิดพลาด หรือไม่ทำงาน    
        });





    } else {

    }
}
