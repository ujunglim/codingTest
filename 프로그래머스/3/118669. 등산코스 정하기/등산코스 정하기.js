class Heapq {
  constructor() {
    this.heap = [null];
  }

  heappush(data) {
    const [intensity, node] = data;
    let current = this.heap.length;
    while (current > 1) {
      const parent = Math.floor(current / 2);
      if (this.heap[parent].intensity > intensity) {
        this.heap[current] = this.heap[parent];
        current = parent;
      } else {
        break;
      }
    }
    this.heap[current] = { intensity: intensity, node: node };
  }

  heappop() {
    let min = this.heap[1];

    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);

      let current = 1;
      let leftChildIndex = current * 2;
      let rightChildIndex = current * 2 + 1;

      while (this.heap[leftChildIndex]) {
        let childIndexToCompare = leftChildIndex;
        if (
          this.heap[rightChildIndex] &&
          this.heap[rightChildIndex].intensity <
            this.heap[childIndexToCompare].intensity
        ) {
          childIndexToCompare = rightChildIndex;
        }
        if (
          this.heap[current].intensity >
          this.heap[childIndexToCompare].intensity
        ) {
          [this.heap[current], this.heap[childIndexToCompare]] = [
            this.heap[childIndexToCompare],
            this.heap[current],
          ];
          current = childIndexToCompare;
        } else {
          break;
        }
        leftChildIndex = current * 2;
        rightChildIndex = current * 2 + 1;
      }
    } else if (this.heap.length === 2) {
      this.heap.splice(1, 1);
    } else {
      return null;
    }
    return min;
  }
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
      // 부모 > 현재이면 둘을 swap
      if (this.heap[parentIndex].intensity > intensity) {
        //////////////////// swap
        this.heap[currIndex] = this.heap[parentIndex];
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
function solution(n, paths, gates, summits) {
  // 작은정상 우선
  summits.sort((a, b) => a - b);
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

