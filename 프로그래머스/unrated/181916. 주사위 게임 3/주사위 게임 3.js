function solution(a, b, c, d) {
    var answer = 0;
    const set = new Set([a, b, c, d]);
    // 전부 같음
    if (set.size === 1) return a*1111;
    // 전부 다름
    if (set.size === 4) return Math.min(a, b, c, d);
    
    const hashMap = {};
    const arr = [a, b, c, d];
    arr.forEach(a => {
        hashMap[a] = (hashMap[a] || 0) +1;
    })
    
    if (set.size === 2) {
        // 1개 3개
        if (Array.from(Object.values(hashMap)).includes(1)) {
            const three = Number(Object.entries(hashMap).filter(([key, value]) => value === 3).flat()[0]);
            const one = arr.filter(e => e !== three)[0];
            return Math.pow(three*10+one, 2);
        }
        // 2개 2개
        else {
            const [a, b] = Array.from(Object.keys(hashMap)).map(e => Number(e));
            return (a+b) * Math.abs(a-b);
        }
    }
    if (set.size === 3) {
        const two = Number(Object.entries(hashMap).filter(([key, value]) => value === 2).flat()[0]);
        const others = arr.filter((e) => e !== two);
        return others.reduce((acc, curr) => acc * curr, 1);
    }
    return answer;
}