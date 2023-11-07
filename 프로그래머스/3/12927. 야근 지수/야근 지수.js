function solution(n, works) {
    var answer = 0;
    if (works.reduce((acc, curr) => acc +curr, 0) <= n) {
        return 0;
    }
    const map = new Map(); // {양: 일 갯수}
    for (const work of works) {
        map.set(work, (map.get(work) || 0) + 1);
    }
    console.log(map)
    let max = Math.max(...works);
    
    while(n > 0) {
        n--;
        if (map.get(max) !== 1) {
            map.set(max, map.get(max)-1);
            map.set(max-1, (map.get(max-1) || 0) +1); /////
        } else {
            map.delete(max);
            max--;
            map.set(max, (map.get(max) || 0)+1);
        }
    }
    for (const [amount, count] of [...map]) {
        answer += amount*amount*count;
    }
    return answer;
}


// 시간초과
// function solution(n, works) {
//     var answer = 0;
//     if (works.reduce((acc, curr) => acc +curr, 0) <= n) {
//         return 0;
//     }
//     works.sort((a, b) => b-a); // 큰 일부터 처리
//     while(n > 0) {
//         // 다 같음
//         if (new Set(works).size === 1) {
//             works[works.length-1] -= 1;
//             n--;
//             continue;
//         } else {
//             // 다 같지는 않음
//             for (let i = 0; i < works.length-1; i++) {
//                 if (works[i] > works[i+1]) {
//                     works[i] -= 1;
//                     n--;
//                     break;
//                 }
//             }
//         }
//     }
//     return works.reduce((acc, curr) => acc + curr*curr, 0)
// }