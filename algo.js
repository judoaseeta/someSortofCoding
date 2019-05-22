const factorial = function recursion (num ,total = 1) {
    console.log(total);
        return num === 0 ? total : recursion(num - 1, total * num);
};
// console.log(factorial(10000))

const simpleBinarySearch = (array, value) => {
    let min = 0;
    let max = array.length - 1;
    while( min <= max) {
        let midValue = (min + max) / 2;
        if(array[midValue] === value) {
            return midValue;
        } else if (array[midValue] <= value) {
            min = midValue + 1;
        } else {
            max = midValue - 1;
        }
    }
};

// console.log(simpleBinarySearch([1,3,4,5,6,8,9], 3));

const BubbleSort1 = (array)  => {
    let temp;
    for (let outer = array.length - 1; outer > 0; outer--) {
        for(let inner = 0; inner <= outer; inner++) {
            if(array[inner] > array[inner + 1]) {
                temp = array[inner + 1];
                array[inner + 1] = array[inner];
                array[inner] = temp;
            }
        }
    }
    return array;
};

const BubbleSort2 = (array)  => {
    let unsorted_until_index = array.length - 1;
    let sorted = false;
    while(!sorted) {
        sorted = true;
        for(let i = 0;  i < unsorted_until_index; i++) {
            if(array[i] > array[i + 1]) {
                sorted = false;
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
        unsorted_until_index--;
    }
    return array;
};
console.log(BubbleSort1([13,0,2,8,6,9]));


const SelectionSort = (array) => {
    // Pass-through starts here.
    for(let i = 0 ; i < array.length; i++) {
        let lowestIndex = i;
        for(let j = i + 1; j < array.length; j++) {
            if(array[j] < array[lowestIndex]) {
                lowestIndex = j;
            }
        }
        if(lowestIndex !== i ) {
            let temp = array[i];
            array[i] = array[lowestIndex];
            array[lowestIndex] = temp;
        }
    }
    return array;
};
console.log(SelectionSort([9,6,2,3,1,10,5,7]));

const InsertSort = (array) => {
    for(let i = 1; i < array.length; i++) {
        let temp = array[i];
        let j = i -1;
        while(j >= 0 && array[j] > temp) {
            array[j+1] = array[j];
            j--;
        }
        array[j + 1] = temp;
    }
    return array;
};

console.log(InsertSort([9,6,2,3,1,10,5,7]));