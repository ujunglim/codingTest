// 숫자를 반영
// 100 글자 이내로, 영문 대소문자, 숫자, 공백(" "), 마침표("."), 빼기 부호("-")
// 파일명은 영문자로 시작하며, 숫자를 하나 이상 포함
// head- number- tail
// head는 숫자아닌 문자만 오고 최소 한 글자
function solution(files) {
  var answer = [];
    
    files = files.map(file => file.match(/(\D+)(\d+)/)).sort((a, b) => {
    // 숫자순 정렬
    if (a[1].toLowerCase() === b[1].toLowerCase()) {
      return Number(a[2]) - Number(b[2]);
    }
    if (a[1].toLowerCase() < b[1].toLowerCase()) {
        return -1;
    } 
    if (a[1].toLowerCase() > b[1].toLowerCase()) {
        return 1;
    }
  })

  // files = files.map((file) => {
  //   const number = file.match(numRegex)[0]; // 문자열에서 숫자인 부분만 추출
  //   const [head, tail] = file.split(number); // 숫자로 구분해서 head, tail분리
  //   let lowerHead = head.toLowerCase();
  //   return {
  //     originalHead: head,
  //     head: lowerHead,
  //     originalNumber: number,
  //     number: Number(number),
  //     tail,
  //   };
  // });
    
  // files.sort((a, b) => {
  //     if (a.head > b.head) {
  //         return 1;
  //     } else if (a.head < b.head) {
  //         return -1;
  //     } else {
  //         return a.number - b.number;
  //     }
  // })
  // files.sort((a, b) => {
  //   // 숫자순 정렬
  //   if (a.head === b.head) {
  //     return a.number - b.number;
  //   }
  //   // 사전순 정렬
  //   // return a.head.localeCompare(b.head);
  //   if (a.head < b.head) {
  //       return -1;
  //   } 
  //   if (a.head > b.head) {
  //       return 1;
  //   }
  // });
    console.log(files)
    return files.map(file => file.input)

  // answer = files.map((file) => {
  //   const { originalHead, originalNumber, tail } = file;
  //   return originalHead + originalNumber + tail;
  // });

  return answer;
}