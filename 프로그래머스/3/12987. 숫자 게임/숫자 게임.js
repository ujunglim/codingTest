function solution(A, B) {
    var answer = 0;
    A = A.sort((a, b) => b - a);
    B = B.sort((a, b) => b - a);
    let aPointer = 0;
    
    for (let i = 0; i < B.length; i++) {
        while(aPointer < A.length) {
            if (A[aPointer] >= B[i]) {
                console.log(aPointer, i)
                aPointer++;
                continue;
            }
            answer++;
            aPointer++;
            break;
        }
    }
    return answer;
}
// B의 가장 큰 수보다 작은 A가 나올때까지