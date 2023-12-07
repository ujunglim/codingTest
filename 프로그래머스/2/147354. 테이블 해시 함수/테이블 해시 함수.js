function solution(data, col, row_begin, row_end) {
    var answer = 0;
    const colIndex = col-1;
    
    data.sort((a, b) => {
        if (a[colIndex] === b[colIndex]) {
            return b[0] - a[0];
        }
        return a[colIndex] - b[colIndex];
    })
    
    for (let i = row_begin-1; i < row_end; ++i) {
        const res = data[i].reduce((acc, curr) => acc + curr % (i+1), 0);
        answer = answer ? answer ^ res : res;
    }
    return answer;
}