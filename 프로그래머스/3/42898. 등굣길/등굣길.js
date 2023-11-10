function solution(m, n, puddles) {
    const dp = Array.from({length: n}, () => Array.from({length: m}, () => undefined));
    dp[0][0] = 1;
    for (const [col, row] of puddles) {
        dp[row-1][col-1] = 0;
    }
    
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            if (r === 0 && c === 0) {
                continue;
            }
            if (dp[r][c] !== 0) {
                let top = 0;
                let left = 0;
                if(r-1 >= 0 && dp[r-1][c] !== 0) {
                    top = dp[r-1][c];
                }
                if (c-1 >= 0 && dp[r][c-1] !== 0) {
                    left = dp[r][c-1];
                }
                dp[r][c] = (left + top) % 1000000007;
            }
        }
    }
    return dp[n-1][m-1] % 1000000007;
}

// function solution(m, n, puddles) {
//     var answer = 0;
//     const dp = Array.from({length: n}, () => Array.from({length: m}, () => undefined));
//     dp[0][0] = 1;
    
//     // 물웅덩이 // 좌표가 반대!
//     for (const [pCol, pRow] of puddles) {
//         dp[pRow-1][pCol-1] = 0;
//     }
    
//     // n, m반대
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < m; j++) {
//             if (i === 0 && j === 0) {
//                 continue;
//             }
//             // 웅덩이는 패스
//             if (dp[i][j] !== 0) {
//                 let top = 0;
//                 let left = 0;
                
//                 // 이차배열 범위 안 이고 && 물웅덩이가 아니면 dp의 값을 가져온다
//                 if (i-1 >= 0 && dp[i-1][j] !== 0) {
//                     top = dp[i-1][j];
//                 }
//                 if (j-1 >= 0 && dp[i][j-1] !== 0) {
//                     left = dp[i][j-1];
//                 }
//                 dp[i][j] = (top + left) % 1000000007; // 현재 = 상 + 좌
//             }
//         }
//     }
//     return dp[n-1][m-1] % 1000000007;
// }