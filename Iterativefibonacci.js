function fibonacci(num) {
  const total = [0, 1];
  for (let i = 0; i < num - 2; i++) {
    total.push(total[total.length - 1] + total[total.length - 2]);
  }
  console.log(total);
}
fibonacci(8);
