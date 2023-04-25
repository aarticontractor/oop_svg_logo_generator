class Triangle {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    // renders a triangle with the specified colors and text
    render() {
        const points = "150,18 244,182 56,182";
        const text = `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
        return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
              <polygon points="${points}" fill="${this.shapeColor}" />
              ${text}
            </svg>`;
    }


}


class Circle {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    // renders a circle with the specified colors and text
    render() {
        return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
              <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`;
    }


}



class Square {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    // renders a square with the specified colors and text
    render() {
        return `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="50" width="200" height="100" fill="${this.shapeColor}" />
              <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`;
    }



}

module.exports = {
    Circle,
    Square,
    Triangle
};