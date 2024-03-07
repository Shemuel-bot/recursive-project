function RecursiveFib(n, array = [0, 1]) {
  const nextNum = array[array.length - 1] + array[array.length - 2];

  if (n === 0) return array;
  if (array[2] === undefined) n -= 2;
  return RecursiveFib(n - 1, array.concat(nextNum));
}

console.log(RecursiveFib(10));
