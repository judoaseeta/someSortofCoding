const callLast = (fn, ...args) => (...remainArgs) => fn(...remainArgs, ...args);

const lengthDelayWork = ([first, ...rest], totalNumber) =>
    first === undefined
        ? totalNumber
        : lengthDelayWork(rest, totalNumber + 1);

const length = callLast(lengthDelayWork, 0);
console.log(length(['few','few']));

const target = Array.from({ length: 1000 }).map((_, i)=> i);

const mapDelayWork = (fn, [first, ...rest], prepend) =>
    first === undefined
        ? prepend
        : mapDelayWork(fn, rest, [...prepend, fn(first)]);
const MapWithDouble = callLast(mapDelayWork, []);
console.log(MapWithDouble((n) => n * n, target));
