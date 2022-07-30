const button1 = document.getElementById('test1');
const docColor = document.getElementById('proj1');

// console.log(button1);
button1.addEventListener('click', () => {
    // console.log(docColor);
    const yellowElement1 = document.getElementById('proj1');
    var elms = document.querySelectorAll("[id='proj2']");
    const yellowElement3 = document.getElementById('titleSpan');
    var yellowElement4 = document.querySelectorAll("h1");
    var yellowelement5 = document.querySelectorAll("a:hover");


    docColor.style.color = 'green';
    yellowElement1.style.animation = 'color-change 1s infinite';
    for(var i = 0; i < elms.length; i++) 
        elms[i].style.animation='color-change 1s infinite';
    yellowElement3.style.animation = 'color-change 1s infinite';
    for(var i = 0; i < elms.length; i++) 
        yellowElement4[i].style.animation='color-change 1s infinite';

});

// const yellowElement1 = document.getElementById('proj1');
// var elms = document.querySelectorAll("[id='proj2']");
// const yellowElement3 = document.getElementById('titleSpan');
// var yellowElement4 = document.querySelectorAll("h1");
// var yellowelement5 = document.querySelectorAll("a:hover");

// yellowElement1.style.animation = 'color-change 1s infinite';
// for(var i = 0; i < elms.length; i++) 
//   elms[i].style.animation='color-change 1s infinite';
// yellowElement3.style.animation = 'color-change 1s infinite';
// for(var i = 0; i < elms.length; i++) 
//   yellowElement4[i].style.animation='color-change 1s infinite';
