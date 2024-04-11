function solution(tickets) {
    var answer = [];
    
    function dfs(acc, remain) {
        const currAirport = acc[acc.length-1];
        if (!remain.length) {
            answer.push(acc);
            return;
        }
        
        for (let i = 0; i < remain.length; i++) {
            const [depart, arrive] = remain[i];
            if (depart === currAirport) {
                const newRemain = [...remain];
                newRemain.splice(i, 1);
                dfs([...acc, arrive], newRemain);
            }
        }
    }
    
    dfs(['ICN'], tickets);
    return answer.sort()[0];
}