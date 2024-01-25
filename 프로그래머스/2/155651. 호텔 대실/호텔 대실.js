// 10분청소 후 다음 사용가능
// 필요한 최소객실수는?
// 분으로 변환
// 시작시각 오름차순
// 들어갈 수 있는 시각을 저장하는 배열 (오름차순)

function solution(book_time) {
    var answer = 0;
    const bookArr = book_time.map(book => {
        const convertToNum = book.map(b => {
            const [h, m] = b.split(':');
            return Number(h)*60+Number(m);
        })
        return {start: convertToNum[0], end: convertToNum[1]};
    }).sort((a, b) => a.start - b.start);
    
    const canEnterTimes = [bookArr[0].end+10];
    answer++; // 첫번째방
    
    for (let i = 1; i < bookArr.length; ++i) {
        const {start, end} = bookArr[i];
        // 들어갈 수 있는 방 찾기
        let createRoom = true;
        for (let j = 0; j < canEnterTimes.length;j++) {
            // 방 찾음
            if (canEnterTimes[j] <= start) {
                canEnterTimes.splice(j, 1);
                canEnterTimes.push(end+10);
                createRoom = false;
                break;
            }
        }
        
        if (createRoom) {
            answer++;
            canEnterTimes.push(end+10);
        }
    }
    return answer;
}