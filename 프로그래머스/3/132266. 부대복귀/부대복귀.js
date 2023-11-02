function solution(n, roads, sources, destination) {
    var answer = [];
    const dist = Array.from({length: n+1}, () => Infinity);
    dist[destination] = 0;
    const queue = [];
    queue.push(destination);
    
    // roads를 object로 변환하기 (시작하는 포인트와 상관없이 순회하기 위해
    const objRoads = {}; // {from : new Set(to1, to2..)}
    roads.forEach(road => {
        const [from, to] = road;
        if (!objRoads[from]) {
            objRoads[from] = new Set([to]);
        } else {
            objRoads[from].add(to);
        }
        // 반대의 경우
        if (!objRoads[to]) {
            objRoads[to] = new Set([from]);
        } else {
            objRoads[to].add(from);
        }
    })
    
    while(queue.length) {
        const curr = queue.shift(); // 현재노드
        const neighbors = objRoads[curr]; // 현재노드와 연결된 노드들
        
        for (const neighbor of Array.from(neighbors)) {
            const acc = dist[curr] + 1;
            if (acc < dist[neighbor]) {
                dist[neighbor] = acc;
                queue.push(neighbor);
            }
        }
    }
    return sources.map(source => {
        if(dist[source] === Infinity) {
            return -1;
        }
        return dist[source]
    });
}



// visitised???