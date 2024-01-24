// 두개의 큐
// 큐의 원소의 합이 같게 하는 최소pop, insert 횟수를 리턴
// 모든 경우구함
function solution(queue1, queue2) {
    let count = 0;
    const maxCount = queue1.length*3;
    let sum1 = queue1.reduce((acc, curr) => acc + curr, 0);
    let sum2 = queue2.reduce((acc, curr) => acc + curr, 0);
    let index1 = 0;
    let index2 = 0;
    
    if ((sum1+sum2)%2 === 1) return -1; // 두 수의 합이 홀수이면 -1리턴
    
    while(sum1 !== sum2 && count < maxCount) {
        // queue2의 합이 더 클때 shift해서 queue1에 추가한다.
        if (sum1 < sum2) {
            const move = queue2[index2];
            queue1.push(move);
            sum1 += move;
            sum2 -= move;
            index2++;
        } else {
            const move = queue1[index1];
            queue2.push(move);
            sum2 += move;
            sum1 -= move;
            index1++;
        }
        count++;
    }
    return sum1 === sum2 ? count : -1;
}