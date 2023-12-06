// 처음에 백트래킹, dfs풀이였다. 시간초과, 런타임에러
// 최소경우의 수 dp arr[i] => i값에 도달하기 위한 최소값

function solution(x, y, n) {
    if (x === y) return 0; // 이미x,y의 값이 같을때
    const dp = Array.from({length: y+1}, () => Infinity);
    dp[x] = 0; 
    
    for (let i = x; i <= y; ++i) {
        dp[i+n] = Math.min(dp[i+n], dp[i]+1);
        dp[i*2] = Math.min(dp[i*2], dp[i]+1);
        dp[i*3] = Math.min(dp[i*3], dp[i]+1);
    }
    return dp[y] === Infinity ? -1 : dp[y];
}