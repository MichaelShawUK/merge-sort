function fibonacciIterative(n) {
  let result = [0, 1];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  for (let i = 3; i <= n; i++) {
    result.push(result[result.length - 1] + result[result.length - 2]);
  }
  return result;
}

function fibonacciRecursive(n) {
  let result = [0, 1];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  else {
    result = fibonacciRecursive(n - 1);
    result.push(result[n - 3] + result[n - 2]);
    return result;
  }
}