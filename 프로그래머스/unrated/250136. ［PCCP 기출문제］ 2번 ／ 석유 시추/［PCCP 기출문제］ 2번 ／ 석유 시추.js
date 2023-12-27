function solution(land) {
    const dR = [-1, 0, 1, 0];
    const dC = [0, 1, 0, -1];
    const rLen = land.length;
    const cLen = land[0].length;
    const oilByCol = {}; //{열: 뽑을 수 있는 석유량}
    
    for (let c = 0; c < cLen; ++c) {
        const queue = [];
        
        // 한 열에서 row를 순회하며 석유 찾기
        for (let r = 0; r < rLen; ++r) {
            // 석유를 찾음. 연결된 총 석유량 구해서 oilByCol에 더하기
            if (land[r][c] === 1) {
                land[r][c] = 0; // 이미 뽑은 석유로 변경
                let sum = 1; // 석유량 초기화
                let connectedCols = new Set(); // 현재위치와 연결된 열의 set
                connectedCols.add(c);
                queue.push({r, c});
                
                // 현재위치와 연결된 열과 총 석유량 구하기
                while(queue.length) {
                    const {r, c} = queue.shift();
                    for (let i = 0; i < 4; ++i) {
                        const nextR = r + dR[i];
                        const nextC = c + dC[i];
                        
                        if (nextR >= 0 && nextR < rLen 
                            && nextC >= 0 && nextC < cLen 
                            && land[nextR][nextC] === 1
                           ) {
                            // 주변에 석유가 있고 새로운 열이면 연결된 열set에 추가
                            if (!connectedCols.has(nextC)) connectedCols.add(nextC);
                            sum++;
                            land[nextR][nextC] = 0;
                            queue.push({r: nextR, c: nextC}); // 주변열의 다음 주변을 확인한다.
                        }
                    }
                }
                // oilByCol의 연결된 열에 현재 석유그룹의 총 석유량 더하기
                for (const c of connectedCols) {
                    oilByCol[c] = (oilByCol[c] || 0) + sum;
                }  
            }
        }
    }
    const values = Array.from(Object.values(oilByCol));
    return Math.max(...values);
}