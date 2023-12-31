
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
function solution(picks, minerals) {
    var answer = 0;
    const tools = ['diamond', 'iron', 'stone'];
    const rank = {
        'diamond': 0,
        'iron': 1,
        'stone': 2,
    }

    function dfs(picks, minerals, fatigue) {
        const oldFatigue = fatigue;
        const fatigues = [];
        // 도구가 없거나 광물이 없을때 return
        if (picks.reduce((acc, curr) => acc + curr, 0) === 0 || !minerals.length) {
            return fatigue;
        }

        for(let i = 0; i < picks.length; i++) {
            const currPickCount = picks[i];
            const currPickRank = i;
            // 도구가 없을땐 다음 도구로 스킵
            if (!currPickCount) {
               continue;
            }
            // 도구가 있다
            const newPicks = picks.map((p, idx) => idx === i ? p-1 : p) // 도구 삭제
            // 광물캐기
            const remainedMinerals = minerals.length <= 5 ? [] : [...minerals].splice(5);
            // 피로도계산
            for (let i = 0; i < (minerals.length >= 5 ? 5 : minerals.length); i++) {
                const currMineralRank = rank[minerals[i]]; // 현재 캘 광물의 랭킹
                if (currPickRank <= currMineralRank) {
                    fatigue += 1;
                } else {
                    fatigue += Math.pow(5, currPickRank-currMineralRank);
                }
            }
            fatigues.push(dfs(newPicks, remainedMinerals, fatigue));
            fatigue = oldFatigue; // fatigue 리셋
         }
        return Math.min(...fatigues);
    }
    return dfs(picks, minerals, 0);
}