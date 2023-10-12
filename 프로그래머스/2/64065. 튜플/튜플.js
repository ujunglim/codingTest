function solution(s) {
    const hash = {};
    const splitted = s.split('},{');
    // 앞에 {{ 뒤에 }}제거
    splitted[0] = splitted[0].replace('{{', '');
    splitted[splitted.length-1] = splitted[splitted.length-1].replace('}}', '');
    
    for (const element of splitted) {
        const elementArr = element.split(',');
        for (const e of elementArr) {
            hash[e] = (hash[e] || 0) + 1;
        }
    }
    const hashArr = Object.entries(hash);
    hashArr.sort((a, b) => b[1] - a[1]);
    return hashArr.map(h => parseInt(h[0]));
}

// 갯수대로 분류후 큰 갯수대로