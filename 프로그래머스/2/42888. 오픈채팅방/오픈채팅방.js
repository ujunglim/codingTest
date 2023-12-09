//  중복 아이디 가능
function solution(record) {
    var answer = [];
    const obj = {};
    const map = {};
    
    for (const r of record) {
        const [action, id, name] = r.split(' ');
        
        if (action === 'Leave') {
            answer.push({id, action});
            continue;
        }
        // 이름이 변경된 경우
        if (action === 'Change') {
            obj[id] = name;
            continue;
        }
        // 다시 들어올때 이름이 변경된 경우
        if (action === 'Enter' && obj[id] && obj[id] !== name) {
            obj[id] = name;
        }
        answer.push({id, action});
        obj[id] = name;
    }
    const a = answer.map(({id, action}) => {
       return `${obj[id]}님이 ${action === 'Enter' ? '들어왔습니다.' : '나갔습니다.'}`
    })
    return a;
}

// 처음에 들어오는 경우
// 처음에 나가는 경우
// 다시 들어오는데 이름이 변경된 경우
// 그냥 이름을 변경한 경우