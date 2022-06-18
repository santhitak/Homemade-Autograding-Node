const hello = require("../../../hello");

var test1 = [45, 4, 9, 16, 25, 85, 3, 7, 9];
var test2 = [45, 4, 9, 7, 25, 1, 14, 19, 32];
var test3 = [5, 4, 11 + 2, 19, 55];
var test4 = [5, 4, 3, 19, -9, 32, 2];

test("output 1", () => {
  expect(hello(test1)).toBe(91);
});

test("output 2", () => {
  expect(hello(test2)).toBe(125);
});

test("output 3", () => {
  expect(hello(test3)).toBe(50);
});

test("output 4", () => {
  expect(hello(test4)).toBe(1);
});
