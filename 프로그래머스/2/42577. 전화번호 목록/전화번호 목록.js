// 접두어이면 false, 아니면 true
function solution(phone_book) {
    phone_book.sort((a, b) => a.length - b.length); // 긴 번호대로 sort
    const hash = new Set();
    
    for (const pb of phone_book) {
        if (!hash.size) {
            hash.add(pb);
            continue;
        }
        
        for (let i = 1; i < pb.length; i++) {
            const slice = pb.slice(0, i);
            if (hash.has(slice)) {
                return false;
            }
        }
        hash.add(pb);
    }
    return true;
}