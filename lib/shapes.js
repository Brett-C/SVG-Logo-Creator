const { default: generate } = require("@babel/generator")

class Shape {
    constructor(shape_color, characters, text_color) {
        this.text_color = text_color
        this.shape_color = shape_color
        this.characters = characters
    };

    generateSVG(logo) {
        return `
                <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                    ${logo}
                </svg>
                `
    }

    render() {
        return this.generateSVG(this.generateShape());
    }
};

class Circle extends Shape {
    constructor(shape_color, characters, text_color) {
        super(shape_color, characters, text_color)
    }
    generateShape() {
        return `<circle cx="150" cy="100" r="90"  fill="${this.shape_color}" stroke="black" stroke-width="5"></circle>
        <text x="150" y="100" font-size="80" text-anchor="middle" dominant-baseline="middle" font-style="italic" fill="${this.text_color}">${this.characters}</text>`
    }
};

class Square extends Shape {
    constructor(shape_color, characters, text_color) {
        super(shape_color, characters, text_color)
    }
    generateShape() {
        return `
        <rect width="300" height="200"  fill="${this.shape_color}" stroke="black" stroke-width="5"></rect>
        <text x="150" y="100" font-size="75" text-anchor="middle" dominant-baseline="middle" font-style="italic" fill="${this.text_color}">${this.characters}</text>
        `}
};

class Triangle extends Shape {
    constructor(shape_color, characters, text_color) {
        super(shape_color, characters, text_color)
    }
    generateShape() {
        return `
            <polygon points="50, 195 150, 5 250, 195"   fill="${this.shape_color}" stroke="black" stroke-width="5"></polygon>
            <text x="150" y="130" font-size="45" text-anchor="middle" dominant-baseline="middle" font-style="italic" fill="${this.text_color}">${this.characters}</text>
        `}
};



module.exports = { Circle, Square, Triangle };

