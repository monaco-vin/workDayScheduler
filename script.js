
var currentDaytime = moment().format('dddd, MMMM Do');
$("#currentDay").text(currentDaytime);

function getInputFromTextBox() {
    var moveIt = document.getElementById("textInput").value;
    document.getElementById("eventSave").value = moveIt
}
