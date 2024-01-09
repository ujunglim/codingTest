function solution(arr) {
    var lcm = 1;
    
    for (const a of arr) {
        lcm = getLCM(lcm, a);
    }
    return lcm;
}

function getGCD(a, b) {
    const remain = a % b;
    if (remain === 0) return b;
    return getGCD(b, remain);
}

function getLCM(a, b) {
    return a*b/getGCD(a,b);
}