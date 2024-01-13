// 하나의 이어진 네트워크 중 가장 작은 수를 부모라고하면, 부모의 갯수 = 네트워크 갯수
function solution(n, computers) {
    const parents = Array.from({length: n}, (_, i) => i);
    
    function find(n) {
        if (parents[n] === n) return n;
        parents[n] = find(parents[n]); // !
        return parents[n];
    }
    
    function union(a, b) {
        const aParent = find(a);
        const bParent = find(b);
        
        if (aParent < bParent) {
            parents.forEach((parent, i) => {
                if (parent === bParent) {
                    parents[i] = aParent;
                }
            })
        } else {
            parents.forEach((parent, i) => {
                if (parent === aParent) {
                    parents[i] = bParent;
                }
            })
        }
    }
    
    for (let r = 0; r < n; ++r) {
        // 대각선 기준으로 대칭이므로 c = r+1부터 확인하여 반복을 줄인다
        for (let c = r+1; c < n; ++c) {
            // r기준 현재와 이어졌고 부모가 다른 c를 찾으면 부모를 통일한다
            if (computers[r][c] === 1 && find(r) !== find(c)) {
                union(r, c);
            }
        }
        
    }
    console.log(parents)
    return new Set(parents).size
}