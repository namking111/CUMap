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

var bname = ""
var indexBld;

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
var muvmiMarkers = [];
var muvmiCounter = 0;
var hamoMarkers = [];
var hamoCounter = 0;
var cubikeMarkers = [];
var cubikeCounter = 0;
var popbusMarkers = [];
var popbusCounter = 0;
// Merge all variables/defines here
// Current Location (if applicable)
var currentLat = null;
var currentLng = null;

// Modes of Transport Booleans
// Until an interface for them is implemented, edit these boolean parameters below to define allowed modes of transport
//var walkingAllowed = true; // Unnecessary
var bicycleAllowed = false;
var hamoAllowed = false;
var popBusAllowed = true;
var muvmiAllowed = false;

// Forcible Modes of Transport Booleans
// Please only use for debugging
// Only 1 can be true at a time
// Above Modes of Transport Boolean must be set to true too
var forceBicycle = false;
var forceHamo = false;
var forcePopBus = true;
var forceMuvmi = false;

// Create Directions Renderers (only 3 are are needed at most as of now)
var directionsDisplay1;
var directionsDisplay2;
var directionsDisplay3;

setInterval(function () { updatePosition(getLocation()); }, 10000);
var initMap = function () {
    //Map options
    console.log("FILE 1 map executed")
    var options = {
        zoom: 17,
        center: { lat: 13.7384, lng: 100.5321 },
        styles: [
            {
                featureType: "poi",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#93817c' }, { visibility: "on" }]
            },
        ]
    }
    //Create Map
    map = new google.maps.Map(document.getElementById('map'), options);
    mark = new google.maps.Marker({ position: { lat: lat, lng: lng }, map: map });
    mark.setVisible(false);
    setInterval(function () { realtimeSetup(); }, 1000);
    var directionsService = new google.maps.DirectionsService;

    // Instantiate Directions Renderers
    directionsDisplay1 = new google.maps.DirectionsRenderer;
    directionsDisplay2 = new google.maps.DirectionsRenderer;
    directionsDisplay3 = new google.maps.DirectionsRenderer;
    directionsDisplay1.setMap(map);
    directionsDisplay2.setMap(map);
    directionsDisplay3.setMap(map);
    directionsDisplay1.setOptions({
        polylineOptions: new google.maps.Polyline({
            // Blue
            strokeColor: '#0000FF',
            strokeOpacity: 1.0,
            strokeWeight: 5
        })
    }); directionsDisplay3.setOptions({
        polylineOptions: new google.maps.Polyline({
            // Blue
            strokeColor: '#0000FF',
            strokeOpacity: 1.0,
            strokeWeight: 5
        })
    });

    GGM = new Object(google.maps);
    service = new GGM.DistanceMatrixService();


    //var directionsDisplay = new google.maps.DirectionsRenderer;
    //directionsDisplay.setMap(map);

    // New added unchecked all landmarks
    document.getElementById("atm").checked = false;
    document.getElementById("canteen").checked = false;
    document.getElementById("libr").checked = false;
    document.getElementById("coffeeshop").checked = false;
    document.getElementById("museum").checked = false;
    document.getElementById("copyprint").checked = false;
    document.getElementById("vendm").checked = false;
    document.getElementById("popbus").checked = false;
    document.getElementById("cubike").checked = false;
    document.getElementById("hamo").checked = false;
    document.getElementById("muvmi").checked = false;

    document.getElementById("atm").addEventListener("click", function () {
        atmCounter++;
        if (atmCounter % 2 != 0) {
            if (atmCounter == 1) {
                $.get('/location/atm', (data) => {
                    for (i = 0; i < data.length; i++) {
                        atmMarkers[i] = addMarker(data[i], '/img/atm.png', data[i].Bank_name);
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
                        canteenMarkers[i] = addMarker(data[i], '/img/canteen.png', data[i].Canteen_name);
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
                        museumMarkers[i] = addMarker(data[i], '/img/museum.png', data[i].Museum_name);
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
                        coffeeshopMarkers[i] = addMarker(data[i], '/img/coffee.png', data[i].Coffee_shop_name);
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
                        copyMarkers[i] = addMarker(data[i], '/img/copy.png', data[i].Copy_Print_shop_name);
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
                        vendmMarkers[i] = addMarker(data[i], '/img/vending.png', data[i].Vending_Machine_type);
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
                        librMarkers[i] = addMarker(data[i], '/img/Libr.png', data[i].Library_name);
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

    document.getElementById("popbus").addEventListener("click", function () {
        popbusCounter++;
        if (popbusCounter % 2 != 0) {
            if (popbusCounter == 1) {
                $.get('/location/CU_Pop_Bus', (data) => {
                    for (i = 0; i < data.length; i++) {
                        popbusMarkers[i] = addMarker(data[i], '/img/popbus.png', data[i].CU_Bus_Station);
                    }
                });
            } else {
                for (i = 0; i < popbusMarkers.length; i++) {
                    popbusMarkers[i].setVisible(true);
                }
            }
        } else {
            for (i = 0; i < popbusMarkers.length; i++) {
                popbusMarkers[i].setVisible(false);
            }
        }
    });

    document.getElementById("cubike").addEventListener("click", function () {
        cubikeCounter++;
        if (cubikeCounter % 2 != 0) {
            if (cubikeCounter == 1) {
                $.get('/location/CU_Bike', (data) => {
                    for (i = 0; i < data.length; i++) {
                        cubikeMarkers[i] = addMarker(data[i], '/img/cubike.png', data[i].CU_Bike_Station);
                    }
                });
            } else {
                for (i = 0; i < cubikeMarkers.length; i++) {
                    cubikeMarkers[i].setVisible(true);
                }
            }
        } else {
            for (i = 0; i < cubikeMarkers.length; i++) {
                cubikeMarkers[i].setVisible(false);
            }
        }
    });

    document.getElementById("hamo").addEventListener("click", function () {
        hamoCounter++;
        if (hamoCounter % 2 != 0) {
            if (hamoCounter == 1) {
                $.get('/location/HAMO', (data) => {
                    for (i = 0; i < data.length; i++) {
                        hamoMarkers[i] = addMarker(data[i], '/img/hamo.png', data[i].HAMO_Station);
                    }
                });
            } else {
                for (i = 0; i < hamoMarkers.length; i++) {
                    hamoMarkers[i].setVisible(true);
                }
            }
        } else {
            for (i = 0; i < hamoMarkers.length; i++) {
                hamoMarkers[i].setVisible(false);
            }
        }
    });

    document.getElementById("muvmi").addEventListener("click", function () {
        muvmiCounter++;
        if (muvmiCounter % 2 != 0) {
            if (muvmiCounter == 1) {
                $.get('/location/Muvmi', (data) => {
                    for (i = 0; i < data.length; i++) {
                        muvmiMarkers[i] = addMarker(data[i], '/img/muvmi.png', data[i].Muvmi_Station);
                    }
                });
            } else {
                for (i = 0; i < muvmiMarkers.length; i++) {
                    muvmiMarkers[i].setVisible(true);
                }
            }
        } else {
            for (i = 0; i < muvmiMarkers.length; i++) {
                muvmiMarkers[i].setVisible(false);
            }
        }
    });


    document.getElementById('getRoute').onclick = function () {
        getCurrentLocation();
        setTimeout(() => calculateAndDisplayRoute(directionsService, directionsDisplay1, directionsDisplay2, directionsDisplay3, searchBox), 2000);
    };
    //For adding marker to map
    function addMarker(data, icon, content) {
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(data.Latitude, data.Longitude),
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
    //to be deleted
    document.getElementById('getRoute').onclick = function () {
        getCurrentLocation();
        setTimeout(() => calculateAndDisplayRoute(directionsService, directionsDisplay1, directionsDisplay2, directionsDisplay3), 2000);
    };
    // Listen for click on map
    google.maps.event.addListener(map, 'click', function (event) {
    });

    var markers = [];

    //search box
    /*
    var searchBox = new google.maps.places.SearchBox(document.getElementById("building-search-box"));
    map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
    });*/

    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.

    //searchBox.addListener('places_changed', searchPlace);


    var buildsearchbox = document.getElementById("building-search-box");
    buildsearchbox.addListener('sel_bld', searchbuildfrombox());

    function searchbuildfrombox() {
        buildsearchbox.onkeydown = function () {
            if (event.key === 'Enter') {
                if (buildsearchbox.value.length == 0) {
                    alert("Please input the destination location.");
                } else {
                    markerAndPlanFromBld()
                }
            }

        }
        document.getElementById("gobuilding").addEventListener("click", function () {
            if (document.getElementById("building-search-box").value.length == 0) {
                alert("Please input the destination location.");
            } else {
                markerAndPlanFromBld()
            }
        });
    }


    function markerAndPlanFromBld() {
        // hide landmark
        var ld = document.getElementById("landmark-dropdown");
        ld.style.display = "none";
        indexBld = buildingdataname.indexOf(buildsearchbox.value);

        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
        markers.push(addMarker(buildingdata[indexBld], '', buildingdata[indexBld].Bld_name))

        bname = buildingdataname[indexBld];
        var ms = document.getElementById("method-select");
        ms.style.display = "block";
        document.getElementById("telldest").innerHTML = "Destination : " + bname;

        closeCourseInfo();
        openFloorPlan()
        if (buildingdata[indexBld].Bld_name == "Maha Chakri Sirindhorn Building") {
            mapFunc(1, 1)
        } else if (buildingdata[indexBld].Bld_name == "Engineering Building 1") {
            mapFunc(0, 1)
        } else if (buildingdata[indexBld].Bld_name == "Engineering Building 2") {
            mapFunc(0, 2)
        } else if (buildingdata[indexBld].Bld_name == "Engineering Building 3") {
            mapFunc(0, 3)
        } else if (buildingdata[indexBld].Bld_name == "Engineering Centennial Memorial Building") {
            mapFunc(0, 100)
            bname = "Engineering Building 100"
        } else {
            closeFloorPlan()
        }

    }


    function searchPlace() {
        var ms = document.getElementById("method-select");
        ms.style.display = "block";

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
                bname = "Engineering Building 1"
            }

            //engineering building 2
            else if (place.geometry.location == "(13.7364773, 100.53339249999999)") {
                openFloorPlan();
                mapFunc(0, 2);
                bname = "Engineering Building 2"
            }
            //engineering building 3
            else if (place.geometry.location == "(13.7368903, 100.53315620000001)") {
                openFloorPlan();
                mapFunc(0, 3);
                bname = "Engineering Building 3"
            }

            //engineering building 100
            else if (place.geometry.location == "(13.736365, 100.53394780000008)" || place.geometry.location == "(13.7364442, 100.53388510000002)") {
                openFloorPlan();
                mapFunc(0, 100);
                bname = "Engineering Building 100"
            }

            //Maha Chakri Sirindhorn Building
            else if (place.geometry.location == "(13.7392952, 100.5340708)" || place.geometry.location == "(13.7392241, 100.53434160000006)") {
                openFloorPlan();
                mapFunc(1, 1);
                bname = "Maha Chakri Sirindhorn Building"
            }
            else {
                closeFloorPlan();
                bname = place.geometry.location;
            }
            document.getElementById("telldest").innerHTML = "Destination : " + bname;

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

            // hide landmark
            var ld = document.getElementById("landmark-dropdown");
            ld.style.display = "none";
        }
    });
    document.getElementById("building-search-box").onkeydown = function () {
        if (event.key === 'Enter') {
            if (document.getElementById("building-search-box").value.length == 0) {
                alert("Please enter destination.");
            } else {
                searchPlace();

                // hide landmark
                var ld = document.getElementById("landmark-dropdown");
                ld.style.display = "none";
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

    if (document.getElementById("course-search").value.length != 0) {
        for (i = 0; i < courseidnamesec.length; i++) {
            if (document.getElementById("course-search").value == (courseidnamesec[i])) {
                theCourse = courseidnamesec[i];
                currentcourse = allcourseinfo[i].course_id
                currentsec = allcourseinfo[i].section
                arrayindex = i
                break;
            }
        }
        nameid = allcourseinfo[arrayindex].course_id + " " + allcourseinfo[arrayindex].course_name
        indexcount = allcoursecount.findIndex(ii => ii.crsec === currentcourse + " " + currentsec)
        coursedays = allcoursecount[indexcount].countcrssec
        showCourse(theCourse);

        // hide landmark
        var ld = document.getElementById("landmark-dropdown");
        ld.style.display = "none";
    } else {
        alert("Please enter course.")
    }
    /*
    //if (theCourse != "") {
        if (document.getElementById("").value.length!=0) {
        showCourse(theCourse);

        // hide landmark
        var ld = document.getElementById("landmark-dropdown");
        ld.style.display = "none";
        
    } else if (document.getElementById("course-search").value.length == 0) {
        alert("Please enter course.")
    } else {
        alert("Course Not Found");
        document.getElementById("course-info").style.display = "none";
    }*/
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
    /********* */
    for (var times = 0; times < coursedays; times++) {
        htmltext = htmltext + "<div id=\"crsdiv\"" + times + "><p>Course : " + nameid + "<br> Lecturer : " + allcourseinfo[arrayindex + times].Prof_Name + "<br> Section : " + currentsec + "<br> Day : " + allcourseinfo[arrayindex + times].Day + "<br> Time : " + allcourseinfo[arrayindex + times].ctime + "<br> Faculty : " + allcourseinfo[arrayindex + times].faculty_name + "<br> Room : " + allcourseinfo[arrayindex + times].room_number + "<br> Floor : " + allcourseinfo[arrayindex + times].floor + "<br> Building : " + allcourseinfo[arrayindex + times].bld_name + "</p>" + "<button class=\"btn-go\" id=\"courseroute" + times + "\" onclick=\"goToClass()\">Find</button><br><br><div>"
        // htmltext = htmltext + "<div id=\"crsdiv\"" + times + "><p>Course : " + nameid + "<br> Lecturer : " + allcourseinfo[arrayindex + times].Prof_Name + "<br> Section : " + currentsec + "<br> Day : " + allcourseinfo[arrayindex + times].Day + "<br> Time : " + allcourseinfo[arrayindex + times].ctime + "<br> Faculty : " + allcourseinfo[arrayindex + times].faculty_name + "<br> Room : " + allcourseinfo[arrayindex + times].room_number + "<br> Floor : " + allcourseinfo[arrayindex + times].floor + "<br> Building : " + allcourseinfo[arrayindex + times].bld_name + "</p>" + "<input type=\"checkbox\"><br><br><br><div>"
        bname = allcourseinfo[arrayindex + times].bld_name;
        document.getElementById("telldest").innerHTML = "Destination : " + bname;
        //alert(document.getElementById("courseroute1").value)
    }
    courseDiv.innerHTML = htmltext
}

function goToClass() {
    if (havemap === 1) {
        openFloorPlan()
    }
    var ms = document.getElementById("method-select");
    ms.style.display = "block";

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
            document.getElementById("show-map").innerHTML = "<center><img src=\"img/ENG0100-FR90.png\"></center>"
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
// Determine best travel/transport mode
function calculateBestTravelMode(start, end, popBusNode, bicycleNode, hamoNode, muvmiNode, callback) {
    var leastDistance = 0;
    var bestMode = 'walking';
    var startIndex = 0;
    var endIndex = 1;

    // Walking
    // Debugging
    console.log('Calculating Distance for Walking...');

    calculateDistance(0, 'WALKING',
        start[0].lat(), start[0].lng(),
        end[0].lat(), end[0].lng(),
        function (leastDistance) {
            // Debugging
            console.log('leastDistance = ' + leastDistance);

            calculateBicycleDistance(bicycleAllowed, start, end, bicycleNode, leastDistance,
                function (bicycleStatus, bicycleDistance = 0, bicycleStartIndex = 0, bicycleEndIndex = 0) {
                    if (bicycleStatus) {
                        leastDistance = bicycleDistance;
                        bestMode = 'bicycle';
                        startIndex = bicycleStartIndex;
                        endIndex = bicycleEndIndex;
                    }

                    calculateHamoDistance(hamoAllowed, start, end, hamoNode, leastDistance,
                        function (hamoStatus, hamoDistance = 0, hamoStartIndex = 0, hamoEndIndex = 0) {
                            if (hamoStatus) {
                                leastDistance = hamoDistance;
                                bestMode = 'hamo';
                                startIndex = hamoStartIndex;
                                endIndex = hamoEndIndex;
                            }

                            calculatePopBusDistance(popBusAllowed, start, end, popBusNode, leastDistance,
                                function (popBusStatus, popBusDistance = 0, popBusStartIndex = 0, popBusEndIndex = 0) {
                                    if (popBusStatus) {
                                        // Debug
                                        console.log('popBusStartIndex = ' + popBusStartIndex);
                                        console.log('popBusEndIndex = ' + popBusEndIndex);

                                        leastDistance = popBusDistance;
                                        bestMode = 'popBus';
                                        startIndex = popBusStartIndex;
                                        endIndex = popBusEndIndex;
                                    }

                                    calculateMuvmiDistance(muvmiAllowed, start, end, muvmiNode, leastDistance,
                                        function (muvmiStatus, muvmiDistance = 0, muvmiStartIndex = 0, muvmiEndIndex = 0) {
                                            if (muvmiStatus) {
                                                leastDistance = muvmiDistance;
                                                bestMode = 'muvmi';
                                                startIndex = muvmiStartIndex;
                                                endIndex = muvmiEndIndex;
                                            }

                                            callback(bestMode, startIndex, endIndex);
                                        }
                                    );
                                }
                            );
                        }
                    );
                }
            );
        }
    );
}

// Calculate Bicycle Distance
function calculateBicycleDistance(allowed, start, end, bicycleNode, leastDistance, callback) {
    if (!allowed) {
        callback(false);
        return;
    }

    var distance = 0;
    var startIndex = 0;
    var endIndex = 1;

    calculateDistance(0, 'WALKING',
        start[0].lat(), start[0].lng(),
        bicycleNode[0].lat(), bicycleNode[0].lng(),
        function (tempDistance1) {
            calculateDistance(0, 'WALKING',
                start[0].lat(), start[0].lng(),
                bicycleNode[1].lat(), bicycleNode[1].lng(),
                function (tempDistance2) {
                    if (tempDistance1 <= tempDistance2) {
                        distance = tempDistance1;
                    } else {
                        distance = tempDistance2;
                        startIndex = 1;
                        endIndex = 0;
                    }

                    calculateDistance(0, 'DRIVING',
                        bicycleNode[startIndex].lat(), bicycleNode[startIndex].lng(),
                        bicycleNode[endIndex].lat(), bicycleNode[endIndex].lng(),
                        function (tempDistance3) {
                            distance += tempDistance3;

                            calculateDistance(0, 'WALKING',
                                bicycleNode[endIndex].lat(), bicycleNode[endIndex].lng(),
                                end[0].lat(), end[0].lng(),
                                function (tempDistance4) {
                                    distance += tempDistance4;

                                    if (distance < leastDistance) {
                                        callback(true, distance, startIndex, endIndex);
                                    } else {
                                        callback(false);
                                    }
                                }
                            );
                        }
                    );
                }
            );
        }
    );
}

// Calculate Hamo Distance
function calculateHamoDistance(allowed, start, end, hamoNode, leastDistance, callback) {
    if (!allowed) {
        callback(false);
        return;
    }

    var distance = 0;
    var startIndex = 0;
    var endIndex = 1;

    calculateDistance(0, 'WALKING',
        start[0].lat(), start[0].lng(),
        hamoNode[0].lat(), hamoNode[0].lng(),
        function (tempDistance1) {
            calculateDistance(0, 'WALKING',
                start[0].lat(), start[0].lng(),
                hamoNode[1].lat(), hamoNode[1].lng(),
                function (tempDistance2) {
                    if (tempDistance1 <= tempDistance2) {
                        distance = tempDistance1;
                    } else {
                        distance = tempDistance2;
                        startIndex = 1;
                        endIndex = 0;
                    }

                    calculateDistance(0, 'DRIVING',
                        hamoNode[startIndex].lat(), hamoNode[startIndex].lng(),
                        hamoNode[endIndex].lat(), hamoNode[endIndex].lng(),
                        function (tempDistance3) {
                            distance += tempDistance3;

                            calculateDistance(0, 'WALKING',
                                hamoNode[endIndex].lat(), hamoNode[endIndex].lng(),
                                end[0].lat(), end[0].lng(),
                                function (tempDistance4) {
                                    distance += tempDistance4;

                                    if (distance < leastDistance) {
                                        callback(true, distance, startIndex, endIndex);
                                    } else {
                                        callback(false);
                                    }
                                }
                            );
                        }
                    );
                }
            );
        }
    );
}

// Calculate Pop Bus Distance
function calculatePopBusDistance(allowed, start, end, popBusNode, leastDistance, callback) {
    if (!allowed) {
        // Debug
        console.log('popBus not allowed!');

        callback(false);
        return;
    }

    var distance = 0;
    var startIndex = 0;
    var endIndex = 1;

    calculateDistance(0, 'WALKING',
        start[0].lat(), start[0].lng(),
        popBusNode[0].lat(), popBusNode[0].lng(),
        function (tempDistance1) {
            calculateDistance(0, 'WALKING',
                start[0].lat(), start[0].lng(),
                popBusNode[1].lat(), popBusNode[1].lng(),
                function (tempDistance2) {
                    if (tempDistance1 <= tempDistance2) {
                        distance = tempDistance1;
                    } else {
                        distance = tempDistance2;
                        startIndex = 1;
                        endIndex = 0;
                    }

                    calculateDistance(0, 'DRIVING',
                        popBusNode[startIndex].lat(), popBusNode[startIndex].lng(),
                        popBusNode[endIndex].lat(), popBusNode[endIndex].lng(),
                        function (tempDistance3) {
                            distance += tempDistance3;

                            calculateDistance(0, 'WALKING',
                                popBusNode[endIndex].lat(), popBusNode[endIndex].lng(),
                                end[0].lat(), end[0].lng(),
                                function (tempDistance4) {
                                    distance += tempDistance4;

                                    if (distance < leastDistance || forcePopBus) {
                                        callback(true, distance, startIndex, endIndex);
                                    } else {
                                        callback(false);
                                    }
                                }
                            );
                        }
                    );
                }
            );
        }
    );
}

// Calculate Muvmi Distance
function calculateMuvmiDistance(allowed, start, end, muvmiNode, leastDistance, callback) {
    if (!allowed) {
        callback(false);
        return;
    }

    var distance = 0;
    var startIndex = 0;
    var endIndex = 1;

    calculateDistance(0, 'WALKING',
        start[0].lat(), start[0].lng(),
        muvmiNode[0].lat(), muvmiNode[0].lng(),
        function (tempDistance1) {
            calculateDistance(0, 'WALKING',
                start[0].lat(), start[0].lng(),
                muvmiNode[1].lat(), muvmiNode[1].lng(),
                function (tempDistance2) {
                    if (tempDistance1 <= tempDistance2) {
                        distance = tempDistance1;
                    } else {
                        distance = tempDistance2;
                        startIndex = 1;
                        endIndex = 0;
                    }

                    calculateDistance(0, 'DRIVING',
                        muvmiNode[startIndex].lat(), muvmiNode[startIndex].lng(),
                        muvmiNode[endIndex].lat(), muvmiNode[endIndex].lng(),
                        function (tempDistance3) {
                            distance += tempDistance3;

                            calculateDistance(0, 'WALKING',
                                muvmiNode[endIndex].lat(), muvmiNode[endIndex].lng(),
                                end[0].lat(), end[0].lng(),
                                function (tempDistance4) {
                                    distance += tempDistance4;

                                    if (distance < leastDistance) {
                                        callback(true, distance, startIndex, endIndex);
                                    } else {
                                        callback(false);
                                    }
                                }
                            );
                        }
                    );
                }
            );
        }
    );
}

// Draw route from current location to destination
function calculateAndDisplayRoute(directionsService, directionsDisplay1, directionsDisplay2, directionsDisplay3, searchBox) {
    // Pre-Setup
    //var places = searchBox.getPlaces();
    //console.log( buildingdata[indexBld].Latitude )

    // Setup
    //var destination = places[0];
    var destinationLat = buildingdata[indexBld].Latitude;
    var destinationLng = buildingdata[indexBld].Longitude;

    var start = [];
    var end = [];

    // Debug -- Premature exit, marker test for currentLat, currentLng
    // var debugMarker = new google.maps.Marker({
    //     position: { lat: currentLat, lng: currentLng },
    //     title: 'Debug Marker'
    // }); debugMarker.setMap(map);
    // return;

    start.push(new GGM.LatLng(currentLat, currentLng));
    end.push(new GGM.LatLng(destinationLat, destinationLng));

    // Initialize regardless of allowed modes of transport
    var popBusNode = [
        new google.maps.LatLng(13.7400, 100.5315),
        new google.maps.LatLng(13.7374, 100.5311),
    ];
    // TODO - follow the format above
    // Must complete before method is used
    var bicycleNode = [
        new google.maps.LatLng(13.739186, 100.533291),
        new google.maps.LatLng(13.73639, 100.531882)
    ];
    var hamoNode = [
        new google.maps.LatLng(13.737258, 100.533336),
        new google.maps.LatLng(13.73858, 100.534569)
    ];

    var muvmiNode = [
        new google.maps.LatLng(13.738968, 100.533442),
        new google.maps.LatLng(13.737271, 100.53326)
    ];

    // Debug (for Walking)
    //var startEntries = Object.entries(start[0]);
    //for(let startValue of Object.values(startEntries)) {
    //    console.log(startValue[0] + ' = ' + startValue[1]());
    //}
    //
    //var destinationEntries = Object.entries(destination);
    //for(let destinationValue of destinationEntries) {
    //    console.log(destinationValue[0] + ' = ' + destinationValue[1]);
    //}

    calculateBestTravelMode(start, end, popBusNode, bicycleNode, hamoNode, muvmiNode,
        function (bestMode, startIndex, endIndex) {
            // Suppress/Clear Directions
            directionsDisplay1.set('directions', null);
            directionsDisplay2.set('directions', null);
            directionsDisplay3.set('directions', null);

            if (forceBicycle) {
                bestMode = 'bicycle';
            } else if (forceHamo) {
                bestMode = 'hamo';
            } else if (forcePopBus) {
                bestMode = 'popBus';
            } else if (forceMuvmi) {
                bestMode = 'muvmi';
            }

            switch (bestMode) {
                case 'walking':
                    directionsService.route({
                        origin: start[0],
                        destination: end[0],
                        travelMode: 'WALKING',
                    }, function (response, status) {
                        if (status === 'OK') {
                            directionsDisplay1.setDirections(response);
                        } else {
                            window.alert('Directions request failed due to ' + status);
                        }
                    });
                    break;

                default:
                    var startStationNode;
                    var endStationNode;
                    switch (bestMode) {
                        case 'bicycle':
                            startStationNode = bicycleNode[startIndex];
                            endStationNode = bicycleNode[endIndex];
                            directionsDisplay2.setOptions({
                                polylineOptions: new google.maps.Polyline({
                                    // Red
                                    strokeColor: '#FF0000',
                                    strokeOpacity: 1.0,
                                    strokeWeight: 5
                                })
                            });
                            break;
                        case 'hamo':
                            startStationNode = hamoNode[startIndex];
                            endStationNode = hamoNode[endIndex];
                            directionsDisplay2.setOptions({
                                polylineOptions: new google.maps.Polyline({
                                    // Purple
                                    strokeColor: '#800080',
                                    strokeOpacity: 1.0,
                                    strokeWeight: 5
                                })
                            });
                            break;
                        case 'popBus':
                            // Debug
                            console.log('popBus selected as bestMode');
                            console.log('startIndex = ' + startIndex);
                            console.log('endIndex = ' + endIndex);

                            startStationNode = popBusNode[startIndex];
                            endStationNode = popBusNode[endIndex];
                            directionsDisplay2.setOptions({
                                polylineOptions: new google.maps.Polyline({
                                    // Green
                                    strokeColor: '#008000',
                                    strokeOpacity: 1.0,
                                    strokeWeight: 5
                                })
                            });
                            break;
                        case 'muvmi':
                            startStationNode = muvmiNode[startIndex];
                            endStationNode = muvmiNode[endIndex];
                            directionsDisplay2.setOptions({
                                polylineOptions: new google.maps.Polyline({
                                    // Orange
                                    strokeColor: '#FFA500',
                                    strokeOpacity: 1.0,
                                    strokeWeight: 5
                                })
                            });
                            break;
                        default:
                            window.alert("Error on inner switch(bestMode)");
                            break;
                    } directionsService.route({
                        origin: start[0],
                        destination: startStationNode,
                        travelMode: 'WALKING',
                    }, function (response, status) {
                        if (status === 'OK') {
                            directionsDisplay1.setDirections(response);
                        } else {
                            window.alert('Directions request failed due to ' + status);
                        }
                    }); directionsService.route({
                        origin: startStationNode,
                        destination: endStationNode,
                        travelMode: 'DRIVING',
                    }, function (response, status) {
                        if (status === 'OK') {
                            directionsDisplay2.setDirections(response);

                            // Debug
                            console.log('Directions drawned...');
                            console.log('startStationNode = ' + startStationNode.lat() + ', ' + startStationNode.lng());
                            console.log('endStationNode = ' + endStationNode.lat() + ', ' + endStationNode.lng());
                        } else {
                            window.alert('Directions request failed due to ' + status);
                        }
                    }); directionsService.route({
                        origin: endStationNode,
                        destination: end[0],
                        travelMode: 'WALKING',
                    }, function (response, status) {
                        if (status === 'OK') {
                            directionsDisplay3.setDirections(response);
                        } else {
                            window.alert('Directions request failed due to ' + status);
                        }
                    });
                    break;
            }
        }
    );
}

function calculateDistance(mode = 1, transportMode = 'DRIVING', fromLat = 0, fromLng = 0, toLat = 0, toLng = 0, callback) {
    // Mode: 0 = Default, 1 = Startup

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            // Return Value
            var returnVar;

            var origins = [];
            var destinations = [];
            switch (mode) {
                case 0:
                    // Debug
                    console.log('Processing calculateDistance mode 0 (non-default)...');
                    console.log('transportMode = ' + transportMode);
                    console.log('fromLat = ' + fromLat);
                    console.log('fromLng = ' + fromLng);
                    console.log('toLat = ' + toLat);
                    console.log('toLng = ' + toLng);

                    origins.push(new GGM.LatLng(fromLat, fromLng));
                    destinations.push(new GGM.LatLng(toLat, toLng));
                    break;

                case 1:
                    origins.push(new GGM.LatLng(position.coords.latitude, position.coords.longitude));

                    for (i = 0; i < arr_Destination.length; i++) {
                        var htmlTr = '<tr><td>' + arr_Destination[i].title + '</td><td class="place_distance"></td></tr>';
                        $("#placeData").append(htmlTr);
                        posPlace = new GGM.LatLng(arr_Destination[i].lat, arr_Destination[i].lng);
                        destinations.push(posPlace);
                    } break;

                default:
                    window.alert("Error on calculateDistance");
                    return;
                    break;
            }

            service.getDistanceMatrix({
                origins: origins,
                destinations: destinations,
                travelMode: transportMode,
                unitSystem: google.maps.UnitSystem.METRIC,
                avoidHighways: true,
                avoidTolls: true,
            }, calculateDistanceCallBack);
            function calculateDistanceCallBack(response, status) {
                if (status == 'OK') {
                    console.log(response.rows);
                    $.each(response.rows[0].elements, function (i, elm) {
                        console.log(i);
                        console.log(elm);
                        if (mode == 1) {
                            $(".place_distance:eq(" + i + ")").text(elm.distance.text);
                            var txt = elm.distance.text;
                            numb = txt.match(/\d/g);
                            numb = numb.join("");
                            console.log(numb);
                        } else if (mode == 0) {
                            returnVar = elm.distance.value;

                            // Debug
                            console.log('returnVar = ' + returnVar);
                            console.log('returnVar returned');
                            callback(returnVar);
                        }
                    });
                }
            }
        }, function () {
            // คำสั่งทำงาน ถ้า ระบบระบุตำแหน่ง geolocation ผิดพลาด หรือไม่ทำงาน    
        });

    } else {

    }
}

$("#spin").click(function () {
    var target = $(this);
    var v1 = document.getElementById("walk1").checked;
    var v2 = document.getElementById("bike1").checked;
    var v3 = document.getElementById("bus1").checked;
    var v4 = document.getElementById("hamo1").checked;
    var v5 = document.getElementById("muvmi1").checked;
    if (v1 == false && v2 == false && v3 == false && v4 == false && v5 == false) {
        alert("Please select method")
    } else {
        target.addClass("processing");
        setTimeout(function () {
            target.removeClass("processing");
            target.addClass("done");
            alert("hellooooo");
            // location.replace("https://www.w3schools.com")
            target.removeClass("done");
        }, 1000);
    }
});