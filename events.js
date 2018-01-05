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
//NEEDS TO BE REFACTORED!!!!!!!!!!//
let sectionClick = document.getElementsByClassName('article-section')[0].addEventListener('click', function (event) {
        outputElement.innerHTML = `You clicked the "${event.target.innerHTML}" section.`;
             console.log('event', event.target.innerHTML);   
});
let sectionClick2 = document.getElementsByClassName('article-section')[1].addEventListener('click', function (event) {
    outputElement.innerHTML = `You clicked the "${event.target.innerHTML}" section.`;
    console.log('event', event.target.innerHTML);
});
let sectionClick3 = document.getElementsByClassName('article-section')[2].addEventListener('click', function (event) {
    outputElement.innerHTML = `You clicked the "${event.target.innerHTML}" section.`;
    console.log('event', event.target.innerHTML);
});
let sectionClick4 = document.getElementsByClassName('article-section')[3].addEventListener('click', function (event) {
    outputElement.innerHTML = `You clicked the "${event.target.innerHTML}" section.`;
    console.log('event', event.target.innerHTML);
});
let sectionClick5 = document.getElementsByClassName('article-section')[4].addEventListener('click', function (event) {
    outputElement.innerHTML = `You clicked the "${event.target.innerHTML}" section.`;
    console.log('event', event.target.innerHTML);
});
let sectionClick6 = document.getElementsByClassName('article-section')[5].addEventListener('click', function (event) {
    outputElement.innerHTML = `You clicked the "${event.target.innerHTML}" section.`;
    console.log('event', event.target.innerHTML);
});


/////////////////////
let typePress = document.getElementById('keypress-input').addEventListener('keypress', function (event) {
    outputElement.innerHTML = `"${event.target.innerHTML}"`;
    console.log("event", event.target.innerHTML);
});
/////////////////////////////////////////


///////////////////////////////////////////
//Previous attempts at less wet function
//////////////////////////////////////////
/////////////
//Attempt 1//
/////////////
// let target = document.getElementsByClassName('article-section');
// console.log('target',target);
// let targetArray = [];
// targetArray.push(target)
// for (let i = 0; i < targetArray.length; i++) {
//     targetArray[i].addEventListener('click', function (event) {
//         OutputHtml();
//     })
    
// }

// function OutputHtml() {

//     outputElement = something;

//     outputElement.innerHtml = "something";
// } 


/////////////
//Attempt 2//
/////////////
// function printOnClick() {
//     let outputElement = document.getElementById("output-target");
//     let target = document.getElementsByClassName('article-section');
//     console.log('target',target);
//     let targetArray = [];
//     // targetArray.push(target)
//     for (let i = 0; i < targetArray.length; i++) {
//         targetArray.push(target[i])
//         let sectionClick = document.getElementsByClassName('article-section')[i].addEventListener('click', function (event) {
//         outputElement.innerHTML = `You clicked the "${event.target.innerHTML}" section.`;
//             console.log('event', event.target.innerHTML);   
//         });
        
//     }
// }
// printOnClick()


/////////////
//Attempt 3//
/////////////
// function printOnClick() {
//     let outputElement = document.getElementById("output-target");
//     let target = document.getElementsByClassName('article-section');
//     console.log('target',target);
//     let targetArray = [];
//     targetArray.push(target)
//     console.log('targetArray', targetArray);
// }
// printOnClick()



