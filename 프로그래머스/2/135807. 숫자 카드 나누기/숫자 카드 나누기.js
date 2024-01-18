// 조건중 하나를 만족하는 가장 큰 양의 정수리턴
// 조건1: 철수의 숫자를 모두 나눌 수 있고, 영희의 수를 하나도 나눌 수 없는 수
// 조건2: 조건1반대
function solution(arrayA, arrayB) {
    arrayA.sort((a, b) => a-b);
    arrayB.sort((a, b) => a-b);
    
    return Math.max(findA(arrayA, arrayB), findA(arrayB, arrayA));
}

function findA(canDivide, cantDivide) {
    // 나눌 수 있는 그룹의 최대공약수구하기
    let gcd = canDivide[0];
    for (let i = 0; i < canDivide.length; i++) {
        gcd = getGCD(canDivide[i], gcd);
    }
    if (gcd === 1) return 0;
    // 공약수가 1이거나 cantDivide를 나눌 수 있으면 O리턴
    for (const e of cantDivide) {
        if (e % gcd === 0) {
            console.log(e % gcd)
            return 0;
        }
    }
    return gcd;
}

function getGCD(a, b) {
    const remainder = a % b;
    if (remainder === 0) return b;
    return getGCD(b, remainder);
}