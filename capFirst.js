function capitalizeFirst ([first, ...rest] , newResult = []) {
    // add whatever parameters you deem necessary - good luck!
    if(!first) return newResult;
    let newFirst = first.slice(0, 1).toUpperCase() + first.slice(1, first.length);
    return capitalizeFirst(rest, [...newResult, newFirst]);
}
console.log(capitalizeFirst(['car','taco','banana']));