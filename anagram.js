const anagram = (str1, str2) => {
    if(str1.length !== str2.length) {
        return false;
    }
    let frequency = {};
    for(let s of str1) {
        frequency[s] = (frequency[s] || 0) + 1;
    }
    for(let s of str2) {
        if(!frequency[s]) {
            return false;
        } else {
            frequency[s] -= 1;
        }
    }
    return true;
};

console.log(anagram('leehyolee', 'hyoleelee'));