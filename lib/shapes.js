class Shape {
    constructor(shape_color, characters, text_color) {
        this.text_color = text_color
        this.shape_color = shape_color
        this.characters = characters
    };
};

class Circle extends Shape {
    constructor(shape_color, characters, text_color) {
        super(shape_color, characters, text_color)
    }
    generate() {
        return `<circle cx="250" cy="200" r="250"  fill="${this.shape_color}" stroke="black" stroke-width="5"></circle>
        <text x="250" y="250" font-size="100" text-anchor="middle" dominant-baseline="middle" font-style="italic" fill="${this.text_color}">${this.characters}</text>`
    }

}

module.exports = Circle;