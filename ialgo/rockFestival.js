function sum(arr) {
    let total = 0;
    for(let i = 0; arr.length; i++) {
        total += arr[i];
    }
    return total;
}
function calculateCost(...args) {
    return sum(...args) / args.length;
}
const rockFestival = (costs, teams) => {
    let range = costs;
    let start = 0;
    let sum = 0;
    let minSum = Infinity;
    while(start < costs.length && range < costs.length) {
        
    }
    return [costs, teams];
};
console.log(rockFestival([1,2,3,1,2,3], 3));
