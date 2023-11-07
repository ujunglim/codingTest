function solution(phone_book) {
    var answer = true;
    const prefixHash = new Set();
    const lenHash = new Set();
    phone_book.sort((a, b) => a.length-b.length);
    
    for (const phone of phone_book) {
        if (lenHash.size === 0) {
            lenHash.add(phone.length);
            prefixHash.add(phone);
            continue;
        }
        // 갯수별 체크
        for (let len of [...lenHash]) {
            const currPrefix = phone.substr(0, len);
            if (prefixHash.has(currPrefix)) {
                return false;
            }
        }
        // 추가
        lenHash.add(phone.length);
        prefixHash.add(phone)
    }
    return true;
}