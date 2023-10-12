function isValid(arr) {
    const stack = [];
    const hash = {
        '[': ']',
        '(': ')',
        '{': '}'
    }
    const canPush = ['[', '(', '{'];
    
    for (const a of arr) {
        if (!stack.length || canPush.includes(a)) {
            stack.push(a);
            continue;
        }
        const previous = stack[stack.length-1];
        // 그 전과 짝이면 제거
        if (hash[previous] === a) {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length ? false: true;
}

function solution(s) {
    var answer = 0;
    const stack = [...s];
    for (let i = 0; i < s.length; i++) {
        stack.push(stack.shift());
        if (isValid(stack)) {
            console.log('1')
            answer++;
        }
    }
    return answer;
}