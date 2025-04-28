let currMoleTile;
let currPlantTile;
let score=0;
let gameOver=false;

window.onload=function(){//whwnever we load the page this function is called
    setGame();
}

function setGame(){

    //we are going to setup the(grid) game board in html(3x3 that is 3 rows and 3 columns)
    for(let i=0;i<9;i++){
    //<div id="0-8"></div> this will be created with id from 0 t0 8
    let tile=document.createElement("div");
    tile.id=i.toString(); //id is set as string from 0-8
    tile.addEventListener("click", selectTile);//to check if we are clicking mole or plant if we click mole it will call the fn selecttile
    document.getElementById("board").appendChild(tile);//these 9 div going to be creted inside the board div whenever the page is loaded
    }

    setInterval(setMole,1000);//1000 millisecond=1seconds  so every 2s setmole function is called and the mole will be placed on the tile
    setInterval(setPlant,2000);
}

function getRandomTile(){
    //math.random generate random numbers between(0-1) and multiply by 9 gives random number b/w (0-9)--> round down to (0-8) integers
    let num=Math.floor(Math.random() * 9);
    return num.toString();//we return it as string because the tile as id as string so we can use to generate the mole on the string
}


function setMole(){
     
    if(gameOver){//if game over is true then we should not set the mole
        return;
    }

//we need to clear the previous mole that appeared
if(currMoleTile){
    currMoleTile.innerHTML=" ";
}

    //we are creating an imag tag

    let mole=document.createElement("img");
    mole.src="./images/mole-1.png";

    //next we are going to randomly place the mole in the random number tiles
    //so, we are going to generate random numbers

    let num=getRandomTile();//random numbers
    if(currPlantTile && currPlantTile.id == num){
        return;//if they have both have same numbers we dont put mole on the tile
    }
    currMoleTile=document.getElementById(num);//we are getting a random title that is div tag and append img on that
    currMoleTile.appendChild(mole);

    
}

function setPlant(){
    if(gameOver){
        return;
    }
    if(currPlantTile){
        currPlantTile.innerHTML=" ";
    }

    let plant= document.createElement("img");
    plant.src="./images/plant-1.png";

    let num=getRandomTile();
    if(currMoleTile && currMoleTile.id==num){
        return;
    }
    currPlantTile=document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile(){
    if(gameOver){
        return;
    }
    // this refers to the tile we clicked we are checking that we clicked the tile that is equal to currmoletile
    if(this == currMoleTile){
        score +=10;
        document.getElementById("score").innerText=score.toString();//it updates the score
    }
    else if(this == currPlantTile){
        document.getElementById("score").innerText="GAME OVER:" + score.toString();
        gameOver=true;
    }
}