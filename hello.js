function hello(arr) {
  var sum = 0;
  arr.forEach((value, index, array) => {
    if (index % 2 === 0) {
      sum += value;
    }
  });
  return sum;
}

console.log(hello([5, 5, 8, 84, 5, 4, 8, 48, 7, 7, 4]));

module.exports = hello;
