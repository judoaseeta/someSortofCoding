const swap = (arr, id1, id2) => {
    [arr[id1],  arr[id2]] = [arr[id2], arr[id1]];
};

const pivot = (arr, start = 0, end = arr.length - 1) => {
    let swapId = start;
    let pivotValue = arr[start];
    for(let i = start + 1; i <= end; i++) {
        if(pivotValue > arr[i]) {
            swapId++;
            console.log(arr[swapId], arr[i]);
            swap(arr, swapId, i);
        }
    }
    swap(arr, start, swapId);
    console.log(arr);
    return swapId;
};
console.log(pivot([7,4,9,2,3,1,5,6]));

const quickSort = (arr, start = 0, end = arr.length - 1) => {
    if(start < end) {
        let pivotId = pivot(arr, start, end);
        quickSort(arr, start, pivotId - 1);
        quickSort(arr, pivotId + 1, end);
    }
    return arr;
};
console.log(quickSort([7,4,9,2,3,1,5,6]));

const partition = (arr, left = 0 , right = arr.length) => {
  let pivot = arr[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  while(i <= j){
      while( arr[i] < pivot) {
          i++;
      }
      while( arr[j] > pivot) {
          j--;
      }
  }
};
const quickSort2 = (arr) => {

};