// // 1~n, 출입구, 쉼터, 산봉우리, 양방향
// // intensity: 휴식없이 이동하는 최장시간
// // 출입구중 한 곳에서 출발, 산봉우리 한곳만 방문 후 다시 원래 출입구로 돌아옴
// // intensity가 최소가 되는 [산봉우리번호, intensity 최소값] 리턴, intensity최소가 여러개이면 낮은 산봉우리

// // 올라갔던 길을 다시 그대로 내려오면 된다
// // 한 출입구에서 한 산봉우리까지 갈 수 있는 경우들 intensity 정리
// // 최소 intensity 찾기
// function solution(n, paths, gates, summits) {
//     var answer = [];
//     summits.sort((a, b) => a-b); // 낮은 산봉우리부터 
//     const isSummit = new Set(summits); // 산봉우리인지 확인 O(1)
    
//     // 양방향 그래프 정리 {'1': [ { to: 2, intensity: 3 } ]}
//     const graph = {};
//     paths.forEach(([from, to, intensity]) => {
//         // 새로운 노드면 초기화
//         if (!graph[from]) graph[from] = [];
//         if (!graph[to]) graph[to] = [];
//         // 노드 당 연결된 path
//         graph[from].push({nextNode: to, nextIntensity: intensity});
//         graph[to].push({nextNode: from, nextIntensity: intensity});
//     })
    
//     const minQ = new MinHeap();
//     const intensityArr = Array.from({length: n+1}, () => Infinity); // i번 노드까지 가는데 필요한 최대 intensity
    
//     // 출입구부터 큐에 넣고 초기화한다
//     for (const gate of gates) {
//         minQ.push({currIntensity: 0, currNode: gate});
//         intensityArr[gate] = 0; // 출입구의 가중치는 0
//     }
    
//     while(minQ.size) {
//         const {currNode, currIntensity} = minQ.pop(); // 현재노드, 현재노드 까지 필요한 최대가중치
        
//         // 현재노드가 정상이거나 현재 가중치 > 기존 가중치이면 현재노드에서 탐색을 멈춘다. /////////////
//         if (isSummit(currNode) || currIntensity > intensityArr[currNode]) {
//             continue;
//         }
        
//         // 현재노드와 연결된 다음 노드들을 순회한다
//         for (const {nextNode, nextIntensity} of graph[currNode]) {
//             // 현재노드에서 다음노드로 가는 가중치와 현재까지 최대가중치 중 큰 값은 새로운 가중치이다.
//             const newIntensity = Math.max(nextIntensity, currIntensity);
//             // 새로운 가중치 < 기존의 가중치이면 
//             if (newIntensity < intensityArr[nextNode]) {
//                 // 기존의 가중치를 새로운 가중치로 갱신하고
//                 intensityArr[nextNode] = newIntensity;
//                 // 다음노드와 새로운 가중치를 큐에 추가한다. ////////////
//                 minQ.push({currIntensity: newIntensity, currNode: newNode}); 
//             }
//         }
//     }
    
//     console.log(intensityArr);
//     return answer;
// }

// class MinHeap {
//   constructor() {
//     this.heap = [null];
//   }

//   push(data) {
//     const { intensity, node } = data; ////////// {}
//     let currIndex = this.heap.length;

//     // 부모노드가 존재할때 현재노드의 제 위치를 찾는다
//     while (currIndex > 1) {
//       const parentIndex = Math.floor(currIndex / 2);
//       // 부모 > 현재이면 swap
//       if (this.heap[parentIndex].intensity > intensity) {
//         [this.heap[currIndex], this.heap[parentIndex]] = [
//           this.heap[parentIndex],
//           this.heap[currIndex],
//         ];
//         currIndex = parentIndex;
//       } else {
//         break;
//       }
//     }
//     this.heap[currIndex] = { intensity, node };
//   }

//   pop() {
//     const min = this.heap[1];

//     // 자식노드가 있을떄
//     if (this.heap.length > 2) {
//       // 마지막 노드를 최상위 노드로 올려준다
//       this.heap[1] = this.heap.pop();
//       let currIndex = 1;
//       let leftChildIndex = currIndex * 2;
//       let rightChildIndex = currIndex * 2 + 1;

//       // 자식이 있을 때
//       while (this.heap[leftChildIndex]) {
//         // 두 자식중 intensity최소자식 구하기
//         let smallerChildIndex = leftChildIndex;
//         if (
//           this.heap[rightChildIndex] &&
//           this.heap[leftChildIndex].intensity >
//             this.heap[rightChildIndex].intensity
//         ) {
//           smallerChildIndex = rightChildIndex;
//         }
//         // 부모 > 최소자식이면 둘을 swap
//         if (
//           this.heap[currIndex].intensity >
//           this.heap[smallerChildIndex].intensity
//         ) {
//           [this.heap[currIndex], this.heap[smallerChildIndex]] = [
//             this.heap[smallerChildIndex],
//             this.heap[currIndex],
//           ];
//           currIndex = smallerChildIndex;
//         } else {
//           break;
//         }
//         leftChildIndex = currIndex * 2;
//         rightChildIndex = currIndex * 2 + 1;
//       }
//       return min;
//     } else if (this.heap.length === 2) {
//       this.heap.pop();
//     } else {
//       return null;
//     }
//     return min;
//   }
// }
// https://school.programmers.co.kr/learn/courses/30/lessons/118669
// 1~n, 출입구, 쉼터, 산봉우리, 양방향
// intensity: 휴식없이 이동하는 최장시간
// 출입구중 한 곳에서 출발, 산봉우리 한곳만 방문 후 다시 원래 출입구로 돌아옴
// intensity가 최소가 되는 [산봉우리번호, intensity 최소값] 리턴, intensity최소가 여러개이면 낮은 산봉우리

