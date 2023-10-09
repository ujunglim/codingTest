function solution(n, times) {
    var answer = 0;
    let minTime = 0;
    let maxTime = Math.max(...times) * n;
    
    while(minTime <= maxTime) {
        let finishedCount = 0; // 심사완료한 사람수
        let midTime = Math.floor((minTime + maxTime) / 2);
        // 시간안에 심사완료할 수 있는 사람수 
        for (const time of times) {
            finishedCount += Math.floor(midTime / time);
        }
        // 딱 맞춰서 완료했어도 좌우로 움직일 수 있다
        // if (n === finishedCount) {
        //     return midTime;
        // }
        
        // 최소값을 구해야하니까 minTime을 리턴하게
        // 시간이 부족한 경우에만 시간을 늘린다.
        if (n > finishedCount) {
            minTime = midTime+1;
        } 
        // n보다 "같거나" 큰 경우 시간을 줄인다 (같은경우를 시간을 줄이는 곳에 배치)
        else {
            maxTime = midTime -1;
        }
    }
    return minTime;
}