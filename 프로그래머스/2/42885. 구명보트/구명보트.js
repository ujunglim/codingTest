function solution(people, limit) {
    var answer = 0;
    people.sort((a, b) => a - b);
    let left = 0;
    let right = people.length-1;
    
    while(left < right) {
        // 2명이 구명보트를 탈 수 있을 때
        if (people[left] + people[right] <= limit) {
            answer++;
            left++;
            right--;
        } else {
            right--;
        }
    }
    answer += people.length-answer*2;
    return answer;
}


