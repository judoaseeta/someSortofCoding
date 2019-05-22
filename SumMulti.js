const getMidBiggest = (arr, mid) => {
    let leftBig = -Infinity;
    let rightBig = -Infinity;
    for(let i = mid; i >0; i--) {
        leftBig = Math.max(leftBig, arr[i] * arr[mid]);
    }
    for(let i = mid + 1; i < arr.length; i++) {
        rightBig =  Math.max(rightBig, arr[i] * arr[mid]);
    }
    return Math.max(leftBig,rightBig);
};
const sumMulti = (arr) => {
    let mid = Math.floor(arr.length / 2);
    if(arr.length === 2) {
        return arr[0] * arr[1];
    } else if (arr.length === 1) {
        return -Infinity;
    }
    let left = sumMulti(arr.slice(0, mid));
    let Mid = getMidBiggest(arr, mid);
    let right = sumMulti(arr.slice(mid + 1, arr.length));
    console.log(left, mid ,right);
    return Math.max(left,Mid, right);
};
// console.log(getMidBiggest([1,4,5,6,7], 2));
console.log(sumMulti([1,99,9,678,34,5000, 4, 7, 6,22,100,37]));
console.log(5000 * 678);