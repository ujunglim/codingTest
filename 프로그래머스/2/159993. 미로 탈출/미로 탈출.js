// 먼저 레버를 당긴 후 출구로 나간다
// 미로를 빠져나가는데 필요한 최소시간
// 최소 => bfs
// 입구 찾는다
// 입구에서 레버까지 최소시간 구한다.
// 4방향 탐색 갈 수 있는 길을 queue에 넣는다
// 레버를 찾은 후 레버에서 출구로 최소시간을 구한다
// 반복방지: 방금 왔다간 길은 다시 가지 않는다.
function solution(maps) {
    var answer = 0;
    let start, lever;
    const dr = [-1, 0, 1, 0];
    const dc = [0, 1, 0, -1];
    const rowLen = maps.length;
    const colLen = maps[0].length;
    
    // 시작, 레버위치 찾기
    for (let r = 0; r < maps.length; ++r) {
        for (let c = 0; c < maps[0].length; ++c) {
            if (maps[r][c] === 'S') start = {r, c};
            if (maps[r][c] === 'L') lever = {r, c};
        }
    }
    // 시작점에서 타겟까지 이동하는 최소시간 구하는 함수
    function getMinTime(start, target) {
        const queue = [{r: start.r, c: start.c, time: 0}];
        const visited = Array.from({length: rowLen}, () => Array.from({length: colLen}, () => false)); 
        visited[start.r][start.c] = true;
        
        while(queue.length) {
            // console.log(queue)
            const curr = queue.shift();
            // 목표물 찾으면 시간 리턴
            if (maps[curr.r][curr.c] === target) {
                return curr.time;
            }
            // 다음위치 탐색
            for (let i = 0; i < 4; i++) {
                const nextR = curr.r + dr[i];
                const nextC = curr.c + dc[i];
                // 배열 외부
                if (nextR < 0 || nextR >= rowLen || nextC < 0 || nextC >= colLen) continue;
                if (maps[nextR][nextC] === 'X' || visited[nextR][nextC]) continue;
                visited[nextR][nextC] = true; // 방문표시
                queue.push({r: nextR, c: nextC, time: curr.time + 1});
            }
            
        }
    }
    const timeToLever = getMinTime(start, 'L', maps); // 입구에서 레버까지 최소시간 
    const timeToExit = getMinTime(lever, 'E', maps); // 레버에서 출구까지 최소시간 
    
    console.log(timeToLever, timeToExit)
    return timeToLever && timeToExit ? timeToLever + timeToExit: -1;
}

