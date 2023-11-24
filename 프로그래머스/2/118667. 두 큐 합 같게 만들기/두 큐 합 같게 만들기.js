class Node {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor(list = []) {
    this.head = null;
    this.p = this.head;
    list.forEach((element) => this.enqueue(element));
    this.size = 0;
  }

  enqueue(element) {
    const newNode = new Node(element);
    if (!this.head) {
      this.head = newNode;
      this.p = newNode;
    } else {
      this.p.next = newNode;
      this.p = this.p.next;
    }
    this.size++;
  }

  dequeue() {
    const dequeueValue = this.head.value;
    this.head = this.head.next;
    this.size--;
    return dequeueValue;
  }
}

function solution(queue1, queue2) {
  let answer = -1;
  const n = queue1.length;
  let sum1 = queue1.reduce((acc, curr) => acc + curr, 0);
  let sum2 = queue2.reduce((acc, curr) => acc + curr, 0);
  const q1 = new Queue(queue1);
  const q2 = new Queue(queue2);

  while (answer < 3 * n) {
    answer++;
    if (sum1 === sum2) {
      return answer;
    }
    if (sum1 < sum2) {
      const dequeueValue = q2.dequeue();
      q1.enqueue(dequeueValue);
      sum1 += dequeueValue;
      sum2 -= dequeueValue;
    } else {
      const dequeueValue = q1.dequeue();
      q2.enqueue(dequeueValue);
      sum1 -= dequeueValue;
      sum2 += dequeueValue;
    }
  }
  return sum1 === sum2 ? answer : -1;
}