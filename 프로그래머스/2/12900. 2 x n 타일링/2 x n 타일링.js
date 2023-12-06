function solution(n) {
    const dp = Array.from({length: n+1}, () => null);
    const MOD =  1000000007;
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; ++i) {
        dp[i] = (dp[i-1] + dp[i-2]) % MOD;
    }
    return dp[n];
}