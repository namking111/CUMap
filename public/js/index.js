var currentBuild = 99;
var currentFac = 99;
var GGM;
var service;
var origins = [];
var pos;
var numb;
var map;
var mark;
var stopCounter = true;
window.lat = 13.7367;
window.lng = 100.5331;
var arr_Destination = [
    { title: 'Place A', lat: 13.736363, lng: 100.533980 },
    { title: 'Place B', lat: 13.736086, lng: 100.533973 },
];
var destinations = [];
var posPlace;

//Filters
var librMarkers = [];
var librCounter = 0;
var vendmMarkers = [];
var vendmCounter = 0;
var copyMarkers = [];
var copyCounter = 0;
var coffeeshopMarkers = [];
var coffeeshopCounter = 0;
var museumMarkers = [];
var museumCounter = 0;
var canteenMarkers = [];
var canteenCounter = 0;
var atmMarkers = [];
var atmCounter = 0;


setInterval(function () { updatePosition(getLocation()); }, 1000);
var initMap = function () {
    //Map options
    console.log("FILE 1 map executed")
    var options = {
        zoom: 17,
        center: { lat: 13.7384, lng: 100.5321 }
    }
    //Create Map
    map = new google.maps.Map(document.getElementById('map'), options);
    mark = new google.maps.Marker({ position: { lat: lat, lng: lng }, map: map });
    mark.setVisible(false);
    setInterval(function () { realtimeSetup(); }, 1000);
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    GGM = new Object(google.maps);
    service = new GGM.DistanceMatrixService();
    directionsDisplay.setMap(map);



    document.getElementById("atm").addEventListener("click", function () {
        atmCounter++;
        if (atmCounter % 2 != 0) {
            if (atmCounter == 1) {
                $.get('/location/atm', (data) => {
                    for (i = 0; i < data.length; i++) {
                        atmMarkers[i] = addMarker(data, '/img/atm.png', data[i].Bank_name);
                    }
                });
            } else {
                for (i = 0; i < atmMarkers.length; i++) {
                    atmMarkers[i].setVisible(true);
                }
            }
        } else {
            for (i = 0; i < atmMarkers.length; i++) {
                atmMarkers[i].setVisible(false);
            }
        }

    });

    document.getElementById("canteen").addEventListener("click", function () {
        canteenCounter++;
        if (canteenCounter % 2 != 0) {
            if (canteenCounter == 1) {
                $.get('/location/canteen', (data) => {
                    for (i = 0; i < data.length; i++) {
                        canteenMarkers[i] = addMarker(data, '/img/canteen.png', data[i].Canteen_name);
                    }
                });
            } else {
                for (i = 0; i < canteenMarkers.length; i++) {
                    canteenMarkers[i].setVisible(true);
                }
            }
        } else {
            for (i = 0; i < canteenMarkers.length; i++) {
                canteenMarkers[i].setVisible(false);
            }
        }
    });

    document.getElementById("museum").addEventListener("click", function () {
        museumCounter++;
        if (museumCounter % 2 != 0) {
            if (museumCounter == 1) {
                $.get('/location/museum', (data) => {
                    for (i = 0; i < data.length; i++) {
                        museumMarkers[i] = addMarker(data, '/img/museum.png', data[i].Museum_name);
                    }
                });
            } else {
                for (i = 0; i < museumMarkers.length; i++) {
                    museumMarkers[i].setVisible(true);
                }
            }
        } else {
            for (i = 0; i < museumMarkers.length; i++) {
                museumMarkers[i].setVisible(false);
            }
        }
    });

    document.getElementById("coffeeshop").addEventListener("click", function () {
        coffeeshopCounter++;
        if (coffeeshopCounter % 2 != 0) {
            if (coffeeshopCounter == 1) {
                $.get('/location/coffeeshop', (data) => {
                    for (i = 0; i < data.length; i++) {
                        coffeeshopMarkers[i] = addMarker(data, '/img/coffee.png', data[i].Coffee_shop_name);
                    }
                });
            } else {
                for (i = 0; i < coffeeshopMarkers.length; i++) {
                    coffeeshopMarkers[i].setVisible(true);
                }
            }
        } else {
            for (i = 0; i < coffeeshopMarkers.length; i++) {
                coffeeshopMarkers[i].setVisible(false);
            }
        }
    });

    document.getElementById("copyprint").addEventListener("click", function () {
        copyCounter++;
        if (copyCounter % 2 != 0) {
            if (copyCounter == 1) {
                $.get('/location/copyprint', (data) => {
                    for (i = 0; i < data.length; i++) {
                        copyMarkers[i] = addMarker(data, '/img/copy.png', data[i].Copy_Print_shop_name);
                    }
                });
            } else {
                for (i = 0; i < copyMarkers.length; i++) {
                    copyMarkers[i].setVisible(true);
                }
            }
        } else {
            for (i = 0; i < copyMarkers.length; i++) {
                copyMarkers[i].setVisible(false);
            }
        }
    });

    document.getElementById("vendm").addEventListener("click", function () {
        vendmCounter++;
        if (vendmCounter % 2 != 0) {
            if (vendmCounter == 1) {
                $.get('/location/vending_machine', (data) => {
                    for (i = 0; i < data.length; i++) {
                        vendmMarkers[i] = addMarker(data, '/img/vending.png', data[i].Vending_Machine_type);
                    }
                });
            } else {
                for (i = 0; i < vendmMarkers.length; i++) {
                    vendmMarkers[i].setVisible(true);
                }
            }
        } else {
            for (i = 0; i < vendmMarkers.length; i++) {
                vendmMarkers[i].setVisible(false);
            }
        }
    });

    document.getElementById("libr").addEventListener("click", function () {
        librCounter++;
        if (librCounter % 2 != 0) {
            if (librCounter == 1) {
                $.get('/location/library', (data) => {
                    for (i = 0; i < data.length; i++) {
                        librMarkers[i] = addMarker(data, '/img/Libr.png', data[i].Library_name);
                    }
                });
            } else {
                for (i = 0; i < librMarkers.length; i++) {
                    librMarkers[i].setVisible(true);
                }
            }
        } else {
            for (i = 0; i < librMarkers.length; i++) {
                librMarkers[i].setVisible(false);
            }
        }
    });

    //For adding marker to map
    function addMarker(data, icon, content) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(data[i].Latitude, data[i].Longitude),
            map: map,
            icon: icon
        });
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });

        marker.addListener('click', function () {
            infoWindow.open(map, marker);
        });

        return marker;
    }

    document.getElementById('getRoute').onclick = function () {
        getCurrentLocation();
        setTimeout(() => calculateAndDisplayRoute(directionsService, directionsDisplay, searchBox), 1000);
    };
    // Listen for click on map
    google.maps.event.addListener(map, 'click', function (event) {
    });

    var markers = [];

    //search box
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

};
window.initMap = initMap;

