const timeBlocks = document.getElementsByClassName("row-lg");
var currentDaytime = moment().format('dddd, MMMM Do');
$("#currentDay").text(currentDaytime);

function activityLoads(){
    var currentTime = moment().format('HH');
    console.log(currentTime)
    for(var i = 0; i < timeBlocks.length; i++){
        var blockTime = parseInt(timeBlocks[i].getAttribute("data-time"))
        if (blockTime < parseInt(currentTime)){
            timeBlocks[i].style.backgroundColor = "gray"
        }
        if (blockTime === parseInt(currentTime)){
            timeBlocks[i].style.backgroundColor = "red"
        }
        if (blockTime < 12){
            var time = blockTime + "am"; 
        }
        else if (blockTime == 12){
            time = blockTime + "pm";
        }
        else {
            time = blockTime - 12 + "pm";
        }
        var storedNotes = localStorage.getItem(time) || " ";
        document.getElementById(time).value = storedNotes
    }
}

function getInputFromTextBox(element, time) {
    console.log(element)
    var text = element.parentElement.parentElement.children[1].children[0].value;
    localStorage.setItem(time, text)
}

window.addEventListener('load', activityLoads)