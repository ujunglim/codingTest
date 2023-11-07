const onlyAlphabet = /^[a-zA-Z]+$/;
const hasSpace = /\s/g;
const NUM = 65536;

function getOrganizedArr(arr) {
  const resultArr = [];
  // 2글자씩 나누기
  for (let i = 0; i < arr.length - 1; i++) {
    const slicedArr = arr.slice(i, i + 2); // i+2
    const slicedStr = slicedArr.join("");
    // 영문자 이외를 포함하면 버린다
    if (!onlyAlphabet.test(slicedStr) || hasSpace.test(slicedStr)) {
      continue;
    }
    // 소문자로 변경
    const lowerSliced = slicedArr.map((s) => s.toLowerCase()).join("");
    resultArr.push(lowerSliced);
  }
  return resultArr.sort();
}

function solution(str1, str2) {
  var answer = 0;
  const arr1 = getOrganizedArr([...str1]);
  const arr2 = getOrganizedArr([...str2]);
    
  // 둘 다 공집합인 경우
  if (!arr1.length && !arr2.length) {
    return NUM;
  }
  let i = 0;
  let j = 0;
  let intersection = 0;

  // 교집합 구하기
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      intersection++;
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    }
  }
  let unionCount = arr1.length + arr2.length;
  return Math.floor((intersection / (unionCount-intersection)) * NUM);
}