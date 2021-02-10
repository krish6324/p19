var alianShip;
var coinSprite;
var score=0;
var edges;

function preload(){
alianShipImage=loadImage("pngtree-vector-ufo-icon-png-image_3774638.png");
  coin=loadImage("download__1_-removebg-preview.png");
}


function setup() {
  createCanvas(800, 600);
  alianShip=createSprite(150,150,0,0);
alianShip.addImage("load",alianShipImage);
  alianShip.scale=0.3;
  coinSprite=createSprite(350,150,0,0);
coinSprite.addImage("load",coin);
  coinSprite.scale=0.3;
  
  
  
edges=createEdgeSprites();  
}

function draw() {
  background("blue");
  drawSprites();
  if(keyWentDown("up")){
    alianShip.velocityY=-6;
    alianShip.velocityX=0;
    
  }
   if(keyWentDown("down")){
     alianShip.velocityX=0;
    alianShip.velocityY=6;
    
  }
    if(keyWentDown("left")){
    alianShip.velocityX=-6;
      alianShip.velocityY=0;
    
  }
   if(keyWentDown("right")){
    alianShip.velocityX=6;
     alianShip.velocityY=0;
    
  }
  if(alianShip.isTouching(coinSprite)){
    score=score+1;
  coinSprite.x=random(800);
      coinSprite.y=random(600);

  }
      text(score,300,400);
  console.log(score);

    if(alianShip.isTouching(edges)){
    alianShip.velocityX=0;
     alianShip.velocityX=0;
      score=0;
      alianShip.x=200;
      alianShip.y=200;
  }
  
  

}
