// x: 바다, 숫자: 무인도안의 식량
// 각 무인도당 식량 오름차순 배열
// 무인도가 없으면 -1
function solution(maps) {
    var answer = [];
    const rowLen = maps.length;
    const colLen = maps[0].length;
    const visited = Array.from({length: rowLen}, () => Array.from({length: colLen}, () => false));
    
    for (let r = 0; r < rowLen; ++r) {
        for (let c = 0; c < colLen; ++c) {
            // 방문한 적없는 섬을 발견함
            if (maps[r][c] !== 'X' && !visited[r][c]) {
                visited[r][c] = true;
                answer.push(getFood(r, c));
            }
        }
    }
    
    function getFood(r, c) {
        let totalFood = 0;
        const queue = [{r, c}];
        const dr = [-1, 0, 1, 0];
        const dc = [0, 1, 0, -1];
        while(queue.length) {
            const {r, c} = queue.shift();
            totalFood += Number(maps[r][c]);
            for (let i = 0; i < 4; ++i) {
                const nextR = r + dr[i];
                const nextC = c + dc[i];
                
                if (nextR >= 0  && nextR < rowLen && nextC >= 0 && nextC < colLen 
                    && maps[nextR][nextC] !== 'X'
                    && !visited[nextR][nextC]) {
                    visited[nextR][nextC] = true;
                    queue.push({r: nextR, c: nextC});
                }
            }
        }
        return totalFood;
    }
    
    return answer.length ? answer.sort((a, b) => a-b) : [-1];
}