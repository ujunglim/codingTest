// 세로 열마다 찾는데 석유가 있으면 주변을 탐색
// 하나의 항마다 가능한 석유 뽑고 각 항의 합
function solution(land) {
    var answer = 0;
    const dR = [-1, 0, 1, 0];
    const dC = [0, 1, 0, -1];
    const rLen = land.length;
    const cLen = land[0].length;
    const memoryObj = {};
    
    for (let c = 0; c < cLen; ++c) {
        const queue = [];
        
        for (let r = 0; r < rLen; ++r) {
            // 석유 찾음
            if (land[r][c] === 1) {
                let sum_by_col = 0;
                sum_by_col++;
                land[r][c] = 0;
                queue.push({r, c}); // bfs로 주변의 석유 다 뽑기
                let connectedCols = new Set();
                connectedCols.add(c);
                
                while(queue.length) {
                    const {r, c} = queue.shift();
                    for (let i = 0; i < 4; ++i) {
                        const nextR = r + dR[i];
                        const nextC = c + dC[i];
                        
                        if (nextR >= 0 && nextR < rLen 
                            && nextC >= 0 && nextC < cLen 
                            && land[nextR][nextC] === 1
                           ) {
                            if (!connectedCols.has(nextC)) {
                                connectedCols.add(nextC);
                            }
                            sum_by_col++;
                            land[nextR][nextC] = 0;
                            queue.push({r: nextR, c: nextC});
                        }
                    }
                }
                for (const c of connectedCols) {
                    memoryObj[c] = (memoryObj[c] || 0) + sum_by_col;
                }  
                connectedCols = new Set();
            }
        }
    }
    const values = Array.from(Object.values(memoryObj));
    return Math.max(...values);
}

// visited => land
