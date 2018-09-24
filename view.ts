

import {minimax} from "./minimax";

const gameBoard: string[] = ["x", "o", "",    "o", "", "",    "", "", ""];

let gameBoardContainer = document.createElement("div");
gameBoardContainer.style.height = "300px";
gameBoardContainer.style.width = "300px";
gameBoardContainer.style.background = "yellow";

document.body.appendChild(gameBoardContainer);