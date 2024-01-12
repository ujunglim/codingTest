// 초당 최대 처리량: 1초당 처리하는 요청 최대 갯수
// 응답완료시간 S와 처리시간 T가 공백
// 완료시간 - 처리시간 + 0.001s
// 초당최대처리량 리턴

// 4.002-2+0.001 = 2.003시작 4.002끝
// 7.000-2+0.001 = 5.001시작 7.000끝
//=> 4.002에서 5.002사이 1초이하이므로 2개

// 시간 ms로 변경, 끝나는 시각 정리
// 시작시각 오름차순

function solution(lines) {
    let count = 0;
    let answer = 0;
    const timeline = [];
    for (const line of lines) {
        const [date, endTime, duration] = line.split(' ');
        const endTimeMs = convertToMS(endTime);
        const durationMS = Number(duration.split('s')[0]) *1000;
        const startTime = endTimeMs - durationMS + 1;
        
        timeline.push(['start', startTime]);
        timeline.push(['end', endTimeMs+ 999]);
        
        timeline.sort((a, b) => {
            if (a[1] === b[1]) {
                return -1;
            }
            return a[1] - b[1];
        })
        
        for (const time of timeline) {
            if (time[0] === 'start') {
                count++;
            } else {
                count--;
            }
            answer = Math.max(answer, count);
        }
    }
    return answer;
}

function convertToMS(time) {
    const [h, m, s] = time.split(':');
    return (Number(h)*3600 + Number(m)*60 + Number(s))*1000;
}