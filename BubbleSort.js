const bubbleSort = (target) => {
    const swap = (arr, i1, i2) => {
        [arr[i2], arr[i1]] = [arr[i1], arr[i2]];
    };
    for(let i = target.length; i > 0; i--) {
        let isNotSwap = false;
        for(let j = 0; j < i; j++) {
            if(target[j + 1] < target[j]) {
                swap(target, j, j + 1);
                isNotSwap = true;
            }
        }
        if(!isNotSwap) {
            break;
        }
    }
    return target;
};

console.log(bubbleSort([4,3,-1, 2,8,4,9,10]));