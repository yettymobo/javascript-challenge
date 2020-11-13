// from data.js
var tableData = data;

// YOUR CODE HERE!

//Generate full html table
function buildTable(data) {
    var datetime = data.map(ufo=>ufo.datetime);
    var city = data.map(ufo=>ufo.city);
    var state = data.map(ufo=>ufo.state);
    var country = data.map(ufo=>ufo.country);
    var shape = data.map(ufo=>ufo.shape);
    var durationMinutes = data.map(ufo=>ufo.durationMinutes);
    var comments = data.map(ufo=>ufo.comments);

    var table = d3.select("#ufo-table");
    var tbody = table.select("tbody");
    var trow;
    for (var i = 0; i < datetime.length; i++) {
        trow = tbody.append("tr");
        trow.append("td").text(datetime[i]);
        trow.append("td").text(city[i]);
        trow.append("td").text(state[i]);
        trow.append("td").text(country[i]);
        trow.append("td").text(shape[i]);
        trow.append("td").text(durationMinutes[i]);
        trow.append("td").text(comments[i]);
    }
}
buildTable(data);

//Filter table based on Input
var button = d3.select("#filter-btn");
var form = d3.select("form");
button.on('click', filteredRequest);
d3.select("form").on("submit", filteredRequest)

function filteredRequest() {
    var table = d3.select("#ufo-table");
    var tbody = table.select("tbody");
    var above = d3.select("#notif");
    tbody.html("");
    var inputElement = d3.select('#datetime');
    var inputValue = inputElement.property('value');
    console.log(inputValue);
    //console.log(tableData);

    var filteredData = data.filter(ufo => ufo.datetime === inputValue);

    if (filteredData.length !== 0) {
        above.text("");
        buildTable(filteredData);
    }
    else {
        above.text("No results found for selected value. All UFO sightings shown below");
        buildTable(data);
    }
};
