function solution(s){
    let sum = 0;
    
    for (let i = 0; i < s.length; i++) {
        const curr = s[i];
        if (sum === 0 && curr === ')') {
            return false;
        }
        if (curr === '(') {
            sum++;
        } else {
            sum--;
        }
    }
    return sum === 0 ? true : false;
}