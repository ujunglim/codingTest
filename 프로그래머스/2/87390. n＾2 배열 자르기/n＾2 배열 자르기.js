function solution(n, left, right) {
    var answer = [];
    for (let index = left; index <= right; index++) {
        const divide = Math.floor(index/n);
        const remained = index % n;
        answer.push(Math.max(divide, remained) +1);
    }
    return answer;
}

// 행렬 둘 중 최대값 +1