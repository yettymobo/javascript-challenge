// from data.js
var tableData = data;

// YOUR CODE HERE!

//GENERATE DROP DOWN LISTS FOR FILTER SEARCH
//get unique value field lists for dropdown selections
    var uniquedatetime = data.map(ufo=>ufo.datetime).filter((item, i, ar) => ar.indexOf(item) === i);
    var uniquecity = data.map(ufo=>ufo.city).filter((item, i, ar) => ar.indexOf(item) === i);
    var uniquestate = data.map(ufo=>ufo.state).filter((item, i, ar) => ar.indexOf(item) === i);
    var uniquecountry = data.map(ufo=>ufo.country).filter((item, i, ar) => ar.indexOf(item) === i);
    var uniqueshape = data.map(ufo=>ufo.shape).filter((item, i, ar) => ar.indexOf(item) === i);

//define form variables
    var formdatetime = d3.select("#datetime");
    var formcity = d3.select("#city");
    var formstate = d3.select("#state");
    var formcountry = d3.select("#country");
    var formshape = d3.select("#shape");

//iterate over field values and append to  form
    for (var i = 0; i < uniquedatetime.length; i++) {formdatetime.append("option").text(uniquedatetime[i])};
    for (var i = 0; i < uniquecity.length; i++) {formcity.append("option").text(uniquecity[i])};
    for (var i = 0; i < uniquestate.length; i++) {formstate.append("option").text(uniquestate[i])};
    for (var i = 0; i < uniquecountry.length; i++) {formcountry.append("option").text(uniquecountry[i])};
    for (var i = 0; i < uniqueshape.length; i++) {formshape.append("option").text(uniqueshape[i])};



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
 
//define table variables
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
    var inputElementDT = d3.select('#datetime');
    var inputValueDT= inputElementDT.property('value');
    var inputElementCI = d3.select('#city');
    var inputValueCI = inputElementCI.property('value');
    var inputElementST = d3.select('#state');
    var inputValueST = inputElementST.property('value');
    var inputElementCO = d3.select('#country');
    var inputValueCO = inputElementCO.property('value');
    var inputElementSH = d3.select('#shape');
    var inputValueSH = inputElementSH.property('value');
    
    var filteredData = data.filter(ufo => ufo.datetime === inputValueDT && ufo.city === inputValueCI && ufo.state === inputValueST && ufo.country === inputValueCO && ufo.shape === inputValueSH);

    if (filteredData.length !== 0) {
        above.text("");
        buildTable(filteredData);
    }
    else {
        above.text("No results found for selected values. All UFO sightings shown below");
        buildTable(data);
    }
};
