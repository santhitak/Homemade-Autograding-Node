function hello(arr) {
  var sum = 0;
  arr.forEach((value, index, array) => {
    if (index % 2 === 0) {
      sum += value;
    }
  });
  return sum;
}

module.exports = hello;
