function solution(N, road, K) {
    var answer = 0;
    const dist = Array.from({length: N+1}, () => Infinity);
    // const visited = Array.from({length: N+1}, () => false);
    // 마을 1번은 이미 방문했고 1에서 1까지 거리는 0이다
    dist[1] = 0;
    // visited[1] = true;
    const queue = [{to: 1, dist: 0}];
    
    // graph정리
    const graph = Array.from({length: N+1}, () => [])
    for (const [from, to, dist] of road) {
        graph[from].push({to, dist});
        graph[to].push({to: from, dist}); // 양방향
    }
    
    while(queue.length) {
        const {to} = queue.shift(); 
        graph[to].forEach(next => {
            const acc = dist[to] + next.dist;
            if (dist[next.to] > acc) {
                dist[next.to] = acc; // 최단거리 갱신
                queue.push(next)// 방문하기
            }
        })
    }
    return dist.filter(d => d <= K).length;
}

