const button1 = document.getElementById('easter');

button1.addEventListener('click', () => {
    const yellowElement1 = document.getElementById('proj1');
    var yellowElement2 = document.querySelectorAll("[id='proj2']");
    const yellowElement3 = document.getElementById('titleSpan');
    var yellowElement4 = document.querySelectorAll("h1");
    var yellowElement5 = document.getElementById("expheader");

    yellowElement1.style.animation = 'color-change 1s infinite';
    for(var i = 0; i < yellowElement2.length; i++) 
        yellowElement2[i].style.animation='color-change 1s infinite';
    yellowElement3.style.animation = 'color-change 1s infinite';
    for(var i = 0; i < yellowElement4.length; i++) 
        yellowElement4[i].style.animation='color-change 1s infinite';
    yellowElement5.style.animation = 'color-change 1s infinite';
});

