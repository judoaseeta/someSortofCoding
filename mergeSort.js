const merge = (arr1,arr2) => {
    let result = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] > arr2[j]) {
            result.push(arr2[j]);
            j++;
        } else {
            result.push(arr1[i]);
            i++;
        }
    }
    while(i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
};

const mergeSort = (arr) => {
    if(arr.length <= 1) return arr;
    let midPoint = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, midPoint));
    let right = mergeSort(arr.slice(midPoint));

    return merge(left, right);
};
const randArr = (size , allowNeg) => {
    const nums = [];
    for(let i = 0 ; i <= size; i++) {
        if(allowNeg) {

        }
        nums.push(Math.floor((Math.random() * size) ));
    }
    return nums;
};

console.log(mergeSort(randArr(1000)));