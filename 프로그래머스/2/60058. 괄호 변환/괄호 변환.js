
// 균형잡힌: (, ) 개수가 같음
// 올바른: 균형잡히며 짝이맞는 경우
// u는 더 이상 분리할 수 없는 "균형잡힌 괄호 문자열"이고, v는 빈 문자열이 될 수 있다
// 올바르게 만드는 법
// 1. 앞,뒤 문자를 제거한다. 남은 괄호들을 뒤집어준다. 앞뒤롤 각각 (,)를 붙여준다.
function solution(p) {
  var answer = "";
  if (p === "") return ""; // 입력이 빈 문자열인 경우, 빈 문자열을 반환
  // 이미 올바른 문자열이면 바로 리턴
  if (isCorrect(p)) return p;

  function getCorrect(p) {
    // console.log(p)
    if (!p.length) return '';
      let result = '';
    const [u, v] = getUV(p);
    // console.log("u:", u, "v:",v);

    // u 올바르면 그대로
    if (isCorrect(u)) {
    //   answer += u;
    // getCorrect(v);
        return u + getCorrect(v);
    } else {
      // 틀리면 처리
      // // 맨 앞과 뒤 삭제
      // const newU = u.substring(1, u.length - 1);
      // // 처리
      // answer += "(" + convert(newU) + ")";
        const removedU = u.substring(1, u.length-1);
        return "(" + getCorrect(v) + ')' + convert(removedU);
    }
    // if (isCorrect(v)) {
    //   answer += v;
    // } else {
    //   getCorrect(v);
    // }
  }

  return getCorrect(p);
}

function isCorrect(str) {
  let state = 0;
  for (const c of str) {
    if (c === "(") {
      state++;
    } else {
      if (state > 0) state--;
      else return false;
    }
  }
  return true;
}

function getUV(p) {
  // u,v 로 나눌 인덱스 찾기
  let splitIndex = 0;
  let open = 0;
  let close = 0;
  // u, v로 나눈다. u는 균형잡혔고 더 이상 분리 불가, v는 빈 문자열 가능
  const first = p[0];

  if (first === "(") {
    open++;
  } else {
    close++;
  }
  // u, v를 나누는 기준점 찾기
  while (open !== close) {
    splitIndex++;
    if (p[splitIndex] === "(") {
      open++;
    } else {
      close++;
    }
  }
  return [p.substr(0, splitIndex + 1), p.substr(splitIndex + 1)];
}

function convert(p) {
  let result = "";
  for (const c of p) {
    if (c === "(") {
      result += ")";
    } else {
      result += "(";
    }
  }
  return result;
}
