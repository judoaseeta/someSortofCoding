function findMaxCrossing(arr, low = 0, mid , high = arr.length) {
    let leftSum = -Infinity;
    let rightSum = -Infinity;
    let maxLeft = -1;
    let maxRight = -1;
    let sum = 0;
    for(let i = mid - 1; i >= low; i--) {
        sum += arr[i];
        if(sum > leftSum) {
            leftSum = sum;
            maxLeft = i;
        }
    }
    sum = 0;
    for(let j = mid + 1; j < arr.length; j++) {
        sum += arr[j];
        if(sum > rightSum) {
            rightSum = sum;
            maxRight = j;
        }
    }
    return [ maxLeft, maxRight, leftSum + rightSum];
}
function findMaxSubArray(arr, low = 0, high = arr.length) {
    if(high === low) return [ low, high, arr[low]];
    let mid = Math.floor((low + high) / 2);
    let [leftLow, leftHigh, leftSum] = findMaxSubArray(arr, low, mid);
    let [rightLow, rightHigh, rightSum] = findMaxSubArray(arr, mid + 1, high);
    let [crossLow, crossHigh, crossSum] = findMaxCrossing(arr, low, mid, high);
    if(leftSum >= rightSum && leftSum >= crossSum) {
        return [leftLow, leftHigh, leftSum];
    } else if(rightSum >= leftSum && rightSum >= crossSum) {
        return [rightLow, rightHigh, rightSum];
    } else {
        return [ crossLow,crossHigh, crossSum];
}
}
console.log(findMaxSubArray([1,-23,4,33,-69, 43,7,-4,5,55, - 42, 2]));