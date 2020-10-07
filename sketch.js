var plant;

function setup() {
  createCanvas(800,400);
  plant = createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}