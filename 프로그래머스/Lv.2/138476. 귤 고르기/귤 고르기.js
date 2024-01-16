// k개 귤을 한 상자에
// 다른 종류 최소값

// obj로 갯수 정리
// k개 가 될때까지 종류추가
function solution(k, tangerine) {
    var answer = 0;
    const obj = {};
    tangerine.forEach(t => {
        obj[t] = (obj[t] || 0) + 1;
    })
    const arr = [];
    for (const [key, value] of Object.entries(obj)) {
        arr.push([Number(key), value]);
    }
    arr.sort((a, b) => b[1] - a[1]);
    let totalCount = 0;
    while(totalCount < k && arr.length) {
        const [type, count] = arr.shift();
        totalCount += count;
        answer++;
    }
    return answer;
}