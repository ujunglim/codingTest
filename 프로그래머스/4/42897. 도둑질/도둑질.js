function solution(money) {
    const len = money.length+2;
    const dp1 = new Array(len).fill(0);
    const dp2 = new Array(len).fill(0);
    
    for (let i = 2; i <= len-2; i++) {
        dp1[i] = Math.max(dp1[i-1], dp1[i-2] + money[i-2]);
    }
    
    for (let i = 3; i <= len-1; i++) {
        dp2[i] = Math.max(dp2[i-1], dp2[i-2] + money[i-2]);
    }
    return Math.max(dp1[len-2], dp2[len-1])
}