function mergeSort(arr) {
  
  if (arr.length === 1) return arr;
  let left = arr.slice(0, Math.floor(arr.length / 2));
  let right = arr.slice(Math.floor(arr.length / 2));

  left = mergeSort(left);
  right = mergeSort(right);

  let result = [];

  while (left.length > 0 || right.length > 0) {
    if (left.length === 0) {
      result.push(right[0]);
      right = right.slice(1);
      continue;
    }
    if (right.length === 0) {
      result.push(left[0]);
      left = left.slice(1);
      continue;
    } else {
      if (left[0] < right[0]) {
        result.push(left[0]);
        left = left.slice(1);
      } else {
        result.push(right[0]);
        right = right.slice(1);
      }
    }
  }
  return result;
}
