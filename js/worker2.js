this.onmessage = function () {
  let sum = 0;
  for (let i = 0; i < 5000000000; i++) {
    sum += i;
  }
  this.postMessage(sum);
};
