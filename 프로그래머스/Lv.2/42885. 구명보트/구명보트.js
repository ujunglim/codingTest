// 오름차순, 투 포인터
// 40, 50, 50, 70, 80
function solution(people, limit) {
    var answer = 0;
    let left = 0;
    let right = people.length-1;
    people.sort((a, b) => a - b);
    
    while(left < right) {
        const sum = people[left] + people[right];
        // 배 추가
        if (sum > limit) {
            answer++;
            right--;
        } else {
            answer++;
            right--;
            left++;
        }
    }
    if(left === right) answer++;
    return answer;
}