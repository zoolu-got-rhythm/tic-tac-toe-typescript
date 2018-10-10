// import { minimax } from "./minimax";
// const does not freeze an arrays elements in place
var gameBoard = ["", "", "", "", "", "", "", "", ""];
var gameBoardContainer = document.createElement("div");
gameBoardContainer.style.height = "300px";
gameBoardContainer.style.width = "300px";
gameBoardContainer.style.background = "yellow";
document.body.appendChild(gameBoardContainer);
// @ts-ignore
var viewTileIsOccupied = new Array(9).fill(false);
function initView() {
    gameBoardContainer.innerHTML = "";
    gameBoard.forEach(function (tile, index, tilesArr) {
        var domTile = document.createElement("div");
        domTile.style.width = "100px";
        domTile.style.height = "100px";
        domTile.style.cssFloat = "left";
        // domTile.style.margin = "0px auto";
        domTile.style.textAlign = "center";
        domTile.id = "tile-" + index;
        domTile.className = "tile";
        if (index % 2 === 0) {
            domTile.style.background = "#aaa";
        }
        else {
            domTile.style.background = "#eee";
        }
        gameBoardContainer.appendChild(domTile);
        domTile.addEventListener("click", function (e) {
            console.log(index);
            if (gameBoard[index] === "") {
                gameBoard[index] = "o";
                render();
                window.setTimeout(function () {
                    var bestPositionForAiOnBoard = minimax(gameBoard, "x");
                    gameBoard[bestPositionForAiOnBoard.index] = "x";
                    render();
                }, 500);
            }
        });
        domTile.addEventListener("mouseenter", function (e) {
            var tile = document.getElementById("tile-" + index);
            tile.style.background = viewTileIsOccupied[index] === true ? "red" : "lime";
            tile.style.cursor = "pointer";
        });
        domTile.addEventListener("mouseleave", function (e) {
            var tile = document.getElementById("tile-" + index);
            tile.style.background = index % 2 === 0 ? "#aaa" : "#eee";
        });
    });
}
function render() {
    gameBoard.forEach(function (tile, index, tilesArr) {
        if (tile !== "" && viewTileIsOccupied[index] !== true) {
            var canvas = document.createElement("canvas");
            canvas.height = 100;
            canvas.width = 100;
            gameBoardContainer.childNodes[index].appendChild(canvas);
            var ctx_1 = canvas.getContext("2d");
            ctx_1.lineWidth = 10;
            if (tile == "o") {
                viewTileIsOccupied[index] = true;
                (function () {
                    ctx_1.beginPath();
                    var centre = 100 / 2;
                    var radius = 100 / 3;
                    var steps = 10;
                    var i = 0;
                    var anim = window.setInterval(function () {
                        var radian = (2 * Math.PI) * (i / steps);
                        var x = centre + radius * Math.cos(radian);
                        var y = centre + radius * Math.sin(radian);
                        if (i == 0) {
                            ctx_1.moveTo(x, y);
                        }
                        else {
                            ctx_1.lineTo(x, y);
                        }
                        ctx_1.stroke();
                        if (i == steps) {
                            console.log("stopped");
                            window.clearInterval(anim);
                        }
                        i++;
                    }, 1000 / 25);
                })();
                // ctx.fillRect(20, 20, 50, 50);
            }
            if (tile == "x") {
                viewTileIsOccupied[index] = true;
                var drawDiagLine_1 = function (direction) {
                    ctx_1.beginPath();
                    var centre = 100 / 2;
                    var radius = 100 / 3;
                    var steps = 100;
                    var i = 0;
                    var anim = window.setInterval(function () {
                        var percentage = (i / steps);
                        console.log(percentage);
                        var x;
                        var y;
                        if (direction === "left-to-right") {
                            x = (centre - radius) + ((100 - ((centre - radius) * 2)) * percentage);
                            y = (centre - radius) + ((100 - ((centre - radius) * 2)) * percentage);
                        }
                        if (direction === "right-to-left") {
                            x = (centre + radius) - ((100 - ((centre - radius) * 2)) * percentage);
                            y = (centre - radius) + ((100 - ((centre - radius) * 2)) * percentage);
                            console.log(x, y);
                        }
                        if (i == 0) {
                            ctx_1.moveTo(x, y);
                        }
                        else {
                            ctx_1.lineTo(x, y);
                        }
                        ctx_1.stroke();
                        if (i == steps) {
                            console.log("stopped");
                            window.clearInterval(anim);
                            if (direction === "left-to-right")
                                drawDiagLine_1("right-to-left");
                        }
                        i += 10;
                    }, 1000 / 25);
                };
                drawDiagLine_1("left-to-right");
            }
        }
    });
}
;
initView();
//# sourceMappingURL=view.js.map