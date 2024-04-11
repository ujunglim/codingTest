function solution(nums) {
    const gettingCount = Math.floor(nums.length/2);
    return Math.min(gettingCount, new Set(nums).size);
}