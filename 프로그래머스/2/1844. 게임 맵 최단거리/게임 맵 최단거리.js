// 빨리 도착 bfs, 도착할 수 없음 -1
function solution(maps) {
    var answer = Infinity;
    const rLen = maps.length;
    const cLen = maps[0].length;
    const dr = [-1, 0, 1, 0];
    const dc = [0, 1, 0, -1];
    maps[0][0] = 0;
    const queue = [{r: 0, c: 0, step: 1}];
    
    while(queue.length) {
        const {r, c, step} = queue.shift();
        if (r === rLen-1 && c === cLen-1) {
            return step; // 가장 먼저 도착하는 경우 출력
        }
        
        for (let i = 0; i < 4; i++) {
            const nextR = r + dr[i];
            const nextC = c + dc[i];
            if (nextR >= 0 && nextR < rLen && nextC >= 0 && nextC < cLen && maps[nextR][nextC] === 1) {
                maps[nextR][nextC] = 0;
                queue.push({r: nextR, c: nextC, step: step+1})
            }
        }
    }
    return -1;
}