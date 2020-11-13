// from data.js
var tableData = data;

// YOUR CODE HERE!

//GENERATE FULL HTML TABLE
function buildTable(data) {
    //map field variables
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

//iterate over field values and append to table
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

//FILTER TABLE BASED ON INPUT VALUES
var button = d3.select("#filter-btn");
button.on('click', filteredRequest);

function filteredRequest() {
    var table = d3.select("#ufo-table");
    var tbody = table.select("tbody");
    var above = d3.select("#notif");
    tbody.html("");
    var inputElement = d3.select('#datetime');
    var inputValue = inputElement.property('value');
    

    var filteredData = data.filter(ufo => ufo.datetime === inputValue);

    if (filteredData.length !== 0) {
        above.text("");
        buildTable(filteredData);
    }
    else {
        above.text("No results found for selected date. All UFO sightings shown below");
        buildTable(data);
    }
};
