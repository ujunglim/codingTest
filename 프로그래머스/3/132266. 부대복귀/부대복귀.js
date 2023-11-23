function solution(n, roads, sources, destination) {
    // 그래프생성
    const graph = {};
    roads.forEach(([to, from]) => {
        if (!(to in graph)) {
            graph[to] = [];
        }
        if (!(from in graph)) {
            graph[from] = [];
        }
        graph[to].push(from);
        graph[from].push(to);
    })
    // weightArr, queue 초기화
    const weightArr = Array.from({length: n+1}, () => Infinity);
    weightArr[destination] = 0;
    const queue = [];
    queue.push(destination);
    
    while(queue.length) {
        const curr = queue.shift();
        
        graph[curr].forEach((nextNode) => {
            const acc = weightArr[curr] + 1;
            if (weightArr[nextNode] > acc) {
                weightArr[nextNode] = acc;
                queue.push(nextNode);
            }
        })
    }
    return sources.map(source => weightArr[source] === Infinity ? -1 : weightArr[source])
}