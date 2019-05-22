const getLongest = (strs) => {
    let longest = 0;
    for(let i = 0; i < strs.length; i++) {
        longest = Math.max(longest, strs[i].length);
    }
    return longest;
};
console.log(getLongest(['fewfeqfe','fwefewfew', 'e333', 'fwe']));
// we need 26;
const createBucket = () => {
    const leng = 'abcdefghijklmnopqrstuvwxyz';
    const bucket = {};
    for(let i = 0; i< leng.length; i++) {
        bucket[leng[i]] = [];
    }
    return bucket;
};
console.log(createBucket());
console.log('a'.charCodeAt(0) - 97);