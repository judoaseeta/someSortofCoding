function insertSort (arr) {
    for(let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        for(let j = i -1; j >= 0; j--) {
            if(arr[j] > temp) arr[j + 1] = arr[j];
        }
    }
    return arr;
}
console.log(insertSort([9,6,1,4,5,8]));