// 두 큐의 합이 같게 하기 위해 뺐다 넣다해야하는 최소횟수
// 안 되면 -1
// 둘의 합에서 빼주고 더해주고를 반복
function solution(queue1, queue2) {
    var answer = 0;
    let sum1 = getSum(queue1);
    let sum2 = getSum(queue2);
    let p1 = 0;
    let p2 = 0;
    const max = queue1.length * 3;
    
    for (let i = 0; i < max; i++) {
        if (sum1 === sum2) return answer;
        if (sum1 > sum2) {
            const movingNum = queue1[p1];
            sum1 -= movingNum;
            sum2 += movingNum;
            queue2.push(movingNum)
            p1++;
        } else {
            const movingNum = queue2[p2];
            sum1 += movingNum;
            queue1.push(movingNum);
            sum2 -= movingNum;
            p2++;
        }
        answer++;
    }
    return -1;
}

function getSum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}