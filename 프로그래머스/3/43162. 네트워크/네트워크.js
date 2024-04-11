function solution(n, computers) {
    var answer = 0;
    const parents = Array.from({length: n}, (_, i) => i);
    
    // 부모를 찾음
    function find(n) {
        if (parents[n] === n) return n; // 부모가 나
        parents[n] = find(parents[n]); // 새로운 부모로 갱신
        return parents[n];
    }
    
    // 부모를 합침
    function union(a, b) {
        const parentA = find(a);
        const parentB = find(b);
        if (parentA < parentB) {
            parents.forEach((p, i) => {
                if (p === parentB) {
                    parents[i] = parentA;
                }
            })
        } else {
            parents.forEach((p, i) =>{
                if (p === parentA) {
                    parents[i] = parentB;
                }
            })
        }
    }
    
    for (let r = 0; r < n; r++) {
        for (let c = r+1; c < n; c++) {
            // 연결된 컴퓨터를 찾음
            if (computers[r][c] === 1) {
                if (find(r) !== find(c)) {
                    union(r, c);
                }
            }
        }
    }
    return new Set(parents).size;
}