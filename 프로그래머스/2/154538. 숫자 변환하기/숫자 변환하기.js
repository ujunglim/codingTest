// 최소 bfs
function solution(x, y, n) {
    var answer = -1;
    const queue = [{num: y, count: 0}];
    
    while(queue.length) {
        const {num, count} = queue.shift();
        if (num === x) {
            answer = count;
            break;
        } 
        if (num%3 === 0) {
            queue.push({num: num/3, count: count+1});
        }
        if (num%2 === 0) {
            queue.push({num: num/2, count: count+1});
        }
        if (num-n >= x) {
            queue.push({num: num-n, count: count+1});
        }
    }
    return answer;
}