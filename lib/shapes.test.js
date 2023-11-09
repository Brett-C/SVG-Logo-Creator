const {Triangle} = require('./shapes');

const shape = new Triangle("Green", "BRC", "White");
console.log(shape.render());

expect(shape.generateShape()).toEqual(`
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<polygon points="50, 195 150, 5 250, 195"   fill="Green" stroke="black" stroke-width="5"></polygon><text x="150" y="130" font-size="45" text-anchor="middle" dominant-baseline="middle" font-style="italic" fill="White">BRC</text>

    </svg>`);
