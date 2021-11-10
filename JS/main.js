var ON_FOOT = 3.6;
var BY_BICYCLE = 20.1;
var BY_CAR = 70;
var BY_PLANE = 800;

var minON_FOOT = ON_FOOT/60;
var minBY_BICYCLE = BY_BICYCLE/60;
var minBY_CAR = BY_CAR/60;
var minBY_PLANE = BY_PLANE/60;

var elFoot = document.querySelector("#foot");
var elBicycle = document.querySelector("#bicycle");
var elCar = document.querySelector("#car");
var elPlane = document.querySelector("#plane");

var elForm = document.querySelector("#kilometer");

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    var elDistance = document.querySelector("#distance");
    var walkmin = elDistance.value/ON_FOOT;
    var ridemin = elDistance.value/BY_BICYCLE;
    var drivemin = elDistance.value/BY_CAR;
    var flymin = elDistance.value/BY_PLANE;
    
    elFoot.textContent = `${Math.round(walkmin)} h`;
    elBicycle.textContent = `${Math.round(ridemin)} h`;
    elCar.textContent = `${Math.round(drivemin)} h`;
    elPlane.textContent = `${Math.round(flymin)} h`;
    
//     if((elFoot.textContent - 0) > 59) {
//         // elFoot.textContent = `${elFoot.textContent/60} h ${elFoot.textContent} min`;
//         // elBicycle.textContent = `${elBicycle.textContent/60} h ${elBicycle.textContent} min`;
//         // elCar.textContent = `${elCar.textContent/60} h ${elCar.textContent} min`;
//         // elPlane.textContent = `${elPlane.textContent/60} h ${elPlane.textContent} min`;
//         console.log("TRUE");
//     }else {
//         // elFoot.textContent = `${Math.round(walkmin)} min`;
//         // elBicycle.textContent = `${Math.round(ridemin)} min`;
//         // elCar.textContent = `${Math.round(drivemin)} min`;
//         // elPlane.textContent = `${Math.round(flymin)} min`;
//         console.log("FALSE");
//     }
// 
}
)

