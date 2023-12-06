// 1,000,000니까 순회를 최대한 줄여야한다.
function solution(topping) {
    var answer = 0;
    const left = {};
    const right = {};
    let leftCount = new Set(topping).size;
    let rightCount = 0;
    
    // left에 모든 토핑을 준다
    topping.forEach(top => {
        if (!left[top]) {
            left[top] = 1;
        } else {
            left[top] += 1;
        }
    })
    
    // topping을 순회하며 하나씩 right한테 준다, 이때 이 둘의 토핑갯수를 비교한다.
    topping.forEach(top => {
        if (!right[top]) {
            right[top] = 1;
            rightCount++;
        } else {
            right[top] += 1;
        }
        if (left[top] === 1) {
            leftCount--;
        }
        left[top] -= 1;
        if (leftCount === rightCount) answer++;
    })
    return answer;
}