function solution(triangle) {
    var answer = triangle[0][0];
    const dp = [triangle[0]];
    
    for (let i = 1; i < triangle.length; i++) {
        dp.push([]);
        for (let j = 0; j < triangle[i].length; j++) {
            if (j !== 0 && j !== triangle[i].length-1) {
                dp[i].push(Math.max(dp[i-1][j-1], dp[i-1][j]) + triangle[i][j]) 
            } else if (j === 0) {
                dp[i].push(dp[i-1][j] + triangle[i][j]);
            } else if (j === triangle[i].length-1) {
                dp[i].push(dp[i-1][j-1] + triangle[i][j]);
            }
        }
    } 
    console.log(dp)
    return Math.max(...dp[triangle.length-1])
}

