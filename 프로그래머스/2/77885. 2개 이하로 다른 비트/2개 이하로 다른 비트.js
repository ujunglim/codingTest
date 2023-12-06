// // 이진수의 1의 갯수 구하기
// function countOnes(num) {
//   let count = 0;
//   while (num !== 0) {
//     count += num & 1; // num과 1을 비트 AND 연산하여 1이 있는지 확인
//     num >>= 1; // 오른쪽으로 비트 이동하여 다음 비트 확인
//   }
//   return count;
// }

// // 두 이진수의 비트가 1~2개 다른지 아는 함수
// function isOneOrTwoBitsDifferent(num1, num2) {
//   let diff = num1 ^ num2; // 두 숫자를 XOR 연산하여 다른 비트 찾기
//   let count = 0;

//   while (diff !== 0) {
//     count += diff & 1; // diff와 1을 비트 AND 연산하여 1이 있는지 확인
//     diff >>= 1; // 오른쪽으로 비트 이동하여 다음 비트 확인
//   }

//   return count === 1 || count === 2;
// }

// function solution(numbers) {
//     var answer = [];
//     const dp = [];
    
//     numbers.forEach(number => {
//         const originalCount = countOnes(number);
//         let tempNum = number;
//         while(true) {
//             tempNum++;

//             if (isOneOrTwoBitsDifferent(tempNum, number)) {
//                 answer.push(tempNum);
//                 break;
//             }
//         }
//     })
//     return answer;
// }

function solution(numbers) {
    //console.log((1001).toString(2), 2**0)

    return numbers.map((v,i) => {    
        let toStr = v.toString(2).split('').reverse().indexOf('0')
        if(toStr === -1) return v + 2 ** (v.toString(2).length - 1)
        return v + Math.ceil(2 ** (toStr -1))
    });
}