// 숫자들과 3가지의 연산문자(+, -, *) 
// 우선순위 재정의 같은 순위의 연산자는 없어 
// 가장큰수
// 결과가 음수라면 해당 숫자의 절댓값으로 변환
// 경우의수 팩토리얼

// 최대연산자 갯수 49개, 최대 숫자 갯수 50개
// 모든 경우를 구해야함
// 연산 어떻게 우선순위대로 계산하지 stack?
// 빠른 순위 찾기를 위해 경우별로 순위obj만들기

// 풀이
// 1. 순위배열 만들기
// 2. 모든 순위에 대한 연산
function solution(expression) {
  var answer = 0;
  // 1. 숫자, 연산자 분리
  const operatorRegex = /[\+|\-|\*]/g;
  const operators = expression.match(operatorRegex);
  const nums = expression.split(operatorRegex).map((e) => Number(e));

  // 2. 백트래킹으로 모든 경우의 연산자 우선순위 구하기
  const allPriorities = getAllPriorities([...new Set(operators)]);

  // 3. 우선순위 순대로 수식 계산
  for (const priority of allPriorities) {
    let result = priorityCalc(nums, operators, priority);
    answer = Math.max(answer, result);
  }
  return answer;
}

function priorityCalc(nums, operators, priority) {
  // 1순위 연산
  for (let i = 0; i < operators.length; ++i) {
    const currOpt = operators[i];
    if (priority[currOpt] === 1) {
      // 새로운 숫자 삽입
      const newNum = operatorCalc(nums[i], nums[i + 1], currOpt);
      const temp1 = nums.slice(0, i);
      temp1.push(newNum);
      const temp2 = nums.slice(i + 2);
      nums = temp1.concat(temp2);

      // 현재연산자 삭제
      const temp3 = operators.slice(0, i);
      const temp4 = operators.slice(i + 1);
      operators = temp3.concat(temp4);
      i--;
    }
  }

  // 2순위 연산
  for (let i = 0; i < operators.length; ++i) {
    const currOpt = operators[i];
    if (priority[currOpt] === 2) {
      const newNum = operatorCalc(nums[i], nums[i + 1], currOpt);
      const temp1 = nums.slice(0, i);
      temp1.push(newNum);
      const temp2 = nums.slice(i + 2);
      nums = temp1.concat(temp2);

      // 현재연산자 삭제
      const temp3 = operators.slice(0, i);
      const temp4 = operators.slice(i + 1);
      operators = temp3.concat(temp4);
      i--;
    }
  }

  // 3순위 연산
  for (let i = 0; i < operators.length; ++i) {
    const currOpt = operators[i];
    if (priority[currOpt] === 3) {
      const newNum = operatorCalc(nums[i], nums[i + 1], currOpt);
      const temp1 = nums.slice(0, i);
      temp1.push(newNum);
      const temp2 = nums.slice(i + 2);
      nums = temp1.concat(temp2);

      // 현재연산자 삭제
      const temp3 = operators.slice(0, i);
      const temp4 = operators.slice(i + 1);
      operators = temp3.concat(temp4);
      i--;
    }
  }
  return Math.abs(nums[0]);
}

function operatorCalc(a, b, cal) {
  if (cal === "-") return a - b;
  if (cal === "+") return a + b;
  if (cal === "*") return a * b;
}

function getAllPriorities(allExpressions) {
  const allRanks = [];

  function bt(rankObj, rank, remainExpressions) {
    if (!remainExpressions.length) {
      allRanks.push(rankObj);
      return;
    }

    for (const exp of remainExpressions) {
      const newRankObj = { ...rankObj };
      newRankObj[exp] = rank;
      bt(
        newRankObj,
        rank + 1,
        remainExpressions.filter((e) => e !== exp)
      );
    }
  }
  bt({}, 1, allExpressions);
  return allRanks;
}
