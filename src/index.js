
exports.min = function min(array) {
  if (arguments.length == 0 || array.length == 0) return 0;
  let min = 0;
  for (let i = 0; i <= array.length; i++) {
    if (min > array[i]) min = array[i];
  }
  return min;
}

exports.max = function max(array) {
  if (arguments.length == 0 || array.length == 0) return 0;
  let max = 0;
  for (let i = 0; i <= array.length; i++) {
    if (max < array[i]) max = array[i];
  }
  return max;
}

exports.avg = function avg(array) {
  if (arguments.length == 0 || array.length == 0) return 0;
  return array.reduce((sum, cur) => sum += cur, 0) / array.length;
}
