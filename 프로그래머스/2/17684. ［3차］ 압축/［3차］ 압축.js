const dictionary = {}
// 사전 init
for (let i = 1; i <= 26; i++) {
    const alphabet = String.fromCodePoint(i+64);
    dictionary[alphabet] = i;
}

function solution(msg) {
    var answer = [];
    let word = ''
    let lastWord;
    
    for (let i = 0; i < msg.length; i++) {
        word += msg[i];
        if (i === msg.length-1) {
            lastWord = word;
        }

        if (dictionary[word]) {
            continue;
        }
        // 사전에 없는것을 발견
        // 새로운 글자 추가
        dictionary[word] = Object.keys(dictionary).length+1
        // 앞서 아는 부분 출력
        const known = word.substring(0, word.length-1);
        answer.push(dictionary[known]);
        i--; ////
        // 초기화
        word = '';
    }
    /// 마지막 문자 추가
    answer.push(dictionary[lastWord])
    return answer;
}