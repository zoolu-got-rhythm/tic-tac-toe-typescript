"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// can make enum ?
var aiPlayer = "x";
var huPlayer = "o";
// const does not freeze an arrays elements in place
var gameBoard = ["x", "o", "", "o", "", "", "", "", ""];
var fcs = 0;
// this function isn't pure
function minimax(board, player, fcsCounterReference) {
    if (typeof fcsCounterReference !== "undefined")
        fcsCounterReference++;
    var availablePositions = availablePositionsOnBoard(board);
    // terminal states
    if (winning(board, aiPlayer)) {
        return ({
            score: +10,
            functionsCallsMade: 1
        });
    }
    if (winning(board, huPlayer)) {
        return {
            score: -10,
            functionsCallsMade: 1
        };
    }
    if (availablePositions.length === 0) {
        return {
            score: 0,
            functionsCallsMade: 1
        }; // draw
    }
    var moves = [];
    for (var i = 0; i < availablePositions.length; i++) {
        var move = {
            index: availablePositions[i],
            score: undefined
        };
        // may be better to copy board rather than mutate it
        gameBoard[move.index] = player;
        var result = minimax(gameBoard, player === aiPlayer ? huPlayer : aiPlayer);
        move.score = result.score;
        move.functionsCallsMade = result.functionsCallsMade;
        gameBoard[move.index] = ""; // reset pos of gameboard to original state
        moves.push(move);
    }
    var bestMove;
    if (player === aiPlayer) {
        var score = -20; // arbitrary negative number
        for (var i = 0; i < moves.length; i++) {
            if (moves[i].score > score) {
                score = moves[i].score;
                bestMove = i;
            }
        }
    }
    if (player === huPlayer) {
        var score = 20; // arbitrary positive number
        for (var i = 0; i < moves.length; i++) {
            if (moves[i].score < score) {
                score = moves[i].score;
                bestMove = i;
            }
        }
    }
    // @ts-idsafdasfgsanore
    var nOfFcsMade = moves.map(function (ele) { return ele.functionsCallsMade; });
    var sumOfFcsMade = nOfFcsMade.reduce(function (prev, current, i, v) {
        return prev + current;
    });
    moves[bestMove].functionsCallsMade = sumOfFcsMade + 1;
    return moves[bestMove];
}
exports.minimax = minimax;
// find indexes of free slots on board
var availablePositionsOnBoard = function (gameboard) {
    return gameboard
        .map(function (ele, index, arr) {
        if (ele !== aiPlayer && ele !== huPlayer)
            return index;
    })
        .filter(function (ele) { return typeof ele !== "undefined"; });
};
// console.log(availablePositionsOnBoard(gameBoard));
function winning(board, player) {
    if ((board[0] == player && board[1] == player && board[2] == player) ||
        (board[3] == player && board[4] == player && board[5] == player) ||
        (board[6] == player && board[7] == player && board[8] == player) ||
        (board[0] == player && board[3] == player && board[6] == player) ||
        (board[1] == player && board[4] == player && board[7] == player) ||
        (board[2] == player && board[5] == player && board[8] == player) ||
        (board[0] == player && board[4] == player && board[8] == player) ||
        (board[2] == player && board[4] == player && board[6] == player)) {
        return true;
    }
    else {
        return false;
    }
}
// let bestPositionForAi = minimax(gameBoard, aiPlayer);
// console.log(fcs);
// console.log(bestPositionForAi);
// console.log(bestPositionForAi.functionsCallsMade);
//# sourceMappingURL=minimax.js.map