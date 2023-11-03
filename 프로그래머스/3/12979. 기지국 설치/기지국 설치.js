function solution(n, stations, w) {
    var answer = 0;
    let curr = 1;
    const rangeWidth = 2*w+1; // 전달범위길이는 w개 + 중심1개 + w개
    let affectedRange; // [영향을 받는 범위의 시작, 끝]
    
    for (const station of stations) {
    // console.log(station, curr)
        if (station === 1){
            affectedRange = [1, 1+w]; // 기지국이 첫 말단일 때 범위
        } else if (station === n) { 
            affectedRange = [n-w, n]; // 끝 말단일때의 범위
        } else {
            affectedRange = [Math.max(station-w, 1), Math.min(station+w, n)]; // 최소는 1, 최대는 n이다
        }
        const count = affectedRange[0] - curr; // 영향이 없는 구간 갯수
        answer += Math.ceil(count / rangeWidth); // 구간 안에 필요한 최소 기지국 갯수 추가
        curr = affectedRange[1]+1; // 다음 무영향 구간 
    }
    // station을 다 통과하고 남은 구간이 있을시에 
    if (curr <= n) {
        const count = n - curr+1; // +1
        answer += Math.ceil(count /rangeWidth);
        curr = n+1;
    } 
    return answer;
}

