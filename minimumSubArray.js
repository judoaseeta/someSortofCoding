const minSubArrayLen = (nums, target) => {
    let start = 0;
    let end = 0;
    let total = 0;
    let minLen = Infinity;
    while(start < nums.length) {
        if(total < target && end < nums.length) {
            total += nums[end];
            end++;
        }
        else if(total >= target) {
            minLen = Math.min(minLen, end - start);
            total -= nums[start];
            start++;
        }
        else {
            break;
        }
    }
    return minLen === Infinity?  0 : minLen;
};
console.log(minSubArrayLen([13,3,4,5,6], 19));


function productOfArray(arr, sum = 0) {
    return arr.length === 0 ? sum : productOfArray(arr.slice(1), sum + arr[0]);
}
console.log(productOfArray([1,2,3,10]));
