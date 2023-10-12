function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let passing = [];
    let sum = 0; // 다리 위에 있는 차 무게의 합
    
    // 대기 트럭이 있던가 지나가고 있는 트럭이 있는 동안
    while(truck_weights.length || passing.length) {
        answer++; // 먼저 시간이 흐르고
        
        // 다리위의 트럭을 한칸씩 이동
        if (passing.length) {
            passing = passing.map(([w, i]) => [w, i+1]);
        }
        
        // 다리를 지나친 트럭이 있으면 빼준다
        if (passing.length && passing[0][1] > bridge_length) {
            const [w, location] = passing.shift();
            sum -= w;
        }
        
        // 다음 차가 올라올 수 있음 올라온다
        if (sum + truck_weights[0] <= weight) {
            const next = truck_weights.shift();
            sum += next;
            passing.push([next, 1]);
        }
    }
    return answer;
}