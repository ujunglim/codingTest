// 세로*가로 n*m, x,y에서 r,c로 이동
// 격자바깥나갈 수 없음
// 이동거리 총 k, (x,y)(r,c)포함 재방문가능
// 미로 탈출 경로 중 사전순으로 가장 빠른 경로를 구해라
// 좌측상단이 0,0 .는 빈 공간, s출발, e탈출

function solution(n, m, x, y, r, c, k) {
    var answer = '';
    const dir = {0: 'd', 1: 'l', 2: 'r', 3: 'u'};
    const result = [];
    const dx = [1,0,0,-1];
    const dy = [0,-1,1,0];
    const board = Array.from({length: n}, () => Array.from({length: m}, () => '.'));
    board[x-1][y-1] = 'S';
    board[r-1][c-1] = 'E';
    
    const getMHdist = (a,b,c,d) => {
        return Math.abs(a-c) + Math.abs(b-d);
    }
    const fastAnswer = k-getMHdist(x,y,r,c);
    if (fastAnswer < 0 || fastAnswer % 2 !== 0) return 'impossible';
    
    dfs(x-1, y-1, '');
    return result[0];
    
    function dfs(currR, currC, route) {
        if (result.length > 0) return;
        if (route.length > k) return;
        
        if (getMHdist(currR, currC, r-1, c-1) + route.length > k) {
            return;
        }
        
        if (route.length === k && currR === r-1 && currC === c-1) {
            result.push(route);
            return;
        }
        
        for (let i = 0; i < 4; i++) {
            let nextR = currR  + dx[i];
            let nextC = currC + dy[i];
            if (nextR >= 0 && nextR < n && nextC >= 0 && nextC < m) {
                dfs(nextR, nextC, route + dir[i]);
            }
        }
    }
    
    return answer;
}