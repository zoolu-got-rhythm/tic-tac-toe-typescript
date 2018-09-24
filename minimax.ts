
// can make enum ?
const aiPlayer = "x";
const huPlayer = "o";

interface BestMove {
    index?: number;
    functionsCallsMade?: number;
    score: number;
}

// const does not freeze an arrays elements in place
const gameBoard: string[] = ["x", "o", "",    "o", "", "",    "", "", ""];
let fcs = 0;

// this function isn't pure
export function minimax(board: string[], player: string, fcsCounterReference?: number): BestMove {
    if(typeof fcsCounterReference !== "undefined")
        fcsCounterReference++;

    const availablePositions: number[] = availablePositionsOnBoard(board);

    // terminal states
    if(winning(board, aiPlayer)){
        return <BestMove>({
            score: +10,
            functionsCallsMade: 1
        });
    }

    if(winning(board, huPlayer)){
        return <BestMove>{
            score: -10,
            functionsCallsMade: 1
        }
    }

    if(availablePositions.length === 0){
        return <BestMove>{
            score: 0,
            functionsCallsMade: 1
        }; // draw
    }


    let moves: BestMove[] = [];
    for(let i: number = 0; i < availablePositions.length; i++){
        let move: BestMove = {
            index: availablePositions[i],
            score: undefined
        };

        // may be better to copy board rather than mutate it
        gameBoard[move.index] = player;
        let result: BestMove = minimax(gameBoard, player === aiPlayer ? huPlayer : aiPlayer);
        move.score = result.score;
        move.functionsCallsMade = result.functionsCallsMade;

        gameBoard[move.index] = ""; // reset pos of gameboard to original state

        moves.push(move);
    }

    let bestMove: number;

    if(player === aiPlayer){
        let score = -20; // arbitrary negative number
        for(let i: number = 0; i < moves.length; i++){
            if(moves[i].score > score){
                score = moves[i].score;
                bestMove = i;
            }
        }
    }

    if(player === huPlayer){
        let score = 20; // arbitrary positive number
        for(let i: number = 0; i < moves.length; i++){
            if(moves[i].score < score){
                score = moves[i].score;
                bestMove = i;
            }
        }
    }

    // @ts-idsafdasfgsanore
    let nOfFcsMade: number[] = moves.map((ele: BestMove)=>{return ele.functionsCallsMade});

    let sumOfFcsMade: number = nOfFcsMade.reduce(
        function(prev: number, current: number, i, v){
            return prev + current
        });

    moves[bestMove].functionsCallsMade = sumOfFcsMade + 1;

    return moves[bestMove];
}


// find indexes of free slots on board
const availablePositionsOnBoard = (gameboard: string[]): number[] => {
    return gameboard
        .map((ele: string, index: number, arr: string[])=>{
        if(ele !== aiPlayer && ele !== huPlayer)
            return index;
        })
        .filter((ele: any) => typeof ele !== "undefined");
};

console.log(availablePositionsOnBoard(gameBoard));

function winning(board, player): boolean{
    if (
        (board[0] == player && board[1] == player && board[2] == player) ||
        (board[3] == player && board[4] == player && board[5] == player) ||
        (board[6] == player && board[7] == player && board[8] == player) ||
        (board[0] == player && board[3] == player && board[6] == player) ||
        (board[1] == player && board[4] == player && board[7] == player) ||
        (board[2] == player && board[5] == player && board[8] == player) ||
        (board[0] == player && board[4] == player && board[8] == player) ||
        (board[2] == player && board[4] == player && board[6] == player)
    ) {
        return true;
    } else {
        return false;
    }
}

let bestPositionForAi = minimax(gameBoard, aiPlayer);
console.log(fcs);
console.log(bestPositionForAi);
console.log(bestPositionForAi.functionsCallsMade);