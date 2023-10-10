function solution(queue1, queue2) {
    let answer = 0;
    const maxCount = queue1.length*3; // queue1, queue2 길이가 같으니까 최대이동횟수는 queue1에 있던걸 모두 queue2에 옮기고, queue2에서 마지막 하나빼고 다 queue1으로 옮기는 경우다
    let sum1 = queue1.reduce((acc, curr) => acc + curr, 0);
    let sum2 = queue2.reduce((acc, curr) => acc + curr, 0);
    let index1 = 0;
    let index2 = 0;
    if ((sum1+sum2) / 2 === 1) return -1; // 둘의 합이 홀수 이면 -1
    
    // [탈출조건] 두 큐의 합이 같거나 최대이동횟수를 넘을때
    while(sum1 !== sum2 && answer < maxCount) {
        // queue2의 합이 더 큰 경우, queue2에서 shift한걸 queue1에 push
        if (sum1 < sum2) {
            const element = queue2[index2];
            queue1.push(element); // queue2의 첫번째 값을 queue1에 넣기
            sum1 += element; 
            sum2 -= element;
            index2++; // shift대신
        } 
        // queue1의 합이 더 큰 경우, queue1에서 shift한걸 queue2에 push
        else {
            const element = queue1[index1];
            queue2.push(element);
            sum2 += element;
            sum1 -= element;
            index1++;
        }
        answer++;
    }
    return sum1 === sum2 ? answer : -1;
}
// 시간초과, 탈출조건
// shift는 O(n)으로 시간초과 => push만 하고 shift할 위치는 인덱스로 기억
// 횟수, dfs?