function solution(survey, choices) {
    var answer = '';
    const types = ["RT", "CF", "JM", "AN"];
    const scores = [3,2,1,0,1,2,3];
    const obj = {};
    
    // 얻은 점수 정리
    for (let i = 0; i < survey.length; ++i) {
        const [sur1, sur2] = survey[i].split('');
        const currChoice = choices[i];
        const score = scores[currChoice-1]
        if (currChoice < 4) {
            obj[sur1] = (obj[sur1] || 0) + score;
        } else if (currChoice > 4) {
            obj[sur2] = (obj[sur2] || 0) + score;
        }
    }
    
    for (const type of types) {
        const [t1, t2] = type.split('');
        if (!obj[t2] || obj[t1] > obj[t2]) {
            answer += t1;
        } else if (!obj[t1] || obj[t1] < obj[t2]) {
            answer += t2;
        } else {
            answer += [t1, t2].sort()[0];
        }
    }
    return answer;
}