// 나가고 들어가고 큐
// 길이 주어짐 큐 만듦
function solution(bridge_length, weight, truck_weights) {
    // 초기화
    const bridge = Array.from({length: bridge_length}, () => 0);
    const firstEnterW = truck_weights.shift();
    bridge.shift();
    bridge.push(firstEnterW);
    let sumW = firstEnterW; // 다리 위 총 무게
    var answer = 1;
    
    // 다리 위에 차가 있거나 아직 못 통과한 트럭이 있는 경우
    while(sumW > 0 || truck_weights.length) {
        // console.log(bridge)
        answer++; // 시간추가
        
        // 맨 앞 트럭 다리 통과
        sumW -= bridge.shift();
        
        // 다음 트럭 더 올릴 수 있는 경우
        const nextW = truck_weights[0];
        if (sumW + nextW <= weight) {
            sumW += nextW;
            truck_weights.shift();
            bridge.push(nextW);
        } else {
            // 다음 트럭 못 올리는 경우
            bridge.push(0);
        }
    }
    
    return answer;
}