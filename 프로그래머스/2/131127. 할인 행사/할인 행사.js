// 할인 제품은 하루에 하나씩만 구매
// 모두 할인 받을 수 있는 날짜의 총 수를 리턴, 없음 0
// nlogn
// obj로 정리해서 모두 살수 있는지 확인
// 슬라이딩 윈도우
function solution(want, number, discount) {
    var answer = 0;
    const obj = {};
    want.forEach((w, i) => {
        obj[w] = number[i];
    })
    const window = {};
    for (let i = 0; i < 10; i++) {
        const curr = discount[i];
        window[curr] = (window[curr] || 0) + 1;  
    }
    if (canBuyAll()) answer++;
    for (let i = 1; i <= discount.length-10; i++) {
        const toDelete = discount[i-1];
        const toAdd = discount[i+9];
        
        if (window[toDelete] === 1) {
            delete window[toDelete];
        } else {
            window[toDelete]--;
        }
        window[toAdd] = (window[toAdd] || 0) + 1;
        
        if (canBuyAll()) answer++;
    }
    
    function canBuyAll() {
        for (const [key, value] of Object.entries(obj)) {
            if (window[key] && value <= window[key]) continue;
            else {
                return false;
            }
        }
        return true;
    }
    return answer;
}
    
