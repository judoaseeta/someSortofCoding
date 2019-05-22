const FindMissingPositiveInt = (numbers) => {
    const rd = 1;
    for(let i = 1; i <= numbers.length; i++) {
        const findNum = numbers.filter(n => n !== 0 && n === rd * i);
        if(findNum.length !== 0) {
            continue
        } else {
            return rd * i;
        }
    }
};
const FindMissingPositiveInt2 = (numbers) => {
    const sortedNumbers = numbers.sort();
    let left = 0;
    let right = 1;
    while(left < right) {
        if(sortedNumbers[left] < 1) {
            left++;
            right++;
        } else if(sortedNumbers[left] >= 1 && sortedNumbers[right] === sortedNumbers[left] + 1) {
            left++;
            right++;
        } else if(sortedNumbers[left] >= 1 && sortedNumbers[right] !== sortedNumbers[left] + 1) {
            return sortedNumbers[left] + 1;
        }
    }
};
const start1 = Date.now();
console.log(FindMissingPositiveInt([-7, 8, 5, 2,0,3, 4, -1, 1]));
const end1 = Date.now();
console.log(new Date(end1 - start1).getMilliseconds());
console.log(FindMissingPositiveInt2([-7, 8, 5, 2,0,3, 4, -1, 1]));
const start2 = Date.now();
const end2 = Date.now();
console.log(new Date(end2 -start2).getTime());