var flList
var selectedFloor
var flstr

var coursedays = 0
var nameid = ""
var currentcourse = ""
var currentsec = 0
var indexcount = 0

var havemap = 0

function courseOnEnter(ele) {
    if (event.key === 'Enter') {
        searchCourse()
    }
}

function searchCourse() {

    for (i = 0; i < courseidnamesec.length; i++) {
        if (document.getElementById("course-search").value == (courseidnamesec[i])) {
            theCourse = courseidnamesec[i];
            currentcourse = allcourseinfo[i].course_id
            currentsec = allcourseinfo[i].section
            arrayindex = i
            break;
        }
    }
    nameid = allcourseinfo[i].course_id + " " + allcourseinfo[i].course_name
    indexcount = allcoursecount.findIndex(ii => ii.crsec === currentcourse + " " + currentsec)
    coursedays = allcoursecount[indexcount].countcrssec

    if (theCourse != "") {
        showCourse(theCourse);
    } else if (document.getElementById("course-search").value.length == 0) {
        alert("Please enter course.")
    } else {
        alert("Course Not Found");
        document.getElementById("course-info").style.display = "none";
    }
}

function showCourse(theCourse) {
    closeCourseInfo()
    closeFloorPlan()
    var courseDiv = document.getElementById("course-info");
    var htmltext = "";
    courseDiv.style.display = "block";
    document.getElementById("course-info-head").style.display = "block";
    theCourse = ""; //prepare to use for next course search
    if (allcourseinfo[arrayindex].faculty_name === "Faculty of Engineering") {
        if (allcourseinfo[arrayindex].bld_name === "Engineering Building 1") {
            havemap = 1
            mapFunc(0, 1);
        } else if (allcourseinfo[arrayindex].bld_name === "Engineering Building 2") {
            havemap = 1
            mapFunc(0, 2);
        } else if (allcourseinfo[arrayindex].bld_name === "Engineering Building 3") {
            havemap = 1
            mapFunc(0, 3);
        } else if (allcourseinfo[arrayindex].bld_name === "Engineering Centennial Memorial Building") {
            havemap = 1
            mapFunc(0, 100);
        } else {
            havemap = 0;
        }
    } else if (allcourseinfo[arrayindex].faculty_name === "Faculty of Arts") {
        if (allcourseinfo[arrayindex].bld_name === "Maha Chakri Sirindhorn Building") {
            havemap = 1
            mapFunc(1, 1);
        } else {
            havemap = 0;
        }
    } else {
        havemap = 0;
    }

    flstr = allcourseinfo[arrayindex].floor;
    document.getElementById("selfloorlist").value = "Floor " + flstr
    flFunc();

    for (var times = 0; times < coursedays; times++) {
        htmltext = htmltext + "<p>Course : " + nameid + "<br> Lecturer : " + allcourseinfo[arrayindex + times].Prof_Name + "<br> Section : " + currentsec + "<br> Day : " + allcourseinfo[arrayindex + times].Day + "<br> Time : " + allcourseinfo[arrayindex + times].ctime + "<br> Faculty : " + allcourseinfo[arrayindex + times].faculty_name + "<br> Room : " + allcourseinfo[arrayindex + times].room_number + "<br> Floor : " + allcourseinfo[arrayindex + times].floor + "<br> Building : " + allcourseinfo[arrayindex + times].bld_name + "</p>" + "<button class=\"btn-go\" id=\"courseroute" + times + "\" onclick=\"goToClass()\">Get Route</button><br><br>"
    }
    courseDiv.innerHTML = htmltext
}

