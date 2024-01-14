// 행 튜플, 첫번째 칼럼은 중복하지 않음
// col오름차순, 동일하면 첫번째col내림차순으로 정렬
// s_i i번째 행의 튜플에 대해 각 칼럼의 값을 i로 나눈 나머지의 합
// bitwise XOR이란 다를 때 1을 반환하고, 같을 때는 0을 반환
function solution(data, col, row_begin, row_end) {
    var answer = 0;
    const colIndex = col-1;
    data.sort((a, b) => {
        if (a[colIndex] === b[colIndex]) return b[0] - a[0];
        return a[colIndex]-b[colIndex];
    })
    
    for (let row = row_begin; row <= row_end; row++) {
        const result = data[row-1].reduce((acc, curr) => acc + curr % row, 0);
        answer = answer ^ result;
    }
    return answer;
}