// 올라갔던 길을 다시 그대로 내려오면 된다
// 한 출입구에서 한 산봉우리까지 갈 수 있는 경우들 intensity 정리
// 최소 intensity 찾기

function solution(n, paths, gates, summits) {
  summits.sort((a, b) => a - b); // 작은정상 우선
  const summitSet = new Set(summits); // 정상인지 판단할때 사용

  // 그래프 정리
  const graph = {};
  paths.forEach(([fromNode, toNode, intensity]) => {
    // fromNode라는 key가 graph에 없다면 초기화
    if (!(fromNode in graph)) {
      graph[fromNode] = [];
    }
    if (!(toNode in graph)) {
      graph[toNode] = [];
    }
    graph[fromNode].push({ nextNode: toNode, nextIntensity: intensity });
    graph[toNode].push({ nextNode: fromNode, nextIntensity: intensity });
  });

  // 가중치 작은 순서대로 큐에 넣어주고 빼주기 위해서 min heap을 사용한다.
  const minQueue = new MinHeap();
  const intensityArr = Array.from({ length: n + 1 }, () => Infinity); // 10000001

  // 먼저 출입구부터 큐에 넣는다
  gates.forEach((gate) => {
    minQueue.heap.push({ intensity: 0, node: gate });
    intensityArr[gate] = 0;
  });

  while (minQueue.heap.length > 1) {
    const { intensity: currIntensity, node } = minQueue.pop();

    // 현재 가중치가 기존 가중치보다 크거나 이미 정상에 도착하면 새로운 노드를 큐에 넣지 않는다 (정상은 하나이면 되기때문)
    if (currIntensity > intensityArr[node] || summitSet.has(node)) {
      continue;
    }

    // 그래프에 없는 노드일때
    if (!(node in graph)) {
      continue;
    }

    // 이웃 노드를 순회하며 가중치를 비교한다.
    graph[node].forEach(({ nextIntensity, nextNode }) => {
      const newIntensity = Math.max(currIntensity, nextIntensity); // 현재 가중치, 새로운 가중치 비교
      // 새로운 가중치가 기존보다 작으면 가중치 갱신하고 큐에 넣는다
      if (newIntensity < intensityArr[nextNode]) {
        intensityArr[nextNode] = newIntensity;
        minQueue.push({ node: nextNode, intensity: newIntensity });
      }
    });
  }
  // 정상
  const answer = [0, Infinity];
  summits.forEach((summit) => {
    if (intensityArr[summit] < answer[1]) {
      answer[0] = summit;
      answer[1] = intensityArr[summit];
    }
  });
  return answer;
}

// 작은intensity 순으로 정렬하는 minHeap
class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(data) {
    const { intensity, node } = data; ////////// {}
    let currIndex = this.heap.length;

    // 부모노드가 존재할때 현재노드의 제 위치를 찾는다
    while (currIndex > 1) {
      const parentIndex = Math.floor(currIndex / 2);
      // 부모 > 현재이면 swap
      if (this.heap[parentIndex].intensity > intensity) {
        [this.heap[currIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currIndex],
        ];
        currIndex = parentIndex;
      } else {
        break;
      }
    }
    this.heap[currIndex] = { intensity, node };
  }

  pop() {
    const min = this.heap[1];

    // 자식노드가 있을떄
    if (this.heap.length > 2) {
      // 마지막 노드를 최상위 노드로 올려준다
      this.heap[1] = this.heap.pop();
      let currIndex = 1;
      let leftChildIndex = currIndex * 2;
      let rightChildIndex = currIndex * 2 + 1;

      // 자식이 있을 때
      while (this.heap[leftChildIndex]) {
        // 두 자식중 intensity최소자식 구하기
        let smallerChildIndex = leftChildIndex;
        if (
          this.heap[rightChildIndex] &&
          this.heap[leftChildIndex].intensity >
            this.heap[rightChildIndex].intensity
        ) {
          smallerChildIndex = rightChildIndex;
        }
        // 부모 > 최소자식이면 둘을 swap
        if (
          this.heap[currIndex].intensity >
          this.heap[smallerChildIndex].intensity
        ) {
          [this.heap[currIndex], this.heap[smallerChildIndex]] = [
            this.heap[smallerChildIndex],
            this.heap[currIndex],
          ];
          currIndex = smallerChildIndex;
        } else {
          break;
        }
        leftChildIndex = currIndex * 2;
        rightChildIndex = currIndex * 2 + 1;
      }
      return min;
    } else if (this.heap.length === 2) {
      this.heap.pop();
    } else {
      return null;
    }
    return min;
  }
}
