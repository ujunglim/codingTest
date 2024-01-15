// function solution(n, k, enemy) {
//     var answer = 0;
//     const heap = new MaxHeap(); // 최대 병사 순으로 저장하는 최대힙
    
//     for (const e of enemy) {
//         heap.push(e); // 사용한 병사 수 추가
//         n -= e; // 병사수 감소
//         // 남은 병사가 없는 경우
//         if (n < 0) {
//             // 무적권이 없으면 종료
//             if (!k) break; 
//             // 무적권이 있으면 사용
//             n += heap.pop(); // 병사 다시 추가
//             k--; 
//         } 
//         answer++; // 라운드 추가
//     }
//     return answer;
// }

// class MaxHeap {
//     constructor() {
//         this.arr = [];
//     }
//     getParentIndex = (i) => Math.floor((i-1)/2);
//     getLeftChildIndex = (i) => i*2+1;
//     getRightChildIndex = (i) => i*2+2;
    
//     push(i) {
//         this.arr.push(i); // 배열 마지막에 새로운 값 추가
//         this.heapifyUp(i); // 아래에서 위로 정렬
//     }
    
//     pop() {
//         if (!this.arr.length) return null; // pop할 원소가 없는 경우
//         const removed = this.arr[0];
//         this.arr[0] = this.arr.pop(); // 마지막 노드를 최상위노드로 변경
//         this.heapifyDown(0); // 위에서 아래로 정렬
//         return removed;
//     }
    
//     heapifyUp(i) {
//         if (i) {
//             const parentIndex = this.getParentIndex(i);
        
//             if (this.arr[parentIndex] < this.arr[i]) {
//                 const temp = this.arr[parentIndex];
//                 this.arr[parentIndex] = this.arr[i];
//                 this.arr[i] = temp;
//                 this.heapifyUp(parentIndex);
//             }
//         }
//     }
    
//     heapifyDown(i) {
//         const leftChildIndex = this.getLeftChildIndex(i);
//         if (leftChildIndex >= this.arr.length) return; // 왼쪽자식노드가 없으면 리턴
//         const rightChildIndex = this.getRightChildIndex(i);
        
//         // 더 작은 자식 찾기
//         let smallerChildIndex = leftChildIndex;
//         if (this.arr[leftChildIndex] > this.arr[rightChildIndex]) {
//             smallerChildIndex = rightChildIndex;
//         }
        
//         if (this.arr[i] < this.arr[smallerChildIndex]) {
//             const temp = this.arr[i];
//             this.arr[i] = this.arr[smallerChildIndex];
//             this.arr[smallerChildIndex] = temp;
//             this.heapifyDown(smallerChildIndex);
//         }
        
//     }
    
// }

function solution(n, k, enemy) {
  let result = 0;
  const heap = new MaxHeap();
  for (const e of enemy) {
    heap.push(e);
    n -= e;
    if (n < 0) {
      if (k <= 0) break;
      n += heap.pop();
      --k;
    }
    ++result;
  }
  return result;
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }

  push(v) {
    this.heap.push(v);
    let i = this.size() - 1;
    let parentI = Math.floor((i - 1) / 2);
    while (i > 0 && this.heap[i] > this.heap[parentI]) {
      this.swap(i, parentI);
      i = parentI;
      parentI = Math.floor((i - 1) / 2);
    }
  }

  pop() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();

    const maxV = this.heap[0];
    this.heap[0] = this.heap.pop();

    let i = 0;
    while (i < this.size()) {
      const leftI = i * 2 + 1;
      const rightI = i * 2 + 2;
      let big = leftI;
      if (rightI < this.size() && this.heap[leftI] < this.heap[rightI]) {
        big = rightI;
      }
      if (this.heap[big] > this.heap[i]) {
        this.swap(big, i);
      }
      i = big;
    }

    return maxV;
  }
}