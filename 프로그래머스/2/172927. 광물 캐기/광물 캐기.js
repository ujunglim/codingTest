function solution(picks, minerals) {
  let answer = Infinity;
  const rank = {
    diamond: 0,
    iron: 1,
    stone: 2,
  };

  function dfs(picks, minerals, fatigue) {
    // 도구가 없거나 광물이 없을때 return
    if (picks.reduce((acc, curr) => acc + curr, 0) === 0 || !minerals.length) {
      answer = Math.min(answer, fatigue);
      return;
    }

    // 도구별 피로도 계산
    for (let i = 0; i < picks.length; i++) {
      let newFatigue = fatigue;
      const currPickCount = picks[i];
      const currPickRank = i;
      // 도구가 없을땐 다음 도구로 스킵
      if (!currPickCount) {
        continue;
      }
      // 도구가 있다
      const newPicks = [...picks];
      newPicks[i] -= 1; // 도구 삭제
      const newMinerals = minerals.length <= 5 ? [] : [...minerals].splice(5); // 캐고 남은 광물

      // 피로도계산
      for (let i = 0; i < (minerals.length >= 5 ? 5 : minerals.length); i++) {
        const currMineralRank = rank[minerals[i]]; // 현재 캘 광물의 랭킹
        if (currPickRank <= currMineralRank) {
          newFatigue += 1;
        } else {
          newFatigue += Math.pow(5, currPickRank - currMineralRank);
        }
      }
      dfs(newPicks, newMinerals, newFatigue);
    }
  }
  dfs(picks, minerals, 0);
  return answer;
}