
function main() {
  console.log("FILE 2")
  var channel_id = 724962;
  // set your channel's read api key here if necessary
  var api_key = 'LJ7HPUWR713W037K';
  // maximum value for the gauge
  var max_gauge_value = 70;
  // name of the gauge
  var gauge_name = 'PM2.5';
  // global variables
  var chart, charts, data;
  // load the google gauge visualization
  google.load('visualization', '1', { packages: ['gauge'] });
  google.setOnLoadCallback(initChart);
  // display the data
  function displayData(point) {
    data.setValue(0, 0, gauge_name);
    data.setValue(0, 1, point);
    chart.draw(data, options);
  }
  // load the data
  function loadData() {
    // variable for the data point
    var value_Span = document.getElementById("valuePM");
    var TextStatus = document.getElementById("TextStatus");
    var p;
    const colorChanged = document.getElementById("colorBG");
    var locationspan = document.getElementById("status-span");
    // get the data from thingspeak
    //https://thingspeak.com/channels/759644/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15
    //$.getJSON('https://api.thingspeak.com/channels/' + channel_id + '/feed/last.json?api_key=' + api_key, function (data) {
    // get the data point
    $.getJSON('https://api.thingspeak.com/channels/' + 759644 + '/feed/last.json?api_key=' + 'UTLABD2M99AIURCF', function (data) {
      p = data.field1;

      // if there is a data point display it
      if (p) {
        // p = Math.round((p / max_gauge_value) * 100);
        displayData(p);

        value_Span.innerHTML = p;
        if (p <= 9 && p >= 0) {
          TextStatus.innerHTML = "LOW";
          colorChanged.style.background = "#00A85A";
        }
        if (p > 9 && p <= 50) {
          TextStatus.innerHTML = "MODERATE";
          colorChanged.style.background = "#0775C1";

        }
        if (p > 50 && p <= 51) {
          TextStatus.innerHTML = "UNHEALTHY<br><small>for sensitive groups</small>";
          colorChanged.style.background = "#FBB410";
        }
        if (p > 51 && p <= 107) {
          TextStatus.innerHTML = "UNHEALTHY";
          colorChanged.style.background = "#F16720";
        }
        if (p > 107 && p <= 178) {
          TextStatus.innerHTML = "VERY UNHEALTHY";
          colorChanged.style.background = "#EC3427";
        }
        if (p > 178 && p <= 250) {
          TextStatus.innerHTML = "HAZARDOUS<br><small>(High)</small>";
          colorChanged.style.background = "#A22617";
        }
        if (p > 250) {
          TextStatus.innerHTML = "HAZARDOUS<br><small>(Extreme)</small>";
          colorChanged.style.background = "#571B0B";
        }
      }
    });
  }
  // initialize the chart
  function initChart() {
    data = new google.visualization.DataTable();
    data.addColumn('string', 'Label');
    data.addColumn('number', 'Value');
    data.addRows(1);
    chart = new google.visualization.Gauge(document.getElementById('gauge_div'));
    options = { width: 0, height: 0, greenFrom: 10, greenTo: 29, redFrom: 41, redTo: 70, yellowFrom: 30, yellowTo: 40, minorTicks: 5 };
    loadData();
    // load new data every 15 seconds
    setInterval('loadData()', 1000);
  }
}


main();