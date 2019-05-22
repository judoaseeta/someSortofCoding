const sum = (nums) => {
    let max = 0;
    let total = 0;
    for(let i = 0; i <  nums.length; i++) {
        total += nums[i];
    }
    let j = 2;

    let subtractionTotal = 0;
    while(j < nums.length) {
        for(let k = 1; k < nums.length; k += j) {
            console.log(nums[k]);
            subtractionTotal += nums[k];
        }
        max = Math.max(max, total - subtractionTotal);
        j++;
    }
    return max;
};
// console.log(sum([2, 4, 6, 2, 5]));

const sum2 = (nums) => {
  let max = 0;
  let k = 2;
  while(k <= nums.length - 1) {
        let total = 0;
        for(let j = 0; j < nums.length; j += k) {
            total += nums[j];
            console.log(nums[j], total, max);
        }
        max = Math.max(max, total);
        k++;
  }
  return max;
};
// console.log(sum2([1,2,3,4,5,6,7,8,9, 10, 11,12,13,14,15,16,17,18,19, 20]));

const sum3 = (nums) => {
    
};