function solution(n, k, enemy) {
    var answer = 0;
    let min = 0;
    let max = enemy.length-1;
    
    while(min <= max) {
        const mid = Math.floor((min+max)/2);
        const selected = enemy.slice(0, mid+1).sort((a, b) => b-a);
        let newN = n;
        
        for (let i = k; i < selected.length; i++) {
            newN -= selected[i];
        }
        // 병사가 모자르면 라운드를 줄인다
        if (newN < 0) max = mid-1;
        // 병사가 남으면 라운드를 늘린다.
        else min = mid+1;
    }
    return max+1;
}