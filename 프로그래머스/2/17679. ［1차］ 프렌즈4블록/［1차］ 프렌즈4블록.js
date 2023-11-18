function solution(m, n, board) {
    var answer = 0;
    board = convertBoard(board)
    while(checkHasMatch(m, n, board)) {
        answer += findMatchCount(m, n, board);
    }
    return answer;
}

function convertBoard(board) {
    return board.map(row => {
        const arr = [];
        for (let i = 0; i < row.length; i++) {
            arr.push(row.charCodeAt(i));
        }
        return arr;
    });
}

function checkHasMatch(m, n, board) {
    let hasMatch = false;
    for (let r = 1; r < m; ++r) {
        for (let c = 1; c < n; ++c) {
            const block1 = board[r][c];
            const block2 = board[r][c-1];
            const block3 = board[r-1][c-1];
            const block4 = board[r-1][c];
            if (
                block1 !== 0 &&
                (block1 === block2 || block1 === -block2) &&
                (block2 === block3 || block2 === -block3) &&
                (block3 === block4 || block3 === -block4)
            ) {
                hasMatch = true;
                board[r][c] = -block1;
                board[r][c-1] = -block1;
                board[r-1][c-1] = -block1;
                board[r-1][c] = -block1;
            }
        }
    }
    return hasMatch;
}

function findMatchCount(m, n, board) {
    let matchedCount = 0;
    for (let c = 0; c < n; c++) {
        let p2 = m-1;
        for (let p1 = m-1; p1 >= 0; --p1) {
            // 매칭이 안 됐다
            if (board[p1][c] > 0) {
                board[p2][c] = board[p1][c]; // 매칭이 안 된 블록을 p2 위치로 내려준다
                p2--;
            } 
            // 매칭이 됐다
            else if (board[p1][c] < 0) {
                matchedCount++;
            }
        }
        while(p2 >= 0) {
            board[p2][c] = 0; // 빈공간
            p2--;
        }
    }
    return matchedCount;
}