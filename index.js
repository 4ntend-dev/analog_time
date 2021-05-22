$(document).ready(function(){

    var numberList = [], numberRotateBy=0;
    for(var i=1; i<=12; i++) {
        if(i > 6) numberRotateBy = 360 - i*30;
        else numberRotateBy = -i*30;
        numberList.push(`<div style="transform: rotate(${i*30}deg); height: inherit; position: absolute;"><div style="transform: rotate(${numberRotateBy}deg);">${i}</div></div>`);
    }
    $('#clock_circle').prepend(numberList);

    var dt = new Date();
    var sec = dt.getSeconds(), min = dt.getMinutes(), hr = dt.getHours();
    hr = 30*hr + min/2;
    min = min*6;
    sec = sec*6;

    setInterval(function() {
        if(sec == 360) sec = 0;
        if(min == 360) min = 0;
        if(hr == 360) hr = 0; 

        $('#second')[0].style.transform = `rotate(${sec}deg)`;
        $('#minute')[0].style.transform = `rotate(${min}deg)`;
        $('#hour')[0].style.transform = `rotate(${hr}deg)`;

        sec = sec + 6;
        min = min + 1/10;
        hr = hr + 1/120;

    }, 1000);
});
