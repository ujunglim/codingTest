function solution(n, m) {
    const gcd = getGCD(n, m);
    return [gcd, n * m / gcd];
}

function getGCD(a, b) {
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    while(b > 0) {
        const smaller = b;
        b = a%b;
        a = smaller;
    }
    return a;
}

function getLCM(a, b) {
    
}