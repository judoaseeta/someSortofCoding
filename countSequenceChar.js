const countSequenceChar = (strings) => {
    // initial flag for sequence;
    let seqFlag = '';
    // stack for frequency of each sequence string; [string, frequency];
    let frequencyStack = [];
    const pushToStack = (s) => frequencyStack.push([s, 1]);
    const incrementer = () => {
        let latestValue = frequencyStack.pop();
        frequencyStack.push([latestValue[0], latestValue[1]+ 1]);
    };
    const findMaximumFrequency = () => {
        let highest = 0;
        let highestIndex = 0;
        for(let i = 0; i< frequencyStack.length; i++) {
            if(frequencyStack[i][1] > highest) {
                highest = frequencyStack[i][1];
                highestIndex = i;
            }
        }
        return {
           [frequencyStack[highestIndex][0]] : frequencyStack[highestIndex][1]
        };
    };
    const mapper = (strings) => {
        for(let i = 0; i < strings.length; i++) {
            if(seqFlag === '') {
                seqFlag = strings[i];
                pushToStack(strings[i]);
            } else if (seqFlag === strings[i]) {
                incrementer();
            } else if (seqFlag !== strings[i]) {
                seqFlag = strings[i];
                pushToStack(strings[i]);
            }
        }
    };
    const trimmedString = strings.trim().split(' ').join('').toLowerCase();
    mapper(trimmedString);
    return findMaximumFrequency();
};
console.log(countSequenceChar('bbbebdceqFa aaadaaappp'));