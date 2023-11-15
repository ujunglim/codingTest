function solution(lines) {
    var answer = -Infinity;
    const timeline = [];
    let count = 0;
    
    for (const line of lines) {
        const [date, end, cost] = line.split(' ');
        const [hour, minute, second] = end.split(':');
        const timeToSecond = (Number(hour)*3600 + Number(minute)*60 + Number(second)) * 1000;
        const costTime = Number(cost.substring(0, cost.length-1))*1000;
        const startTime = timeToSecond - costTime + 1;
        const endTime = timeToSecond + 999; //////////////// 왜 999를 더해???
        
        timeline.push(["start", startTime]);
        timeline.push(["end", endTime]);
    }
    // sort
    timeline.sort((a, b) => {
        if (a[1] === b[1]) return -1; //a-b는 왜 안 돼????
        return a[1] - b[1];
    })
    // console.log(timeline)
    for (const time of timeline) {
        if (time[0] === 'start') {
            count++;
        } else if (time [0] === 'end') {
            count--;
        }
        answer = Math.max(answer, count);
    }
    return answer;
}

// 문자열
// 밀리세컨즈로 통일
