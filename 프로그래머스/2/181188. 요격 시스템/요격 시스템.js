// (s, e)만 가능하다. s,e는 포함하지 않는다
// s, e사이 실수 가능
// 최소
// 가장 많이 겹치는 부분을 찾아야함
// sort하고 겹치는 부분을 찾는다 a[1] > b[0]
function solution(targets) {
    var answer = 0;
    targets.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        return a[0]-b[0];
    })
    let prevRange = targets[0];
    
    for(let i = 1; i < targets.length; i++) {
        const currRange = targets[i];
        // 겹침
        if (prevRange[1] > currRange[0]) {
            prevRange = [currRange[0], prevRange[1] > currRange[1] ? currRange[1] : prevRange[1]];
        } else {
            answer++;
            prevRange = currRange;
        }
    }
    return answer+1; // 마지막
}