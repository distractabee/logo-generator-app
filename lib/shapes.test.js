// import Shapes
const shapes = require("./shapes");
const { Circle, Square, Triangle } = require('./shapes');

// test for square
const square = new Square();
square.setColor("red");
expect(square.render()).toEqual(`<rect x="10" y="10" width="300" height="300" fill="red" />`);
//test for triangle
const triangle = new Triangle();
triangle.setColor("blue");
expect(triangle.render()).toEqual(`<polygon points= "150,20 300,300 20,300" fill="blue" />`);

//test for circle
const circle = new Circle();
circle.setColor("black");
expect(circle.render()).toEqual(`<circle cx="150" cy="150" r="150" fill="black" />`);