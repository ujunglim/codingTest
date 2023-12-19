function solution(k, ranges) {
    var answer = [];
    const arr = [[0, k]]
    let count = 1;
    
    while(k > 1) {
        if (k % 2 === 0) {
            k /= 2;
        } else {
            k = k*3+1;
        }
        arr.push([count, k]);
        count++;
    }
    
    // 각 구역마다 넓이 구하기
    const areas = [];
    for (let i = 0; i < arr.length-1; ++i) {
        const leftLine = arr[i][1];
        const rightLine = arr[i+1][1];
        areas.push((leftLine + rightLine) / 2);
    }
    const len = areas.length;
    for (const [startI, endI] of ranges) {
        const endIndex = len + endI;
        if (startI > endIndex) {
            answer.push(-1);
            continue;
        }
        const slice = areas.slice(startI, endIndex);
        const sum = slice.reduce((acc, curr) => acc + curr, 0);
        answer.push(sum);
    }
    return answer;
}