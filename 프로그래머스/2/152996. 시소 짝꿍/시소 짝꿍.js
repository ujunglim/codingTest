function solution(weights) {
    var answer = 0;
    const hash = {};
    weights.sort((a, b) => a - b); // 
    weights.forEach(w => hash[w] = (hash[w] || 0) + 1);
     
    for (const w of weights) {
        if (hash[w] > 1) answer += hash[w]-1; // 자신을 포함해 2개이상 일시 짝꿍수를 더한다
        if (hash[2*w]) answer += hash[2*w];
        if (hash[w*4/3]) answer += hash[w*4/3];
        if (hash[w*3/2]) answer += hash[w*3/2];
        
        hash[w] -= 1; // 짝꿍끼리의 순서는 상관없다 따라서 다음차례에서 현재 w를 비교대상에서 제외시킨다
    }
    return answer;
}