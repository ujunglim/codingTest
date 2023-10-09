// 최대공약수 구하기
function getGCD(a, b) {
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    const remainer = max % min;
    
    if (remainer === 0) {
        return min;
    }
    return getGCD(min, remainer);
}

// 최소공배수 구하기
function getLCM(a, b) {
    return a * b / getGCD(a, b);
}

function solution(arr) {
    var lcm = 1;
    for (let i = 0; i < arr.length; i++) {
        lcm = getLCM(lcm, arr[i]);
    }
    return lcm;
}