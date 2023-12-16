// 테케3번째 BDA에서 B를 배우기전에 C를 먼제 배워야한다.
// skill순서대로 출현하는지 확인
function solution(skill, skill_trees) {
    var answer = 0;
    for (const tree of skill_trees) {
        let isRight = true;
        const required = [...skill];
        for (let i = 0; i < tree.length; i++) {
            const curr = tree[i];
            if (!required.includes(curr)) continue; // 없는 스킬이면 패스
            if (required.shift() === curr) continue; // 순서가 맞는 스킬이면 패스
            // 순서가 안 맞음
            else {
                isRight = false;
                break;
            }
            
        }
        if (isRight) {
            console.log(tree)
            answer++;
        }
    }
    return answer;
}