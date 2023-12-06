// 1000의 피보나치는 매우 큰 수, 순회하면 안 됌
// 규칙성

function solution(n) {
    var answer = Array.from({length: n}, (_, i) => Array.from({length: i+1}, () => null));
    let count = 1;
    const totalCount = n*(n+1) / 2;
    
    let row = 0;
    let col = 0;
    while(count <= totalCount) {
        // 세로 채우기
        while(row < n && !answer[row][col]) {
            answer[row++][col] = count++;
        }
        row--;
        col++;
        // 가로 채우기
        while(col < n && !answer[row][col]) {
            answer[row][col++] = count++;
        }
        row--;
        col -= 2;
        // 왼쪽 상단으로 이동하며 채우기
        while(row > 0 && col > 0 && !answer[row][col]) {
            answer[row--][col--] = count++;
        }
        row += 2;
        col++;
    }
    return answer.flat();
}