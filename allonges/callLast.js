const callLast = (fn, ...args) => (...remainArgs) => fn(...remainArgs, ...args);
