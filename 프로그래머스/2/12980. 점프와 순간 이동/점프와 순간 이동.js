// k칸 점프, 현재까지 온거리 *2로 순간이동
// k칸 점프를 하면 k만큼 사용량, 순간이동은 없음
// 점프이동 최소
// 10억 이하 자연수 => logN
// 첫 점프하고
// 2분할되면 나누고 안 될때마다 +점프
function solution(n)
{
    var ans = 0;
    while(n > 0) {
        if (n % 2 === 1) {
            ans++;
        } 
        n = Math.floor(n/2);
    }
    return ans;
}