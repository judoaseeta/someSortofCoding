const ProductExceptIndex = (numbers) => {
    let result = [];
    for(let i = 0; i < numbers.length; i++) {
        let total = 1;
        for(let j = 0; j < numbers.length; j++) {
            if(i === j) {
                continue;
            }
            total *= numbers[j];
        }
        result.push(total);
        total = 1;
    }
    return result;
};
const ProductExceptIndex2 = (numbers) => {
    for(let i = 0; i < numbers.length; i++) {

    }
};
console.log(ProductExceptIndex([1,2,3,4,5]));