// function solution(n, lost, reserve) {
//     var answer = 0;
    
//     for (let i = 1; i <= n; i++) {
//         // 웃을 lost하지 않았다면
//         if (!lost.includes(i)) {
//             answer++;
//         } else {
//             // 자기자신이 여분있음
//             if (reserve.includes(i)) {
//                 answer++;
//                 reserve = reserve.filter(r => r !== i);
//             }
//             // 왼쪽 사람이 여분있음
//             else if (reserve.includes(i-1)) {
//                 // 여분있는사람이 도난당함
//                 if (lost.includes(i-1)) {
//                     // reserve = reserve.filter((r) => r !==)
//                     continue;
//                 } else {
//                     answer++;
//                     reserve = reserve.filter((r) => r !== (i-1))
//                     // reserve.splice(reserve.indexOf(i-1), 1);
//                 }
//             } 
//             // 오른쪽 사람이 여분있음
//             else if (reserve.includes(i+1)) {
//                 if (lost.includes(i+1)) {
//                     continue;
//                 } else {
//                     answer++;
//                     reserve = reserve.filter((r) => r !== (i+1))
//                     // reserve.splice(reserve.indexOf(i+1), 1);
//                 }
//             }
//         }
//     }
//     return answer;
// }

function solution(n, lost, reserve) {
  var answer = 0;
  let arr = Array.from({ length: n }, (_, i) => ({ count: 1 }));

  // 여분있는 사람
  reserve.forEach((res) => {
    arr[res - 1].count++;
  });
  // 잃어버린 하람
  lost.forEach((lo) => {
    arr[lo - 1].count--;
  });

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    if (curr.count > 0) {
      answer++;
      curr.count--;
      continue;
    } else if (curr.count === 0) {
      const prev = arr[i - 1];
      const next = arr[i + 1];
      console.log(prev, next);
      if (prev && prev.count > 0) {
        answer++;
        prev.count--;
      } else if (next && next.count === 2) {
        answer++;
        next.count--;
      }
    }
  }
  return answer;
}