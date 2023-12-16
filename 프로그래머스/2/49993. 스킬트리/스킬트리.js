function solution(skill, skill_trees) {
    function check(tree) {
        const test = [...skill];
        for (const s of tree) {
            if (!skill.includes(s)) continue; // 스킬이외의 문자는 패스
            if (s === test.shift()) continue; // 스킬순서가 맞으면 패스
            return false; // 스킬순서가 맞지 않으면 false
        }
        return true;
    }
    return skill_trees.filter(check).length;
}