const scheduler = (fn ,second = 1) => {
    let start = Date.now();
    setTimeout(() => {
        console.log(`It took ${(Date.now() - start) / 1000}seconds`);
        fn();
    }, second * 1000);
};
console.log(scheduler(() => console.log("I'm called"), 3));
