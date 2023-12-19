function solution(r1, r2) {
    var answer = 0;
    const minPow = Math.pow(r1, 2);
    const maxPow = Math.pow(r2, 2);
    
    function getYMax(x) {
        return Math.floor(Math.sqrt(maxPow-x));
    }
    
    function getYMin(x) {
        if (minPow-x < 0) return 0;
        return Math.ceil(Math.sqrt(minPow-x));
    }
    for (let x = 0; x <= r2; ++x) {
        const currXPow = Math.pow(x, 2);
        const maxY = getYMax(currXPow);
        const minY = getYMin(currXPow);
        answer += maxY-minY+1;
    }
    answer *= 4;
    const common = (r2-r1+1)*4;
    return answer - common;
}