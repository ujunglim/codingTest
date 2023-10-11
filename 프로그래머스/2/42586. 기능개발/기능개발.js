function solution(progresses, speeds) {
    var answer = [];
    const days = [];
    for (let i = 0; i < progresses.length; i++) {
        days.push(Math.ceil((100-progresses[i])/speeds[i])); // ceil
    }
    let queue = [];
    let prevMax = 0;
    for (const day of days) {
        if (!queue.length) {
            queue.push(day);
            prevMax = day;
            continue;
        }
        // 바로 전과 비교하는게 아니라 전까지 최대를 비교
        if (prevMax >= day) {
            queue.push(day);
        } else {
            prevMax = day;
            answer.push(queue.length);
            queue = [day]; // 
        }
    }
    return [...answer, queue.length]; // queue에 남은 것 넣어주기
}

