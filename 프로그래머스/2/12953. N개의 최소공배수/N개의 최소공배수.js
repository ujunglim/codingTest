function solution(arr) {
    arr.sort((a, b) => a-b);
    let lcm = 1;
    
    for (let i = 0; i < arr.length; ++i) {
        lcm = getLCM(lcm, arr[i]);  // 이전 최소공배수와 현재값의 최소공배수
    }
    return lcm;
}

function getGCD(a, b) {
    if (b === 0) return a;
    return getGCD(b, a%b);
}

function getLCM(a, b) {
    return a*b/getGCD(a, b);
}
