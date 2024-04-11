function solution(arr)
{
    const stack = [];
    
    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        if (!stack.length) {
            stack.push(curr);
            continue;
        }
        if (stack[stack.length-1] === curr) {
            continue;
        } else {
            stack.push(curr);
        }
    }
    return stack;
    
}