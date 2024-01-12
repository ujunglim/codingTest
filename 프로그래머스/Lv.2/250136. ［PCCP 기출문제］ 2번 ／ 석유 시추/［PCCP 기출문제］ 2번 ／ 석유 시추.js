// 1번 뽑아서 배열에 정리
// 계속 더함
function solution(land) {
    const rowLen = land.length;
    const colLen = land[0].length;
    var answer = Array.from({length: land[0].length}, () => 0);
    
    for (let c = 0; c < colLen; ++c) {
        for (let r = 0; r < rowLen; ++r) {
            // 석유를 찾음
            if (land[r][c] === 1) {
                land[r][c] = 0;
                const {sum, connectedCols} = suckAll(r, c);
                // 연결된 곳들 석유추가
                for (const col of connectedCols) {
                    answer[col] += sum;
                }
            }
        }
    }
    
    function suckAll(r,c) {
        let sum = 1;
        const connectedCols = new Set();
        connectedCols.add(c);
        const queue = [{r,c}];
        const dr = [-1, 0, 1, 0];
        const dc = [0, 1, 0, -1];
        
        while(queue.length) {
            const {r, c} = queue.shift();
            for (let i = 0; i < 4; i++) {
                const nextR = r + dr[i];
                const nextC = c + dc[i];
                // 주변 석유를 찾음
                if (nextR >= 0 && nextR < rowLen && nextC >= 0 && nextC < colLen && land[nextR][nextC] === 1) {
                    sum++;
                    connectedCols.add(nextC);
                    land[nextR][nextC] = 0; // 방문표시
                    queue.push({r: nextR, c: nextC});
                }
            }
        }
        return {sum, connectedCols: [...connectedCols]};
    }
    console.log(answer)
    return Math.max(...answer)
}