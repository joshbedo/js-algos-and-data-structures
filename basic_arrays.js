
/**
 * Fibonacci number
 * ex: 10 = 55
 */
let fibNum = index => {
  let a = 0, b = 1, temp;
  while (index>1) {
    temp = b;
    b = b + a;
    a = temp;
    index--;
  }
  return b;
};

console.log(`Fibonacci Number: ${fibNum(10)}`);

/**
 * Fibonacci series (Fn = Fn-1 + Fn-2)
 */
let fibSeries = index => {
  let a = 0,b = 0, temp, fbArray = [0,1];
  while (index>1) {
    temp = b;
    b = b + a;
    a = temp;
    fbArray.push(b);
    index--;
  }
  return fbArray.join(',');
}

console.log(`Fibonacci Series: ${fibSeries(10)}`);

/**
 * Flatten an array
 */
let nestedArray = [[1,2],[3,4],[12,34],[2,5],[7,89]];
let flattenArray = arr => {
  return arr.reduce((previousValue, nextValue) => {
    return previousValue.concat(nextValue);
  });
};

console.log(`Flattened Array: ${flattenArray(nestedArray)}`)

/**
 * Sorting numbers
 */
let numericArray = [1,10,3,33,2,4,7,15,9];
let sortNumberCallback = (a,b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
