// 토핑은 일렬로 올려져있다
// 동일한 토핑종류의 갯수를 갖게 나누는 방법 수

// 둘로 나눔
// topping 길이 1,000,000 => O( nlogn )
// slice의 시간복잡도는 O(n) => 매번 잘라서 형과 동생의 토핑갯수를 구할 수 없다

// 반으로 나누는게 아니라 토핑의 갯수를 비교하는거임
// delete obj

function solution(topping) {
    var answer = 0;
    const old = {};
    const young = {};
    topping.forEach(t => {
        old[t] = (old[t] || 0) + 1;
    })
    let oldCount = Object.keys(old).length;
    let youngCount = 0;
    
    for (const curr of topping) {
        // 동생은 없는 토핑
        if (!young[curr]) {
            youngCount++;
            young[curr] = 1;
        } else {
            young[curr]++; // 동생이 있는 토핑
        }
        // 형이 하나 밖에 없는 토핑이면
        if (old[curr] === 1) {
            delete old[curr];
            oldCount--;
        } else {
            old[curr]--;
        }
        // 동생과 형의 토핑갯수가 같을시
        if (oldCount === youngCount) {
            answer++;
        }
    }
    return answer;
}