console.log('a'[0] < 'bcde'[0]);
const target = ['abba', 'bcd', 'def','fire', 'gut', 'idiom', 'juliet', 'kondom', 'sex','zebra'];
const binaryStr = (strs, kew) => {
    let left = 0;
    let right = strs.length - 1;
    while(left <= right) {
        let midPoint = Math.floor(left + right / 2);
        console.log(strs[midPoint]);
        if(strs[midPoint] === kew) return strs[midPoint];
        else if(strs[midPoint][0] > kew[0]) {
            right = midPoint - 1;
        }
        else if(strs[midPoint][0] < kew[0]){
            left = midPoint + 1;
        }
    }
    return null;
};
console.log(binaryStr(target, 'bcd'));