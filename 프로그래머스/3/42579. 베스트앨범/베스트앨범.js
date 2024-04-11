// 많이 재생된 장르먼저
// 장르내 많이 재생된 노래
// 재생수가 같으면 고유번호가 낮은 노래 먼저
function solution(genres, plays) {
    var answer = [];
    const totalCountHash = {};
    const playCount = {}; // {id, count}
    
    for (let i = 0; i < genres.length; i++) {
        const currGenre = genres[i];
        totalCountHash[currGenre] = (totalCountHash[currGenre] || 0) + plays[i];
        
        if (!playCount[currGenre]) {
            playCount[currGenre] = [];
        }
        playCount[currGenre].push({id: i, count: plays[i]})
    }
    const sortedGenres = Object.entries(totalCountHash).sort((a, b) => b[1] - a[1]);

    for (const [type, _] of sortedGenres) {
        if (playCount[type].length === 1) {
            answer.push(playCount[type][0].id);
            continue;
        }
        const sortedCountArr = playCount[type].sort((a, b) => {
            if (a.count === b.count) {
                return a.id - b.id;
            } 
            return b.count- a.count;
        })
        
        for (let i = 0; i < 2; i++) {
            answer.push(sortedCountArr[i].id);
        }
    }
    
    return answer;
}