
//function that takes 2 colors as arguments and returns the average color.
function colorAverage(firstColor, secondColor){
//- The parameters will be two 6-digit hexadecimal strings. 
//- The hexadecimal strings represent colors in RGB, much like in CSS.
var firstRgb = hexToRgb(firstColor);
var secondRgb = hexToRgb(secondColor);


//- The average color is to be determined by taking the
//arithmetic mean for each component: red, green, and blue.
var redAvg = (firstRgb.r + secondRgb.r)/2
var greenAvg = (firstRgb.g + secondRgb.g)/2
var blueAvg = (firstRgb.b + secondRgb.b)/2

//- The return value should be a 6-digit hexadecimal string.
return rgbToHex(redAvg, greenAvg, blueAvg)

}

function hexToRgb(hex){
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}



//test it out
console.log(colorAverage("#aa0010", "#070900"))