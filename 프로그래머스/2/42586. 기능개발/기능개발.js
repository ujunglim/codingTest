function solution(progresses, speeds) {
    var answer = [];
    const needArr = progresses.map((p, i) => Math.ceil((100-p) / speeds[i]));
    const queue = [];
    
    for (const need of needArr) {
        if (!queue.length) {
            queue.push(need);
            answer.push(1)
            continue;
        }
        // 전보다 시간이 더 많이 걸릴 경우
        if (queue[queue.length-1] < need) {
            queue.push(need);
            answer.push(1);
        } else {
            answer[answer.length-1] += 1;
        }
    }
    
    return answer;
}