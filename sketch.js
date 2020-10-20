var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);
fixedRect = createSprite(400, 400, 50, 100);
movingRect = createSprite(400, 500, 100, 50);
fixedRect.shapeColor = "cyan";
movingRect.shapeColor = "magenta";
}

function draw() {
  background("black");  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
  fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
  movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 && 
  fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 ){
  fixedRect.shapeColor = "yellow";
  movingRect.shapeColor = "yellow";
  }
  else{
  fixedRect.shapeColor = "cyan";
  movingRect.shapeColor = "magenta";
  }
  drawSprites();
}