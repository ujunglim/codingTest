// 1-100까지 카드, 2이상의 수를 정해 그 수보다 작거나 같은 숫자들을 준비하고 카드 수만큼의 상자를 준비
// 임의로 하나 선택하여 그 안의 숫자 상자를 연다
// 이미 열려있을 떄까지 반복, 
// 1번 그룹을 제외하고 남는 상자가 없으면 게임 종료하고 이때 획득 점수는 0점
// 그렇지 않으면 남은상자중 같은 방식으로 연다
// 1번 상자수 & 2번 상자수 최고 점수를 리턴

// 모든 상자 그룹을 찾고 최대 2개의 갯수를 곱함
// 이미 열린건 0으로 표시
function solution(cards) {
    var answer = [];
    
    for (let i = 0; i < cards.length; i++) {
        const currNum = cards[i];
        // 아직 안 쓴 카드인 경우 그룹을 찾는다
        if (currNum !== 0) {
            let group = [];
            let index = i;
            // 열려있는 상자를 찾을 떄까지
            while(cards[index] !== 0) {
                group.push(cards[index]);
                const nextIndex = cards[index]-1;
                cards[index] = 0; // 열린 표시
                index = nextIndex;
            }
            if (group.length === cards.length) {
                answer.push(0);
                continue;
            } else {
                answer.push(group.length);
                group = [];
            }
        }
    }
    answer.sort((a, b) => b-a);
    return answer.length >= 2 ? answer[0]*answer[1] : 0;
}