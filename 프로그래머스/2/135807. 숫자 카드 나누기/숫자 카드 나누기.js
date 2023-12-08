// 철수의 공약수 && 영희는 못 나눔
// 영희의 공약수 && 철수는 못 나눔
// 철수를 전부 나눌 수 있는 공약수의 최대값은 철수의 최솟값보다 작거나 같아야한다 (나눠야하니까)

function solution(arrayA, arrayB) {
    var answer = 0;
    arrayA.sort((a, b) => a-b);
    arrayB.sort((a, b) => a-b);
    return Math.max(findA(arrayA, arrayB), findA(arrayB, arrayA));
}

function findA(canDivide, cantDivide) {
    const maxGCD = canDivide[0];
    for (let i = maxGCD; i > 1; --i) {
        if (canDivide.every(d => d % i === 0) && cantDivide.every(d => d % i !== 0)) {
            return i;
        }
    }
    return 0;
}