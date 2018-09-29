// import { minimax } from "./minimax";
// const does not freeze an arrays elements in place
var gameBoard = ["", "", "", "", "", "", "", "", ""];
var gameBoardContainer = document.createElement("div");
gameBoardContainer.style.height = "300px";
gameBoardContainer.style.width = "300px";
gameBoardContainer.style.background = "yellow";
document.body.appendChild(gameBoardContainer);
function render() {
    gameBoardContainer.innerHTML = "";
    gameBoard.forEach(function (tile, index) {
        var domTile = document.createElement("div");
        domTile.style.width = "100px";
        domTile.style.height = "100px";
        domTile.style.cssFloat = "left";
        // domTile.style.margin = "0px auto";
        domTile.style.textAlign = "center";
        domTile.addEventListener("click", function (e) {
            console.log(index);
            if (gameBoard[index] === "") {
                gameBoard[index] = "o";
                var bestPositionForAiOnBoard = minimax(gameBoard, "x");
                gameBoard[bestPositionForAiOnBoard.index] = "x";
            }
            render();
        });
        if (tile !== "") {
        }
        var symbolTextNode = document.createTextNode(tile);
        var font = document.createElement("h2");
        // font.style.strokeWidth = "55px";
        font.style.fontSize = "100px";
        font.style.fontFamily = "arial";
        // font.style.margin = "0px";
        // font.style.padding = "0px";
        font.style.display = "inline";
        font.appendChild(symbolTextNode);
        domTile.appendChild(font);
        if (index % 2 === 0) {
            domTile.style.background = "#aaa";
        }
        else {
            domTile.style.background = "#eee";
        }
        gameBoardContainer.appendChild(domTile);
    });
}
render();
//# sourceMappingURL=view.js.map