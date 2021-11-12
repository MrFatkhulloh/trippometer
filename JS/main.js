/*
var ON_FOOT = 3.6;
var BY_BICYCLE = 20.1;
var BY_CAR = 70;
var BY_PLANE = 800;

var elFoot = document.querySelector("#foot");
var elBicycle = document.querySelector("#bicycle");
var elCar = document.querySelector("#car");
var elPlane = document.querySelector("#plane");

var elForm = document.querySelector("#kilometer");

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    var elDistance = document.querySelector("#distance");
    var walk = elDistance.value/ON_FOOT;
    var ride = elDistance.value/BY_BICYCLE;
    var drive = elDistance.value/BY_CAR;
    var fly = elDistance.value/BY_PLANE;

    if(walk > 23) {
        elFoot.textContent = `${Math.floor(walk/24)} days ${Math.floor(walk%24)} hours ${ Math.round(Math.floor(walk) - walk%24)} minutes`;
    }else if (walk < 24 && walk > 1) {
        elFoot.textContent = `${Math.floor(walk%24)} hour(s) ${ Math.round(Math.floor(walk) - walk%24)} minutes`;
    }else {
        elFoot.textContent = `${ Math.round(Math.floor(walk) - walk%24)} minutes`;        
    }


    elFoot.textContent = `${Math.round(walk)} h`;
    elBicycle.textContent = `${Math.round(ride)} h`;
    elCar.textContent = `${Math.round(drive)} h`;
    elPlane.textContent = `${Math.round(fly)} h`;
    

    
    console.log(elFoot.textContent);
}
)
*/

var elForm = document.querySelector("#input-form");
var elInputDistance = document.querySelector("#inputdistance");
var elSubmitBtn = document.querySelector("#submit_btn");

var elFoot = document.querySelector("#foot");
var elBicycle = document.querySelector("#bike");
var elCar = document.querySelector("#car");
var elPlane = document.querySelector("#plane");

var SPEED_WALK = 3.6;
var SPEED_BY_BIKE = 20.1;
var SPEED_BY_CAR = 70;
var SPEED_BY_PLANE = 800;

function spendingTime(distance, speed) {
    var hours = distance / speed;
    var minutes = (hours - Math.floor(hours)) * 60;
    var minutesOnly = Math.floor(minutes);
    var seconds = (minutes - minutesOnly) * 60;
    var secondsOnly = Math.floor(seconds);
    var days = hours / 24;
    var daysOnly = Math.floor(days);
    var hoursOnly = Math.floor(hours - daysOnly*24);

    hoursShow = hoursOnly ? `${hoursOnly} hours` : "";
    minutesShow = minutesOnly ? `${minutesOnly} minutes` : "";
    secondsShow = secondsOnly ? `${secondsOnly} seconds` : "";
    daysShow = daysOnly ? `${daysOnly} days` : "";

    return `${daysShow}  ${hoursShow}  ${minutesShow}  ${secondsShow}`
}

//_______________________________________________

elForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    var inputDistance = Number(elInputDistance.value.trim());

    if(inputDistance <= 0) {
        alert(`No'ldan katta raqam kiriting`);
        return console.log(`No'ldan katta raqam kiriting`);
    }else if(isNaN(inputDistance)) {
        alert(`Raqam kiriting`);
        return console.log(`Raqam kiriting`);
    }else

    console.log(true);
    elFoot.textContent = spendingTime(inputDistance, SPEED_WALK);
    elBicycle.textContent = spendingTime(inputDistance, SPEED_BY_BIKE);
    elCar.textContent = spendingTime(inputDistance, SPEED_BY_CAR);
    elPlane.textContent = spendingTime(inputDistance, SPEED_BY_PLANE);
})
