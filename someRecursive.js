// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

function someRecursive([first, ...rest], callback){
    // add whatever parameters you deem necessary - good luck!
    if(first && callback(first)) return true;
    return !first ? false : someRecursive(rest, callback);
}

 console.log(someRecursive([4,6,8], isOdd));
// console.log(someRecursive([4,6,8], val => val > 10));