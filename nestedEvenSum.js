function nestedEvenSum (target) {
    // add whatever parameters you deem necessary - good luck!
    let sum = 0;
    let keys = Object.keys(target);
    for(let i = 0; i < keys.length; i++) {
        if(target[keys[i]] instanceof Object) {
            sum += nestedEvenSum(target[keys[i]] );
        } else if (typeof target[keys[i]] === 'number' && target[keys[i]] % 2 ===0) {
            sum += target[keys[i]];
        }
    }
    return sum;
}


const obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
};

const obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10