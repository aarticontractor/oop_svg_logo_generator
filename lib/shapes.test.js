const { Circle, Square, Triangle } = require("./shapes");

describe("Triangle", () => {
  it("It should generate an SVG string with a triangle shape and specified colors/text", () => {
    const triangle = new Triangle("abc", "#FFFFFF", "#000000");
    const rendered = triangle.render();
    expect(rendered).toContain("<polygon");
    expect(rendered).toContain(`fill="#000000"`);
    expect(rendered).toContain(`fill="#FFFFFF"`);
    expect(rendered).toContain("<text");
    expect(rendered).toContain("abc");
  });
});

describe("Circle", () => {
  it("It should generate an SVG string with a circle shape and specified colors/text", () => {
    const circle = new Circle("abc", "#FFFFFF", "#000000");
    const rendered = circle.render();
    expect(rendered).toContain("<circle");
    expect(rendered).toContain(`fill="#000000"`);
    expect(rendered).toContain(`fill="#FFFFFF"`);
    expect(rendered).toContain("<text");
    expect(rendered).toContain("abc");
  });
});

describe("Square", () => {
  it("It should generate an SVG string with a square shape and specified colors/text", () => {
    const square = new Square("abc", "#FFFFFF", "#000000");
    const rendered = square.render();
    expect(rendered).toContain("<rect");
    expect(rendered).toContain(`fill="#000000"`);
    expect(rendered).toContain(`fill="#FFFFFF"`);
    expect(rendered).toContain("<text");
    expect(rendered).toContain("abc");
  });
});
