// 1~n n개 개인정보
// 유효기간 후 파기
// 모든 달은 28일
// 파기해야할 번호를 리턴

function solution(today, terms, privacies) {
    var answer = [];
    today = convertDate(today);
    const termObj = {};
    terms.forEach(term => {
        const [name, duration] = term.split(' ');
        termObj[name] = Number(duration);
    })
    privacies.forEach((p, i) => {
        const [currDate, currTerm] = p.split(' ');
        const convertedCurrDate = convertDate(currDate);
        const lastDate = convertedCurrDate + termObj[currTerm]*28;
        // 이미 파기해야하는 하는 경우
        if (lastDate <= today) {
            answer.push(i+1);
        }
    })
    return answer;
}

function convertDate(date) {
    const [y, m, d] = date.split('.');
    return Number(y)*28*12 + Number(m)*28 + Number(d);
}