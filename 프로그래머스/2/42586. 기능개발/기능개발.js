function solution(progresses, speeds) {
    var answer = [];
    const needArr = [];
    for (let i = 0; i < progresses.length; i++) {
        needArr.push(Math.ceil((100-progresses[i])/speeds[i]));
    }
    let currMax = -Infinity
    for (let i = 0; i < needArr.length; i++) {
        if (!answer.length) {
            answer.push(1);
            currMax = needArr[i];
            continue;
        }
        if (currMax >= needArr[i]) {
            answer[answer.length-1] += 1;
        } else {
            answer.push(1);
            currMax = needArr[i];
        }
    }
    return answer;
}