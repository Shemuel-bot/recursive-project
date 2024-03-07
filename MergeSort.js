function mergeSort(array = []) {
  let sub = [];
  if (array.length != 1) {
    sub = array.splice(array.length / 2, array.length);
    array = mergeSort(array);
    sub = mergeSort(sub);
    for (let i = 0; i < array.length; i++) {
      if (array[i] < sub[0]) {
        if (i === array.length - 1) {
          array.push(sub.shift());
        }
      } else if (sub[0] != null) {
        array.splice(i, 0, sub.shift());
      }
    }
    return array;
  } else return array;
}
console.log(mergeSort([105, 79, 100, 110]));
