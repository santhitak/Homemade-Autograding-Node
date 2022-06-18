const hello = require("./hello");

test("outputs", () => {
  expect(hello()).toBe(hello());
});
