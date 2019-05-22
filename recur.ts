const Recursion = function recur (a: number): number | null {
    console.log(a);
    return a > 0 ? recur(a - 1) : null;
};
Recursion(10000);