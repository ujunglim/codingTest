function solution(participant, completion) {
    let answer = '';
    const hash = new Map();
    for (const p of participant) {
        hash.set(p, (hash.get(p) || 0) + 1);
    }
    
    for (const c of completion) {
        if (hash.get(c) === 1) {
            hash.delete(c);
        } else {
            hash.set(c, hash.get(c)-1);
        }
    }
    return Array.from(hash)[0][0]; // map을 array로 변환 Array.from(map)
}

// function solution(participant, completion) {
//   var answer = "";
//   const map = new Map();

//   for (let i = 0; i < participant.length; i++) {
//     const currP = participant[i];
//     const currC = completion[i];
//     map.set(currP, (map.get(currP) | 0) + 1);
//     map.set(currC, (map.get(currC) | 0) - 1);
//   }
//   for (const [key, value] of map) {
//     if (value > 0) {
//       answer = key;
//       break;
//     }
//   }
//   return answer;
// }

// // get set delete has
// // 관점은 value를 자유자재로 값을 바꿀수 있음
// // const {key, value} 가 아닌 [key, value] of map