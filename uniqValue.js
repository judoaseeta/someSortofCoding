// disclaimers: this function only applys to sorted array.

const findUniqValue = (nums) => {
    let left = 0;
    let right = 1;
    while(right < nums.length) {
        if(nums[left] === nums[right]) {
            right++;
        } else if(nums[left] !== nums[right]) {
            left++;
            nums[left] = nums[right];
            right++;
        }
    }
    return left + 1;
};
const findUniqValue2 = (nums) => {
    if(nums.length === 0) return 0;
    let left = 0;
    for(let right = 1; right < nums.length; right++) {
        if(nums[left] !== nums[right]){
            left++;
            nums[left] = nums[right];
        }
    }
    return left + 1;
};
console.log(findUniqValue2([1,1,2,3,4,4,4,5,6,6,6,7]));
