// add class for Shapes
class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
}
//add class for circle, square and triangle that expand Shapes
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="150" r="150" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="10" y="10" width="300" height="300" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points= "150,20 300,300 20,300" fill="${this.color}" />`
    }
}
//export Shapes

module.exports = { Circle, Square, Triangle }