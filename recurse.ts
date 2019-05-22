const isEmpty = ([head, ...tail ]: any[]) => head === undefined;


function aggregateNumberRecursively(nums: number[], total = 0 ) {
    const [ first, ...rest] = nums;
    return !first ? total : aggregateNumberRecursively(rest, total + first);
}

function aggregateTextRecursively(str: string, obj: {[k: string]: number} = {}) {
    const [ first, ...rest ] = str;
    obj[first] ? obj[first]++ : obj[first] = 1;
    return !rest ? obj : aggregateTextRecursively(rest, obj);
}

const Numbers = [4,5,45,11,454,888,99,2,4,'',7, ];
const filterNumber = (arr: any[]) => arr.filter( unit => unit && typeof unit === 'number');

const Target = 'fwefewweewf';


const aggregator = (acc: {[k: string]: number}, curr: string) => {
    acc[curr] ? acc[curr]++ : acc[curr] = 1;
    return acc;
};

const aggregateWithReduce = (str: string)=>  str.split('').reduce(aggregator, {});



const numbers = [4,151,34234,11,33,45,66, 0];
const aggregateNumbersWithRecursion = (nums: number[], total: number = 0) => {
    const [ first, ...rest ] = nums;
    return !first ? total : aggregateNumberRecursively(rest, total + first);
};
const aggregateNumber = (acc: number, curr: number) => acc + curr;
const aggregateNumberWithReduce = numbers.reduce(aggregateNumber, 0);


const getMaxNumberWithRecursion = (nums: number[], max: number = 0) => {
    const [first, ...rest] = nums;
    if(first && first > max) {
        max = first;
    }
    return isEmpty(rest) ? max : getMaxNumberWithRecursion(rest, max);
};
const numberComparater = (prevMax: number, curr: number) => curr > prevMax ? curr : prevMax;
const getMaxNumbersWithReduce = (nums: number[]) => nums.reduce(numberComparater, 0);


function factorialWithRecursion (num: number, total: number = 1): any  {
    return num === 1 ?  total : factorialWithRecursion(num - 1 , num * total);
}
console.log(factorialWithRecursion(100));
