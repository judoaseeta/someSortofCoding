
const threeSum = (array, num) => {
    let result = [];
    let left = 0;
    for(let right = 2; right < array.length; right++) {
        console.log(array[left], array[right - 1], array[right]);
        if (array[left] + array[right - 1]+ array[right] === num){
            result.push([array[left], array[right - 1], array[right]]);
            left++;
        } else if (array[left] + array[right - 1] + array[right] !== num ){
            left++;
        }
    }
    return result;
};
console.log(threeSum([1,3,4,5,9,12,3,4,10], 19));
