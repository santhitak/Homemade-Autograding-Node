const hello = require("../../../hello");

var test1 = "Hello World";

test("output 1", () => {
  expect(hello(test1)).toBe("Hello World");
});
