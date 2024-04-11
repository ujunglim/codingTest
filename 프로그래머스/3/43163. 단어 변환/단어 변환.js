function solution(begin, target, words) {
    var answer = Infinity;
    if (!words.includes(target)) return 0;
    
    function dfs(curr, step, remain) {
        if (curr === target) {
            answer = Math.min(answer, step);
            return;
        }
        for (const word of remain) {
            if (changeable(curr, word)) {
                const newRemain = remain.filter(e => e !== word);
                dfs(word, step+1, newRemain);
            }
        }
    }
    dfs(begin, 0, words);
    
    function changeable(wordA, wordB) {
        let diffCount = 0;
        for (let i = 0; i < wordA.length; i++) {
            if (wordA[i] !== wordB[i]) diffCount++;
        }
        return diffCount === 1;
    }
    return answer;
}