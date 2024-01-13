// 완전탐색 dfs
function solution(numbers) {
    const set = new Set();
    
    function dfs(prev, remain) {
        if (!remain.length) {
            return;
        }
        for (let i = 0; i < remain.length; i++) {
            const newNum = Number(prev + remain[i]);
            if (isPrime(newNum)) {
                set.add(newNum);
            }
            const newRemain = [...remain];
            newRemain.splice(i, 1);
            dfs(newNum, newRemain);
        }
    }
    dfs("", numbers);
    return set.size;
}
    
function isPrime(n) {
    if (!n || n === 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}