// 10개씩 나눈 뒤 매칭되나 확인
function solution(want, number, discount) {
    var answer = 0;
    const obj = {};
    for (let i = 0 ;i < want.length; i++) {
        obj[want[i]] = number[i];
    }
    
    function isMatch (arr) {
        const hash = {};
        arr.forEach(a => {
            hash[a] = (hash[a] || 0) + 1;
        })
        // console.log(hash)
        for (const [key, value] of Object.entries(hash)) {
            if (!obj[key] || hash[key] !== obj[key]) {
                return false;
            }
        }
        return true;
    }    
    
    for (let i = 0; i <= discount.length-10; i++) {
        const selection = discount.slice(i, i+10);
        if (isMatch(selection)) {
            answer++;
        }
    }
    return answer;
}