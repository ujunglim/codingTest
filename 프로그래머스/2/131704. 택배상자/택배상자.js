// 1번부터 n번까지 증가하는 순으로 벨트에 놓여있다.
// 1번부터 순서대로 상자를 내릴 수 있다.
// 현재 실을 순서가 아니면 보조컨테이너에 보관 => 보조컨테이너는 마지막에 보관한 상자부터 꺼내게 된다 stack
// 보조를 사용해도 순서대로 싣지 못하면 더이상 상자를 싣지 않는다
// 실을 수 있는 상자 갯수 리턴

// 기존의 상자 순서대로 진행할 때의 다음상자와, 보조컨테이너의 마지막에 들어있는 상자를 체크
// O(nlogn)
// 
function solution(order) {
    var answer = 0;
    const stack = [];
    const len = order.length;
    let index = 0;
    // let currOrder = order.shift();
    let currOrder = order[index];
    // 기존 컨테이너벨트 순회
    for (let i = 1; i <= len; i++) {
        // 실을 순서인 경우
        if (i === currOrder) {
            answer++;
            currOrder = order[++index]; // 다음 실을 순서
        }
        // 실을 순서가 아닌 경우
        else {
            // 보조가 실을 순서라면
            if (stack.length && stack[stack.length-1] === currOrder) {
                answer++;
                stack.pop();
                currOrder = order[++index];
                // currOrder = order.shift();
                i--;
            } else {
                // 보조에 실는다
                stack.push(i);
            }
           
        }
    }
    // 보조컨테이너 순회
    while(stack.length) {
        // 보조컨테이너의 상자를 실어야하는 경우
        if (stack[stack.length-1] === currOrder) {
            answer++;
            stack.pop();
            // currOrder = order.shift();
            currOrder = order[++index];
        } else {
            break;
        }
    }
    return answer;
}