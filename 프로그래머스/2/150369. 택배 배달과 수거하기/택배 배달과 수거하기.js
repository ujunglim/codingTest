// n개 집, 최대 cap개 실을수 있다
// 최소이동거리를 구해라
// 이동은 창고에서 가장 먼 목표집까지
// 이동하는 길 중간에 다른 집을 방문해도 됨
// 제일 먼 곳부터 0으로 처리
// nlogn
// n이 첫번째 마지막 집이라고 생각했다
function solution(cap, n, deliveries, pickups) {
    var answer = 0;
    
    // 첫번째 배달/수거할 집 찾기
    while(deliveries[n-1] === 0 && pickups[n-1] === 0) {
        deliveries.pop();
        pickups.pop();
        n--;
    }
    // 모두 배달/수거 할때까지
    while(deliveries.length || pickups.length) {
        answer += Math.max(deliveries.length, pickups.length)*2;
        count('deliver');
        count('pickup');
    }
    
    function count(type) {
        const arr = type === 'deliver' ? deliveries : pickups;
        let count = cap;
        // cap만큼 배달을 한다
        while(arr.length && count) {
            // 아직 더 배달/수거 할 수 있다
            // 현재 집의 배달을 모두 할 수 있다
            if (arr[arr.length-1] <= count) {
                count -= arr[arr.length-1];
                arr.pop();
            } 
            // 현재 집의 배달을 모두 할 수는 없다. cap만큼 배달/수거 완료한다
            else {
                arr[arr.length-1] -= count;
                count = 0;
            }
        }
        while(arr[arr.length-1] === 0) {
            arr.pop();
        }
    }
    return answer;
}

