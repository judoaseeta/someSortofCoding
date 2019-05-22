function getFailRate (failed, reached) {
    if(!failed) failed = 0;
    if(!reached) reached = 0;
    return failed / reached;
}
function solution(N, stages) {
    let collector = {

    };
    let answer = Array.from({ length: N}).map((() => []));
    for(let i = 0; i < stages.length; i++) {
        collector[stages[i]] = (collector[stages[i]] || 0) + 1;
    }
    let middle = [];
    for(let j = 1; j < N + 1; j++) {

    }
    console.log(collector);
    return answer;
}
console.log(solution(5,[2, 1, 2, 6, 2, 4, 3, 3]));