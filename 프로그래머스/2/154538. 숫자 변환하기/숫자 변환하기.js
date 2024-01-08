// x+n,  x*2, x*3
// x를 y로 변환하기 위해 필요한 최소 연산 횟수

// 세 연산의 모든 조합
// 숫자가 y초과하면 더이상 연산할 필요없다

// 시간초과 => dp

function solution(x, y, n) {
    let answer = Infinity;
    const dp = Array.from({length: y+1}, () => Infinity); //dp[i] i값에 도달하기 위한 최소 연산 횟수
    dp[x] = 0;
    
    for (let i = x; i <= y; ++i) {
        if (dp[i+n]) {
            dp[i+n] = Math.min(dp[i]+1, dp[i+n]);
        }
        if (dp[i*2]) {
            dp[i*2] = Math.min(dp[i]+1, dp[i*2]);
        }
        if (dp[i*3]) {
            dp[i*3] = Math.min(dp[i]+1, dp[i*3]);
        }
    }
    return dp[y] === Infinity ? -1 : dp[y];
}