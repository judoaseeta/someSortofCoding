const cons = (a, d) => [a,d];
const car = ([a, d]) => a;
const cdr = ([a, d]) => d;

const oneToFive = cons(1, cons(2, cons(3, cons(4, cons(5, null)))));
console.log(oneToFive);
console.log(cdr(oneToFive));