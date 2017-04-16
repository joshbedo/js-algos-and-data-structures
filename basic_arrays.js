/**
 * Fibonacci number
 * ex: 10 = 55
 */
let fibNum = index => {
  let a=0,b=1,temp;
  while (index>1) {
    temp = b;
    b = b + a;
    a = temp;
    index--;
  }
  return b;
};

console.log(`Fibonacci Number: ${fibNum(10)}`);
