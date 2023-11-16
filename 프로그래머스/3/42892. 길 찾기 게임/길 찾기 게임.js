class Node {
    constructor(x, num) {
        this.x = x;
        this.num = num;
        this.left = null;
        this.right = null;
    }
    insert(x, num) {
        x < this.x 
            ? this.addLeft(x, num)
            : this.addRight(x, num);
    }
    addLeft(x, num) {
        !this.left 
            ? this.left = new Node(x, num)
            : this.left.insert(x, num);
    }
    addRight(x, num) {
        !this.right
            ? this.right = new Node(x, num)
            : this.right.insert(x, num);
    }
}

function preOrder(bt, arr) {
    if (bt) {
        arr.push(bt.num);
        preOrder(bt.left, arr);
        preOrder(bt.right, arr);
    }
    return arr;
}

function postOrder(bt, arr) {
    if (bt) {
        postOrder(bt.left, arr);
        postOrder(bt.right, arr);
        arr.push(bt.num);
    }
    return arr;
}


function solution(nodeinfo) {
    // y레벨별로 내림차순
    const nodeWithNum = nodeinfo.map((node, i) => {
        const [x,y] = node;
        return ({x, y, num: i+1})
    }).sort((a, b) => b.y - a.y);
    
    // 루트부터 이진트리 생성
    const binaryTree = new Node(nodeWithNum[0].x, nodeWithNum[0].num);
    for (let i = 1; i < nodeWithNum.length; i++) {
        const currNode = nodeWithNum[i];
        binaryTree.insert(currNode.x, currNode.num);
    }
    return [preOrder(binaryTree, []), postOrder(binaryTree, [])]
}
    
// 루트서부터 insert해서 제자리를 찾아감