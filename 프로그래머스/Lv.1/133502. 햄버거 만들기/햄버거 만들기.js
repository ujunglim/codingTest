// 스택, 투포인터
// 1이 들어왔을때 4개 이상이면 스택 마지막 4개 확인
// 버거이면 answer++, 4개 뺀다
function solution(ingredient) {
    var answer = 0;
    const stack = [];
    
    for (const i of ingredient) {
        stack.push(i);
        if (i === 1 && stack.length >= 4) {
            if (checkIsBurger()) {
                answer++;
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
            }
        }
    }
    
    function checkIsBurger() {
        const lastFour = stack.slice(-4);
        return lastFour.join('') === '1231';
    }
    return answer;
}