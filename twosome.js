
const twoSum = (array, num) => {
    let result = [];
    let left = 0;
    let right = array.length - 1;
    let target;
    while(left < right) {
        target = num - array[left];
        if(array[right] === target) {
            result.push([array[left], array[right]]);
            left++;
            right = array.length - 1;
        } else if(array[right] !== target) {
            right--;
        }
    }
    return result;
};
const twoSum2 = (array, num) => {
    let result = [];
    let left = 0;
    let right = array.length - 1;
    while(left < right) {
        if(array[left] + array[right] === num) {
            result.push([array[left], array[right]]);
            left++;
            array.splice(right, 1);
            right = array.length - 1;
        } else if(array[left] + array[right] !== num) {
            right--;
        }
    }
    return result;
};
    console.log(twoSum2([9,10, 6,16, 8,11, 7], 17));
console.log(twoSum2([-3, -2, -1, 0, 3,2,1], 0));