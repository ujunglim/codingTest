// + 거나 -  한 자릿수씩
function solution(storey) {
    var answer = 0;
    while(storey > 0) {
        const digit = storey % 10;
        storey = Math.floor(storey / 10);
        
        if (digit < 5) {
            answer += digit;
        } else if (digit > 5) {
            answer += 10 - digit;
            storey += 1; // 윗 자리수 추가
        } else {
            // 5일땐 윗 자리수 확인
            if (storey % 10 >= 5) {
                storey += 1;
            }
            answer += digit;
        }
    }
    return answer;
}