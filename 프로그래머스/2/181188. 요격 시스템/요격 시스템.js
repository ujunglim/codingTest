// (s, e)만 가능하다. s,e는 포함하지 않는다
// s, e사이 실수 가능
// 최소
// 가장 많이 겹치는 부분을 찾아야함
// sort하고 겹치는 부분을 찾는다 a[1] > b[0]
// 현재까지 겹치는구간의 마지막과 그 다음구간의 시작만 비교하면 된다 
// prevEnd > currStart이면 겹친구간을 찾고 prevEnd를 갱신한다.
function solution(targets) {
    var answer = 0;
    targets.sort((a, b) => a[1]-b[1]);
    let prevEnd = targets[0][1];
    
    for(let i = 1; i < targets.length; i++) {
        const [currStart, currEnd] = targets[i];
        // 겹침
        if (prevEnd > currStart) {
            prevEnd = Math.min(prevEnd, currEnd);
        } else {
            answer++;
            prevEnd = currEnd;
        }
    }
    return answer+1; // 마지막
}