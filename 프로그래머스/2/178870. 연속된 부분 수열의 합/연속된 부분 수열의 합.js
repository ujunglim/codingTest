function solution(sequence, k) {
    var answer = [];
    let i = 0;
    let j = 0;
    const len = sequence.length;
    let sum = sequence[0];
    
    while(i < len && j < len) {
        if (sum < k) {
            if (i === j) {
                sum = sequence[i];
            }
            j++;
            sum += sequence[j];
        } else if (sum > k) {
            sum -= sequence[i];
            i++;
        }
         // 찾음
        if (sum === k) {
            answer.push({
                start: i,
                end: j,
                diff: j-i
            });
            j++;
            sum += sequence[j];
        }
    }
    answer.sort((a, b) => a.diff - b.diff);
    const shortestDiff = answer[0].diff;
    const shortests = answer.filter(a => a.diff === shortestDiff);
    if (shortests.length > 1) {
        shortests.sort((a, b) => a.start - b.start);
        return [shortests[0].start, shortests[0].end];
    } else {
        return [answer[0].start, answer[0].end]; 
    }
    return answer;
}