//Output Element//
let outputElement = document.getElementById("output-target");

//Event for clicking on title element//
let titleClick =document.getElementById('page-title').addEventListener('click', function (event) {
    outputElement.innerHTML = `You clicked on the title: "${event.target.innerHTML}".`;
    console.log("event", event.target.innerHTML);
});

//Event for hovering on title element//
let titleHover = document.getElementById('page-header').addEventListener('mouseover', function (event) {
    outputElement.innerHTML = `You are hovering over the "${event.target.innerHTML}".`;
    console.log('event', event.target.innerHTML);
});

//Event for hovering off of title element//
let titleLeave = document.getElementById('page-header').addEventListener('mouseleave', function (event) {
    outputElement.innerHTML = `You left me!`;
    console.log('event', event.target.innerHTML);
});

//events for when a section element is clicked//
let sectionClick = document.querySelector('article').addEventListener('click', function (event) {
        outputElement.innerHTML = `You clicked the "${event.target.innerHTML}" section.`;
             console.log('event', event.target.innerHTML);   
});


////////////////////////////////////////////////////////////////////
let typePress = document.getElementById('keypress-input');
 typePress.addEventListener('input', function (event) {
    outputElement.innerHTML = typePress.value;
    console.log("event", event.target.innerHTML);
});
/////////////////////////////////////////////////////////////////////

//Guinea Pig IDs and EL's//
let guineaPig = document.getElementById("guinea-pig");
let addColor = document.getElementById("add-color");
let hulkify = document.getElementById("make-large");
let captureIt = document.getElementById("add-border");
let rounded = document.getElementById("add-rounding");


addColor.addEventListener("click", function () {
    guineaPig.style.color = ("blue");
});

hulkify.addEventListener("click", function () {
    guineaPig.style.fontSize = "50pt";
});

captureIt.addEventListener("click", function () {
    guineaPig.style.border = " thick solid #0000FF";
});

rounded.addEventListener("click", function () {
    guineaPig.style.borderRadius = "30px";
});
