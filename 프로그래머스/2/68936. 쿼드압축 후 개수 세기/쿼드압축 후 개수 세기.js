function solution(arr) {
    var answer = [0, 0];
    
    function check(r, c, n) {
        if (n === 1) {
            answer[arr[r][c]]++;
            return;
        }
        let isSame = true;
        for (let i = r; i < r+n; ++i) {
            for (let j = c; j < c+n; ++j) {
                if (arr[r][c] !== arr[i][j]) {
                    isSame = false;
                    break;
                }
            }
        }
        
        if (isSame) {
            answer[arr[r][c]]++;
            return;
        }
        n /= 2;
        check(r, c, n);
        check(r, c+n, n);
        check(r+n, c, n);
        check(r+n, c+n, n);
    }
    
    check(0, 0, arr.length)
    return answer;
}