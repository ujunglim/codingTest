function solution(clothes) {
    var answer = 0;
    const hash = {};
    
    for (const [cloth, type] of clothes) {
       hash[type] = (hash[type] || 0) + 1;
    }
    const arr = Object.values(hash);
    answer = arr.reduce((acc, curr) => {
        acc *= (curr+1);
        return acc;
    }, 1) 
    
    return answer-1;
}