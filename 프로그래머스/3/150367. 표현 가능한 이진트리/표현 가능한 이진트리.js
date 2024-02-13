function solution(numbers) {
    const answer = [];
    for (let number of numbers) {
        //이진수 변환
        let bi_num = number.toString(2);
        let n = bi_num.length;
        //이진트리를 만들기 위한 노드 개수
        let m = n.toString(2).length
        // 이진수 앞에 0 추가
        let bi_tree = '0'.repeat(2**m-1 - n);
        bi_tree = bi_tree + '' + bi_num;
        if (checkBTree(bi_tree, 0, bi_tree.length-1)) {
            answer.push(1);
        }
        else {
            answer.push(0);
        }
    }
    return answer;
}

function checkBTree (b_str, start, end) {
    //부모 노드 idx
    const mid = Math.floor((start+end) / 2);
    //자식 노드 idx
    const left_c = Math.floor((start + mid-1)/2);
    const right_c = Math.floor((mid+1 + end)/2);
    
    //리프노드 도달
    if (start == end) {
        return true;
    }
    
    //부모가 0 인데 자식에 1이 있으면 안됨 -> 이 경우 false 를 반환
    if (b_str[mid] === '0' && ((b_str[left_c] === '1') || (b_str[right_c] === '1'))) {
        return false;
    }

    if (!checkBTree(b_str, start, mid-1)) return false;
    if (!checkBTree(b_str, mid+1, end)) return false;
    return true;
}