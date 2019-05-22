/*
function flatten([first, ...rest], result = []){
    // add whatever parameters you deem necessary - good luck!
    if(!first || first.length === 0) return result;
    return !Array.isArray(first) ? flatten(rest, [...result, first]) : flatten([...first, rest], result);
}*/
function flatten(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(flatten([1, 2, 3, [4, 5] ]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
console.log(flatten([[1],[2],[3]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));