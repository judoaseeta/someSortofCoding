const createBucket = () => Array.from({ length: 10}, ()=> []);
console.log(createBucket());

const digitCount = (num) => num === 0 ? 1: Math.floor(Math.log10(Math.abs(num))) + 1;
const getDigit = (num, i ,base = 10) => Math.floor(Math.abs(num) / Math.pow(base, i)) % 10;
const findMaxDigit = (arr) => {
    let maxDigit = 0;
    for(let i = 0; i < arr.length; i++) {
        maxDigit = Math.max(maxDigit, digitCount(arr[i]));
    }
    return maxDigit;
};
const radixSort = (arr) => {
  let maxDigit = findMaxDigit(arr);
  for(let i = 0; i < maxDigit; i++) {
      let digitBuckets = createBucket();
      for(let j = 0; j< arr.length; j++) {
          digitBuckets[getDigit(arr[j], i)].push(arr[j]);
      }
      arr = [].concat(...digitBuckets);
  }
  return arr;
};
console.log(radixSort([88,2334423324, 3131,999226, 1223, 1,3,34,555]));