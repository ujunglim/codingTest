// 범위안
const rangeA = [
    [0,1],
    [1,0],
    [0,-1],
    [-1,0],
]
const rangeB = [
    [1,1],
    [1,-1],
    [-1, 1],
    [-1, -1],
]
const rangeC = [
    [0,2],
    [2,0],
    [0, -2],
    [-2, 0]
]

function isInsideMap(r, c) {
    return r >= 0 && r < 5 && c >= 0 && c < 5;
}

// 거리두기 지키는지 확인하는 함수
function isValid(currRow, currCol, map) {
    // 가장 최측근
    for (const [moveR, moveC] of rangeA) {
        const nextR = currRow + moveR;
        const nextC = currCol + moveC;
        if(!isInsideMap(nextR, nextC)) continue; // 5x5를 벗어나면 패쓰
        // 가장 최측근인데 P가 있으면 탈락
        if (map[nextR][nextC] === 'P') return false;
    }
    // 대각선
    for (const [moveR, moveC] of rangeB) {
        const nextR = currRow + moveR;
        const nextC = currCol + moveC;
        if(!isInsideMap(nextR, nextC)) continue; // 5x5를 벗어나면 패쓰
        
        // 대각선에 P가 있음
        if (map[nextR][nextC] === 'P') {
            const first = moveR > 0 ? -1 : 1;
            const second = moveC > 0 ? -1 : 1; 
            // 양옆에 X가 없음 탈락
            if (!(map[nextR + first][nextC] === 'X' && map[nextR][nextC+second])) {
                return false;
            }
        }
    }
    
    // 가장 끝
     for (const [moveR, moveC] of rangeC) {
        const nextR = currRow + moveR;
        const nextC = currCol + moveC;
        if(!isInsideMap(nextR, nextC)) continue; // 5x5를 벗어나면 패쓰
        const midR = (currRow + nextR)/2;
        const midC = (currCol + nextC)/2;
        // 끝이 P인데 끝과 중심 사이에 X가 없음 탈락
        if (map[nextR][nextC] === 'P' && map[midR][midC] !== 'X') return false;
    }
    
    return true;
}

function solution(places) {
    var answer = [];
    for (let i = 0; i < 5; i++) {
        const currPlace = places[i]; // 5x5
        const map = []; 
        currPlace.forEach(row => map.push(row.split(''))); // 5x5 arr형태로 변환
        let isWrong = false;
        
        for (let r = 0; r < 5; r++) {
            for (let c = 0; c < 5; c++) {
                // P의 주변 거리두기를 안 지켰다
                
                if (map[r][c] === 'P' && !isValid(r, c, map)) {
                    isWrong = true;
                    break;
                }
            }
            if(isWrong) break;
        }
        answer.push(isWrong ? 0 : 1)
    }
    return answer;
}