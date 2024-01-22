// 원형수열 안 연속부분의 합으로 만들수 있는 수가 몇가지?
// O^2 가능
// 슬라이딩 윈도우
function solution(elements) {
    var set = new Set();
    let windowLen = elements.length;
    elements = elements.concat(elements);
    
    for (let startIndex = 0; startIndex < windowLen; startIndex++) {
        let sum = 0;
        for (let count = startIndex; count < startIndex + windowLen; count++) {
            sum += elements[count];
            set.add(sum)
        }
    }
    // console.log(set)
    return set.size;
}