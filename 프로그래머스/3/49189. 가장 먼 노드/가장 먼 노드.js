function solution(n, edge) {
    const graph = {};
    edge.forEach(([from, to]) => {
        if (!(from in graph)) graph[from] = [];
        if (!(to in graph)) graph[to] = [];
        graph[from].push(to);
        graph[to].push(from);
    })
    const queue = [1];
    const weightArr = Array.from({length: n+1}, () => Infinity);
    weightArr[1] = 0;
    
    while(queue.length) {
        const curr = queue.shift();
        graph[curr].forEach(nextNode => {
            const acc = weightArr[curr]+1;
            if (weightArr[nextNode] > acc) {
                weightArr[nextNode] = acc;
                queue.push(nextNode);
            }
        })
    }
    const max = weightArr.sort((a, b) => b - a)[1];
    return weightArr.filter(weight => weight === max).length;
}