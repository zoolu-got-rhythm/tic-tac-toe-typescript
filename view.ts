

// import { minimax } from "./minimax";




// const does not freeze an arrays elements in place
const gameBoard: string[] = ["", "", "",    "", "", "",    "", "", ""];

let gameBoardContainer = document.createElement("div");
gameBoardContainer.style.height = "300px";
gameBoardContainer.style.width = "300px";
gameBoardContainer.style.background = "yellow";

document.body.appendChild(gameBoardContainer);

// @ts-ignore
let viewTileIsOccupied: boolean[] = new Array(9).fill(false);




function initView(){
    gameBoardContainer.innerHTML = "";
    gameBoard.forEach((tile: string, index: number, tilesArr: string[])=>{
        let domTile = document.createElement("div");
        domTile.style.width = "100px";
        domTile.style.height = "100px";
        domTile.style.cssFloat = "left";
        // domTile.style.margin = "0px auto";
        domTile.style.textAlign = "center";
        domTile.id = "tile-" + index;
        domTile.className = "tile";

        if(index % 2 === 0){
            domTile.style.background = "#aaa";
        }else{
            domTile.style.background = "#eee";
        }
        gameBoardContainer.appendChild(domTile);

        domTile.addEventListener("click", function(e: Event){
            console.log(index);
            if(gameBoard[index] === ""){
                gameBoard[index] = "o";
                render();

                window.setTimeout(()=>{
                    let bestPositionForAiOnBoard = minimax(gameBoard, "x");
                    gameBoard[bestPositionForAiOnBoard.index] = "x";
                    render();
                }, 500);

            }
        });
        
        domTile.addEventListener("mouseenter", function (e: Event) {
            let tile = document.getElementById("tile-"+index);
            tile.style.background = viewTileIsOccupied[index] === true ? "red" : "lime";
            tile.style.cursor = "pointer";
        });

        domTile.addEventListener("mouseleave", function (e: Event) {
            let tile = document.getElementById("tile-"+index);
            tile.style.background = index % 2 === 0 ? "#aaa" : "#eee";
        });
    });
}

function render() {

    gameBoard.forEach((tile: string, index: number, tilesArr: string[]) => {
        if (tile !== "" && viewTileIsOccupied[index] !== true) {
            let canvas = document.createElement("canvas");
            canvas.height = 100;
            canvas.width = 100;
            gameBoardContainer.childNodes[index].appendChild(canvas);

            let ctx = canvas.getContext("2d");
            ctx.lineWidth = 10;
            if (tile == "o") {
                viewTileIsOccupied[index] = true;
                (() => {
                    ctx.beginPath();
                    let centre = 100 / 2;
                    let radius = 100 / 3;

                    let steps = 10;
                    let i = 0;

                    let anim = window.setInterval(() => {
                        let radian = (2 * Math.PI) * (i / steps);
                        let x = centre + radius * Math.cos(radian);
                        let y = centre + radius * Math.sin(radian);

                        if (i == 0) {
                            ctx.moveTo(x, y);
                        } else {
                            ctx.lineTo(x, y);
                        }
                        ctx.stroke();

                        if (i == steps) {
                            console.log("stopped");
                            window.clearInterval(anim);
                        }

                        i++;
                    }, 1000 / 25);
                })();
                // ctx.fillRect(20, 20, 50, 50);
            }

            if(tile == "x"){
                viewTileIsOccupied[index] = true;
                let drawDiagLine = (direction) => {
                    ctx.beginPath();
                    let centre = 100 / 2;
                    let radius = 100 / 3;

                    let steps = 100;
                    let i = 0;

                    let anim = window.setInterval(() => {
                        let percentage = (i / steps);
                        console.log(percentage);

                        let x;
                        let y;

                        if(direction === "left-to-right"){
                            x = (centre - radius) + ((100 - ((centre - radius) * 2)) * percentage);
                            y = (centre - radius) + ((100 - ((centre - radius) * 2)) * percentage);
                        }

                        if(direction === "right-to-left"){
                            x =  (centre + radius) - ((100 - ((centre - radius) * 2)) * percentage);
                            y = (centre - radius) + ((100 - ((centre - radius) * 2)) * percentage);
                            console.log(x, y);
                        }


                        if (i == 0) {
                            ctx.moveTo(x, y);
                        } else {
                            ctx.lineTo(x, y);
                        }
                        ctx.stroke();

                        if (i == steps) {
                            console.log("stopped");
                            window.clearInterval(anim);
                            if(direction === "left-to-right")
                                drawDiagLine("right-to-left");
                        }

                        i+=10;
                    }, 1000 / 25);
                };
                drawDiagLine("left-to-right");
            }
        }
    });
};



initView();



