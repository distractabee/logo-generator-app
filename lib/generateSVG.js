const shapes = require('./shapes');
const { Circle, Square, Triangle } = require('./shapes');

// function renderShapeObj(shape) {
//     let shapeInstance;

//     switch (shape) {
//         case "Circle":
//             shapeInstance = new shapes.Circle();
//             break;
//         case "Triangle":
//             shapeInstance = new shapes.Triangle();
//             break;
//         case "Square":
//             shapeInstance = new shapes.Square();
//             break;
//         default:
//             throw new Error("Invalid shape provided");
//     }

//     return shapeInstance.render();
// }
function renderShapeObj(shape) {
    const shapeOptionsObj = {
       "Circle": new shapes.Circle(),
       "Triangle": new  shapes.Triangle(),
       "Square": new shapes.Square(),
    }
    const shapeSVGOutput = shapeOptionsObj[shape];
    return shapeSVGOutput
}

const generateSVG = (userInput) => {
    const { shape, color, logoText, logoColor } = userInput;
    const shapeSVG = renderShapeObj(shape);

    shapeSVG.setColor(color);

    const outputSVG = `<svg version="1.1"
    width="300" height="300"
    xmlns="http://www.w3.org/2000/svg">

 ${shapeSVG.render()}



 <text x="150" y="175" font-size="100" text-anchor="middle" fill="${logoColor}">${logoText}</text>

</svg>`
return outputSVG
}

module.exports = generateSVG