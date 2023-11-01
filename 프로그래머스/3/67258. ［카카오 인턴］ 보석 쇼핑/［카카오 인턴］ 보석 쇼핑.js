function solution(gems) {
    var answer = [];
    const allTypeNum = new Set(gems).size;
    const map = new Map(); // {타입: 갯수}
    let i = 0;
    let j = -1; //////////////
    let MIN = 100000000;
    
    if(allTypeNum === 1) return [1,1];
    
    while(j < gems.length) { // i <= j && 
        // 종류가 부족하면 오른쪽을 증가
        if (map.size < allTypeNum) {
            j++;
            const newGem = gems[j];
            if (!map.has(newGem)) {
                map.set(newGem, 1);
            } else {
                map.set(newGem, map.get(newGem)+1);
            }
        } else {
            // 종류를 충족하면 MIN을 갱신하고 왼쪽 포인터를 증가시켜 보석 갯수를 줄인다.
            if (MIN > j-i) {
                MIN = j-i;
                answer = [i+1, j+1];
            }
            const oldGem = gems[i];
            if (map.get(oldGem) === 1) {
                map.delete(oldGem);
            } else {
                map.set(oldGem, map.get(oldGem)-1);
            }
            i++;
        }
        
    }
    return answer;
}