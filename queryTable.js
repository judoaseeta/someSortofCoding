const queryTable = (arr) => {
    let dictionary = {};
    arr.forEach(item => dictionary[item] = 1);
    console.log(dictionary);
    return (str) => {
        let result = [];
        const reg = new RegExp(str,'i');
            for(let k in dictionary) {
                if(dictionary.hasOwnProperty(k) && reg.test(k)) result.push(k);
            }
        return result;
    }
};
const table = queryTable(['dog', 'deer', 'deal']);
console.log(table('al'));