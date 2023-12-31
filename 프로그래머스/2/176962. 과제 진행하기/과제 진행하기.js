// 시작시간이 되면 무조건 과제는 시작한다 (기존에 진행중이던 과제는 멈춘다)
// 진행중이던 과제를 끝내고 할게 없을 때 멈춘 과제가 있으면 멈춘과제를 진행
// 멈춘과제가 여러개이면 최근에 멈춘 과제부터 시작
// 멈춘과제, 새로시작할 과제가 있으면 새로시작할 과제부터 진행
function convertNum(str) {
    const [h, m] = str.split(':').map(e => Number(e));
    return h*60 + m;
}

function solution(plans) {
    // 시간을 숫자로 변환후 시간에 따라 sort
    plans = plans.map(([name, start, playtime]) => {
        return {
            name,
            start: convertNum(start),
            playtime: Number(playtime)
        }
    }).sort((a, b) => a.start - b.start);
    var answer = [];
    const stack = [];
    const remained = [];
    let currTime = plans[0].start; // 맨 처음 시작 시각
    
    // 맨 처음 과제 stack에 넣기
    stack.push(plans.shift());
    
    while(true) {
        if (plans.length && stack.length) {
            const currPlan = stack[0];
            const nextPlan = plans[0];
            // 현재과제 이미 완료
            if (currTime + currPlan.playtime <= nextPlan.start) {
                answer.push(stack.shift().name);
                currTime += currPlan.playtime;
            }
            // 현재과제 미완료시 남은시간 다시 계산해서 stack에 넣기
            else {
                currPlan.playtime -= nextPlan.start - currTime;
                currTime = nextPlan.start;
                stack.unshift(plans.shift());
            }
        }
        // 진행중인 과제가 없을때 다음 과제를 진행
        else if (plans.length) {
            const newPlan = plans.shift();
            stack.push(newPlan);
            currTime = newPlan.start; // 시간업뎃
        } else if (stack.length) {
            answer.push(stack.shift().name);          
        } else {
            break;
        }
    }
    return answer;
}