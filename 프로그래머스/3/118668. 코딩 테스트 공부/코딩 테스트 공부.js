class Heapq {
    constructor() {
        this.heap = [null];
    }

    heappush(data) {
        const [c_time, c_alp, c_cop] = data;
        let current = this.heap.length;
        while (current > 1) {
            const parent = Math.floor(current / 2);
            if (this.heap[parent].cur_time > c_time) {
                this.heap[current] = this.heap[parent];
                current = parent;
            }
            else {
                break;
            }
        }

        this.heap[current] = { 'cur_time': c_time, 'cur_alp': c_alp, 'cur_cop': c_cop };
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
                if (this.heap[rightChildIndex] && this.heap[rightChildIndex].cur_time < this.heap[childIndexToCompare].cur_time) {
                    childIndexToCompare = rightChildIndex;
                }
                if (this.heap[current].cur_time > this.heap[childIndexToCompare].cur_time) {
                    [this.heap[current], this.heap[childIndexToCompare]] = [this.heap[childIndexToCompare], this.heap[current],];
                    current = childIndexToCompare;
                }
                else {
                    break;
                }
                leftChildIndex = current * 2;
                rightChildIndex = current * 2 + 1;
            }
        }
        else if (this.heap.length === 2) {
            this.heap.splice(1, 1);
        }
        else {
            return null;
        }
        return min;
    }
}

function solution(alp, cop, problems) {
    let answer = 0;
    let max_alp = 0;
    let max_cop = 0;
    problems.forEach(problem => {
        max_alp = max_alp > problem[0] ? max_alp : problem[0];
        max_cop = max_cop > problem[1] ? max_cop : problem[1];
    });

    if (alp >= max_alp && cop >= max_cop) {
        return 0;
    }

    const pq = new Heapq();
    const visited = Array(151).fill().map(() => Array(151).fill(false));

    problems.push([0, 0, 1, 0, 1]);
    problems.push([0, 0, 0, 1, 1]);

    pq.heappush([0, alp, cop]);

    while (pq.heap.length - 1 != 0) {
        const { cur_time, cur_alp, cur_cop } = pq.heappop();
        if (visited[cur_alp][cur_cop]) {
            continue;
        }
        visited[cur_alp][cur_cop] = true;

        if (max_alp <= cur_alp && max_cop <= cur_cop) {
            return cur_time;
        }

        problems.forEach(([alp_req, cop_req, alp_rwd, cop_rwd, cost]) => {
            if (cur_alp >= alp_req && cur_cop >= cop_req) {
                next_alp = cur_alp + alp_rwd < max_alp ? cur_alp + alp_rwd : max_alp;
                next_cop = cur_cop + cop_rwd < max_cop ? cur_cop + cop_rwd : max_cop;
                pq.heappush([cur_time + cost, next_alp, next_cop]);
            }
        });
    }
    answer = 0;
    return answer;
}