const shapes = require('./shapes');

function renderShapeObj(shape) {
    let shapeInstance;

    switch (shape) {
        case "Circle":
            shapeInstance = new shapes.Circle();
            break;
        case "Triangle":
            shapeInstance = new shapes.Triangle();
            break;
        case "Square":
            shapeInstance = new shapes.Square();
            break;
        default:
            throw new Error("Invalid shape provided");
    }

    return shapeInstance.render();
}
// function renderShapeObj(shape) {
//     const shapeOptionsObj = {
//        "Circle": new shapes.Circle.render(),
//        "Triangle": new  shapes.Triangle.render(),
//        "Square": new shapes.Square.render(),
//     }
//     const shapeSVGOutput = shapeOptionsObj[shape];
//     return shapeSVGOutput
// }

const generateSVG = (userInput) => {
    const { shape, color, logoText, logoColor } = userInput;
    const shapeSVG = renderShapeObj(shape);

    const outputSVG = `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

 ${shapeSVG}



 <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logoColor}">${this.logoText}</text>

</svg>`
}

module.exports = generateSVG