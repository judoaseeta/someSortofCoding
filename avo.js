

const avo = (word, keyword) => {
    const same = word.substr(word.toLowerCase().indexOf(keyword), keyword.length);
    return same;
};
console.log(avo('ABracadabra','bra'));


const avo2 = (word, keyword) => {
    return word.replace(new RegExp(keyword, 'i'), `<strong>${word.substr(word.toLowerCase().indexOf(keyword), keyword.length)}</strong>`)
};

console.log(avo2('ABracadabra','bra'));

const checkObj = target => target === Object(target);
console.log(checkObj({ k: 1}));