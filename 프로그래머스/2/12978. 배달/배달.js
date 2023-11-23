function solution(N, road, K) {
    // 그래프생성
    const graph = {};
    road.forEach(r => {
        const [from, to, weight] = r;
        if (!(from in graph)) {
            graph[from] = [];
        }
        if (!(to in graph)) {
            graph[to] = [];
        }
        graph[from].push({nextNode: to, nextWeight: weight});
        graph[to].push({nextNode: from, nextWeight: weight});
    })
    const weightArr = Array.from({length: N+1}, () => Infinity);
    const queue = [];
    queue.push({currNode: 1, currWeight: 0});
    weightArr[1] = 0;
    
    while(queue.length) {
        const {currNode, currWeight} = queue.shift();
        graph[currNode].forEach(({nextNode, nextWeight}) => {
            const acc = currWeight + nextWeight;
            if (acc < weightArr[nextNode]) {
                weightArr[nextNode] = Math.min(weightArr[nextNode], acc);
                queue.push({currNode: nextNode, currWeight: acc})
            }
        })
    }
    return weightArr.filter(weight => weight <= K).length;
}