function hello() {
  var sum = 0;
  var numbers = [3, 4, 3, 1, 5, 32, 2];
  numbers.forEach((value, index, array) => {
    if (index % 2 === 0) {
      sum += value;
    }
  });
  return sum;
}

module.exports = hello;
