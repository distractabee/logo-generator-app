// add class for Shapes
class Shape {
    constructon() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
}
//add class for circle, square and triangle that expand Shapes
class Circle extends Shape {
    render() {
        return '<circle cx="50" cy="50" r="50" fill="${this.color}" />';
    }
}

class Square extends Shape {
    render() {
        return '<rect x="10" y="10" width="200" height="200" fill="${this.color}" />'
    }
}

class Triangle extends Shape {
    render() {
        return '<polygon points="0 0,50 50,100 0,100 100,0 100" fill="${this.color}" />'
    }
}
//export Shapes

module.exports = { Circle, Square, Triangle }