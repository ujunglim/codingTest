function solution(skill, skill_trees) {
    var answer = 0;
    let queue = [];
    const obj = {};
    const firstSkill = skill[0];
    Array.from(skill).forEach((s, i) => obj[s] = i+1);
    
    // 트리
    for (const tree of skill_trees) {
        let isTree = true;
        // 트리 안의 스킬
        for (const s of tree) {
            console.log(tree, s, queue, isTree)
            if (!obj[s]) continue; // 스킬이외 문자는 스킵
            // 첫스킬
            if (!queue.length) {
                // 첫 스킬이 틀리면 다음 트리로
                if (s !== firstSkill) {
                    isTree = false;
                    queue = [];
                    break;
                }
                // 첫 스킬이 맞음 queue에 넣고 다음 스킬 검사
                queue.push(s);
            } else {
                const prev = queue[queue.length-1];
                // 미수행 선행스킬이 있을시
                if (obj[prev]+1 !== obj[s]) {
                    isTree = false;
                    queue = [];
                    break;
                }
                // 선행스킬을 수행했을때
                queue.push(s);
            }
            // 이미 스킬 다 했을때
            if (queue.length === skill.length) {
                break;
            }
        }
        // 스킬트리가 맞다
        if (isTree) {
            console.log('------')
            queue = [];
            answer++;
        }
    }
    return answer;
}