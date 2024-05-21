function solution(N, number) {
    const sets = Array.from({length: 9}, () => new Set());
    // 5, 55, 555 ...추가
    sets.forEach((set, i) => {
        set.add(Number(String(N).repeat(i)));
    })
    
    console.log(sets)
    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= i; j++) { //
            for (const first of sets[j]) {
                for (const second of sets[i-j]) {
                    sets[i].add(first+second);
                    sets[i].add(first-second);
                    sets[i].add(first*second);
                    sets[i].add(Math.floor(first/second));
                }
                if (sets[i].has(number)) return i;
            }
        }
    }
    return -1;
}

// function solution(N, number) {
//     // if (N === number) {
//     //     return 1;
//     // }
//     const setArr = Array.from({length: 9}, () => new Set());
//     setArr.forEach((set, i) => set.add(Number(String(N).repeat(i))));
    
//     for (let totalCount = 1; totalCount <= 8; totalCount++) {
//         for (let firstCount = 1; firstCount <= totalCount; firstCount++) {
//             for (const first of setArr[firstCount]) {
//                 for (const second of setArr[totalCount-firstCount]) {
//                     setArr[totalCount].add(first+second);
//                     setArr[totalCount].add(first-second);
//                     setArr[totalCount].add(first*second);
//                     setArr[totalCount].add(Math.floor(first/second));
//                 }
//                 if (setArr[totalCount].has(number)) {
//                     return totalCount;
//                 }
//             }
//         } 
//     }
//     return -1;
// }

// // 5/0 = Infinity
// // Math.floor(5/0) = Infinity