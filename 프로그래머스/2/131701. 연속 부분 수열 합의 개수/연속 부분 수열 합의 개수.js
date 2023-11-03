function solution(elements) {
    const set = new Set();
    const cycle = elements.concat(elements)

    for (let count = 1; count <= elements.length; count++) {
        for (let startIndex = 0; startIndex < elements.length; startIndex++) {
            // 시작인덱스에서 갯수만큼의 합을 구한다
            const selected = [...cycle].splice(startIndex, count)
            const sum = selected.reduce((acc, curr) => acc + curr, 0);
            set.add(sum);
        }
    }
    return set.size;
}