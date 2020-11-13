// from data.js
var tableData = data;

// YOUR CODE HERE!
var datetime = data.map(ufo=>ufo.datetime)
var city = data.map(ufo=>ufo.city)
var state = data.map(ufo=>ufo.state)
var country = data.map(ufo=>ufo.country)
var shape = data.map(ufo=>ufo.shape)
var durationMinutes = data.map(ufo=>ufo.durationMinutes)
var comments = data.map(ufo=>ufo.comments)

function buildTable(datetime, city, state, country, shape, durationMinutes, comments) {
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
buildTable(datetime, city, state, country, shape, durationMinutes, comments);