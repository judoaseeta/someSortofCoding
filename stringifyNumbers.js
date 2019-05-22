function stringifyNumbers(target) {
    const keys = Object.keys(target);
    for(let i = 0; i < keys.length; i++) {
        if(typeof target[keys[i]] === 'number') {
            target[keys[i]] = String(target[keys[i]]);
        } else if(target[keys[i]] instanceof Object) {
            target[keys[i]] = stringifyNumbers(target[keys[i]]);
        }
    }
    console.log(target);
    return target;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
};

stringifyNumbers(obj);

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/