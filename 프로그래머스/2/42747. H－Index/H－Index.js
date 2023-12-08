function solution(citations) {
    let answer = 0;
    citations.sort((a, b) => a - b);
    const total = citations.length;
    
    for (let h = 0; h <= citations.length; ++h) {
        const count = citations.filter(c => c >= h).length; ////
        if (count >= h) {
            answer = h;
        }
    }
    return answer;
}

