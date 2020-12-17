var gameState = 1;

function preload() {
}


function setup() {

  createCanvas(600,725);
  background("pink");

}
function draw() {
 
  fill("white");
  strokeWeight(8);
  rectMode(CENTER);
  rect(525, 665, 100, 100, 20);
  
  if (keyIsDown(32)){ // tried keyDown also
    console.log("Inside if condition")
    //ellipse(100,100,20,20)
    drawDie(525,665)
  }
}


function drawDie(x,y)
{


  side = Math.round(random(1,6))

console.log("inside drawDie")
    if(side === 1 ){
      circle(x, y, 20);
    }else if(side === 2){
      circle(x - 25, y - 25, 20);
      circle(x + 25, y + 25, 20);
    }else if(side === 3){
      circle(x - 25, y - 25, 20);
      circle(x, y, 20);
      circle(x + 25, y + 25, 20);
    }else if(side === 4){
      circle(x - 25, y - 25, 20);
      circle(x + 25, y + 25, 20);
      circle(x - 25, y + 25, 20);
      circle(x + 25, y - 25, 20);
    }else if(side === 5){
      circle(x - 25, y - 25, 20);
      circle(x + 25, y + 25, 20);
      circle(x, y, 20);
      circle(x - 25, y + 25, 20);
      circle(x + 25, y - 25, 20);
    }else if(side === 6){
      circle(x - 25, y - 25, 20);
      circle(x + 25, y + 25, 20);
      circle(x - 25, y + 25, 20);
      circle(x + 25, y - 25, 20);
      circle(x - 25, y, 20);
      circle(x + 25, y, 20);
    
  }

}




