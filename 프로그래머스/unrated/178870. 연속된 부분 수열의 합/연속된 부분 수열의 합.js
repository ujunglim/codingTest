function solution(sequence, k) {
    var answer = [];
    let sum = 0;
    let firstP = 0;
    for (let i = 0; i < sequence.length; i++) {
        sum += sequence[i];
        // 합이 k가 됨
        if (sum === k) {
            answer.push([firstP, i]); // [firstIndex, endIndex]
            continue; // 다음 부분수열 찾기
        }
        // 합이 k보다 작으면 계속 더하기
        else if (sum < k) {
            continue;
        }
        // 합이 k보다 크면 
        else if (sum > k) {
            // sum이 k보다 작거나 같아질때까지 앞의 배열을 뺀다
            for (let i = firstP; i < sequence.length; i++) {
                sum -= sequence[i];
                firstP++;
                if (sum <= k) {
                    break;
                }
            }
            // 합이 k가 됨
            if (sum === k) {
                answer.push([firstP, i]); 
            }
            // 합이 k보다 작으면 계속 더하기
        }
    }
    if (answer.length === 1) {
        return answer[0]
    }
    answer.sort((a, b) => {
        if (a[1]-a[0] === b[1]-b[0]) {
            return a
        }
        return a[1]-a[0] - b[1]-b[0];
    });
    console.log(answer)
    return answer[0];
}
// 앞에서부터 계속 더하다가 k가 되면 answer에 [시작인덱스, 끝인덱스]를 저장
// k이하면은 뒤로 계속 더함
// k이상이면 k보다 작아질때까지 시작인덱스부터 뺀다. 빼는 과정중에 k가 되면 [시작인덱스, 끝인덱스]를 answer에 저장