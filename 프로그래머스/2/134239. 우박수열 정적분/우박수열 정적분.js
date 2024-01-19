// k자연수
// 짝수이면 /2
// 홀수이면 *3+1
// 결과가 1보다 크면 위 작업을 반복
// 정적분 = 공간면적
// n은 1이 될때까지의 횟수
// 시작점 > 끝점인 경우엔 -1
// 구간 [a, b]에서 b가 음수인경우는 k+b번째까지의 구간이라는 뜻 5+(-2) = 3

// k가 1이 될때까지 그래프를 정리하고 각 구간마다 정적분 정리
function solution(k, ranges) {
    var answer = [];
    const results = [k];
    let result = k;
    while(result > 1) {
        if (result % 2 === 0) {
            result /= 2;
        } else {
            result = result*3+1;
        }
        results.push(result);
    }
    // console.log(results)
    const areas = [];
    for (let i = 0; i < results.length-1; i++) {
        const area = (results[i] + results[i+1])/2;
        areas.push(area);
    }
    // console.log(areas)
    
    for (let [start, end] of ranges) {
        end  = areas.length + end;
        // 시작 > 끝인 경우엔 -1
        if (start > end){
            answer.push(-1);
            continue;
        };
        
        answer.push(areas.slice(start, end).reduce((acc, curr) => acc + curr, 0));
    }

    return answer;
}