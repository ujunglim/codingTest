function solution(n, k, enemy) {
  var answer = 0;
  const heap = new MaxHeap(); // 최대 병사 순으로 저장하는 최대힙

  for (const e of enemy) {
    heap.push(e); // 사용한 병사 수 추가
    n -= e; // 병사수 감소
    // 남은 병사가 없는 경우
    if (n < 0) {
      // 무적권이 없으면 종료
      if (!k) break;
      // 무적권이 있으면 사용
      n += heap.pop(); // 병사 다시 추가
      k--; 
    }
    answer++; // 라운드 추가
  }
  return answer;
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  size = () => this.heap.length; // 큐의 길이
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  getParentI = (i) => Math.floor((i - 1) / 2);
  getLeftI = (i) => i * 2 + 1;
  getRightI = (i) => i * 2 + 2;

  push(i) {
    this.heap.push(i); // 배열 마지막에 새로운 값 추가
    // heapifyUp 아래에서 위로 정렬
    let currI = this.size()-1;
    let parentI = this.getParentI(currI);
    while (currI > 0 && this.heap[currI] > this.heap[parentI]) { 
      this.swap(currI, parentI);
      currI = parentI;
      parentI = this.getParentI(currI);
    }
  }

  pop() {
    if (this.heap.length === 0) return null; // pop할 원소가 없는 경우
    if (this.heap.length === 1) return this.heap.pop();

    const removed = this.heap[0];
    this.heap[0] = this.heap.pop(); // 마지막 노드를 최상위 노드로 변경
    // heapifyDown 위에서 아래로 정렬
    let i = 0;
    while (i < this.size()) { // 주의!
      const leftI = this.getLeftI(i);
      const rightI = this.getRightI(i);
      let bigI = leftI;
      if (this.heap[leftI] < this.heap[rightI]) {
        bigI = rightI;
      }
      if (this.heap[bigI] > this.heap[i]) {
        this.swap(bigI, i);
      }
      i = bigI;
    }
    return removed;
  }
}
// // logn 그리디
// // 병사수가 많을때 무적권쓰고 적을때 싸우고
// function solution(n, k, enemy) {
//     var answer = 0;
//     if (k >= enemy.length) return enemy.length;
//     const maxHeap = new MaxHeap();
   
//     while(answer < enemy.length && (n || k)) {
//         const currEnemyCount = enemy[answer];
//         maxHeap.push(currEnemyCount);
        
//         if (n >= currEnemyCount) {
//             n -= currEnemyCount;
//             continue;
//         } else if (k) {
//             k--;
//             n += maxHeap.pop();
//         }
//     }
//     return answer + 1;
// }
        
// class MaxHeap {
//     constructor() {
//         this.heap = [];
//     }
    
//     getSize() {
//         return this.heap.length
//     };
    
//     swap(a, b) {
//         [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]; 
//     }
    
//     getParentI(n) {
//         return Math.floor((n-1)/2);
//     };
//     getLeftChildI(n) {
//         return (n*2)+1;
//     }
//     getRightChildI(n) {
//         return (n*2)+2;
//     }
    
//     push(n) {
//         this.heap.push(n);
//         let currI = this.getSize()-1;
//         let parentI = this.getParentI(currI);
        
//         while(currI > 0 && this.heap[parentI] < this.head[currI]) {
//             this.swap(parentI, currI);
//             currI = parentI;
//             parentI = this.getParentI(currI);
//         }
//     }
    
//     pop() {
//         if (!this.heap.length) return null
//         if (this.heap.length === 1) return this.heap.pop();
        
//         const removed = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         const leftChildI = this.getLeftChildI(0)
        
//         let currI = 0;
//         while(currI < this.heap.size()) {
//             let leftChildI = this.getLeftChildI(currI);
//             let rightChildI = this.getRightChildI(currI);
            
//             let bigChildI = leftChildI;
//             if (this.heap[leftChildI] < this.heap[rightChildI]) {
//                 bigChildI = rightChildI;
//             }
//             if (this.heap[bigChildI] > this.heap[currI]) {
//                 this.swap(bigChildI, currI);
//             }
//             currI = bigChildI;
//         }
//         return removed;
//     }
// }