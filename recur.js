var Recursion = function recur(a) {
    console.log(a);
    return a > 0 ? recur(a - 1) : null;
};
Recursion(10000);
