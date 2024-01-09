function solution(s) {
    let changeCount = 0;
    let zeroCount = 0;
    let arr = [...s];
    
    while(arr.length > 1) {
        changeCount++;
        const nonZeroLen = arr.filter(e => e !== '0').length;
        zeroCount += arr.length - nonZeroLen;
        const result = nonZeroLen.toString(2);
        arr = [...result];
    }
    return [changeCount, zeroCount];
}