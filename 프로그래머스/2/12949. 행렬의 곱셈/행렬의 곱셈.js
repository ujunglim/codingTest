function solution(arr1, arr2) {
    const answer = Array.from({length: arr1.length}, () => [])
    
    
    for (let r = 0; r < arr1.length; r++) {
        for (let c = 0; c < arr2[0].length; c++) {
            const horiz = arr1[r];
            const vertic = arr2.map(a => a[c]);
            let multiple = 0;
            
            for (let i = 0; i < horiz.length; i++) {
                multiple += horiz[i]*vertic[i];
            }
            answer[r][c] = multiple;
        }
    }
    return answer;
}