function goToClass() {
    if (havemap === 1) {
        openFloorPlan()
    }
}

function openFloorPlan() {
    document.getElementById("flPlan").style.display = "block";
}

function closeCourseInfo() {
    document.getElementById("course-info").style.display = "none";
    document.getElementById("course-info-head").style.display = "none";
}

function closeFloorPlan() {
    document.getElementById("flPlan").style.display = "none";
}

function selBuild() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function mapFunc(fac, building) {

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

    if (fac == 0) { //if it is a building in faculty of engineering
        if (building == 100) {//default floor is M
            flList.add(flarr[20]);
            for (x = 3; x < 8; x++) {
                flList.add(flarr[x]);
            }
            flList.add(flarr[9]);
            flList.add(flarr[10]);
            flList.add(flarr[12]);
            //default floor is M
            document.getElementById("show-map").innerHTML = "<center><img src=\"img/ENG0100-FR90.jpg\"></center>"
            flList.value = "Floor M";
        }
        else {
            flList.add(flarr[1]);
            flList.add(flarr[2]);
            flList.add(flarr[3]);

            if (building == 3) {
                flList.add(flarr[4]);
            }

            //default floor is 1
            document.getElementById("show-map").innerHTML = "<center><img src=\"img/ENG0" + building + "-FR1.png\"></center>"
        }

        document.getElementById("building-num").innerText = "Engineering Building " + building;

    }
    else if (fac == 1) { //if it is a building in faculty of arts
        flList.add(flarr[21]);
        flList.add(flarr[23]);
        for (y = 1; y < 10; y++) {
            flList.add(flarr[y]);
        }
        flList.value = "Floor 1";

        document.getElementById("show-map").innerHTML = "<center><img src=\"img/ARTS01-FR1.png\"></center>"
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
            //icon: '/img/canteen.png' 
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



function getFloorFromDropDown() {
    flList = document.getElementById("selfloorlist");
    selectedFloor = flList.value + ""
    flstr = selectedFloor.slice(6)
    flFunc()
}

function flFunc() {
    if (flstr == "M") {
        flstr = 90;
    }
    else if (flstr[0] == "M") {
        flstr = parseInt(flstr[1]) + 90;
    }
    if (currentFac == 0) { //if it is a building in faculty of engineering
        document.getElementById("show-map").innerHTML = "<center><img src=\"img/ENG0" + currentBuild + "-FR" + flstr + ".png\"></center>"
    }
    else if (currentFac == 1) { //if it is a building in faculty of arts
        document.getElementById("show-map").innerHTML = "<center><img src=\"img/ARTS01-FR" + flstr + ".png\"></center>"
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