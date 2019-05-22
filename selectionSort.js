const selectionSort = (arr) => {
    const swap = (arr, id1, id2) => {
        [arr[id2], arr[id1]] = [arr[id1], arr[id2]];
    };
    for(let i = 0; i < arr.length; i++) {
        let lowestIndex = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[lowestIndex]) {
                lowestIndex = j;
            }
        }
        if(i !== lowestIndex) swap(arr, i, lowestIndex);
    }
    return arr;
};
console.log(selectionSort([-2,3,4,1,5,6]));