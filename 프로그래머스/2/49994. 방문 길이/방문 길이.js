
function isInside(x, y) {
    return x >= -5 && x <= 5 && y >= -5 && y <= 5;
}

function solution(dirs) {
    var answer = 0;
    let currX = 0;
    let currY = 0;
    const d = {
        U: [0, 1],
        D: [0, -1],
        R: [1, 0],
        L: [-1, 0],
    }
    const isVisited = new Set();
    
    for (const dir of dirs) {
        const [dx, dy] = d[dir];
        
        const nextX = currX + dx;
        const nextY = currY + dy;
        if (!isInside(nextX, nextY)) {
            continue;
        }
        const key = "" + currX + currY + nextX + nextY;
        const currKey = '' + currX + currY;
        const nextKey = '' + nextX + nextY;
        if (!isVisited.has(currKey+nextKey) && !isVisited.has(nextKey+currKey)) {
            answer++;
            isVisited.add(currKey+nextKey);
            isVisited.add(nextKey+currKey);
        }
        currX = nextX;
        currY = nextY;
    }
    return answer;
}