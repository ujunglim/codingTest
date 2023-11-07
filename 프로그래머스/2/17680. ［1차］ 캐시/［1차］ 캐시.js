function solution(cacheSize, cities) {
    var answer = 0;
    let cacheArr = [];
    const hash = new Set();
    // 소문자로 변경
    cities = cities.map(c => c.toLowerCase()); // 문자열.toLowerCase
    
    if (cacheSize === 0) {
        return cities.length * 5;
    }
    for (const city of cities) {
        // 캐시에 없는거
        if (!hash.has(city)) {
            answer += 5;
            // 캐시가 다 참
            if (cacheArr.length === cacheSize) {
               const removed = cacheArr.shift(); 
                hash.delete(removed)
            } 
            // 새로운거 추가
            hash.add(city); 
            cacheArr.push(city)
        } else {
            answer++;
            cacheArr = cacheArr.filter(c => c !== city);
            cacheArr.push(city);
        }
    }
    return answer;
}