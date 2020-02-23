var cheeta , c1
var edges
var fire , f1
var deer , d1
var cam1

function preload() {
  backgroundImg = loadImage("BG.jpg");
  cheeta = loadAnimation("ch1.png","ch2.png","ch3.png","ch4.png","ch5.png","ch6.png")
  fire = loadAnimation("f1.png","f2.png")
  deer = loadAnimation("an1.png","an2.png","an3.png","an4.png","an5.png","an6.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  c1 = createSprite(windowWidth-10, 200, 50, 50);
  c1.addAnimation("cAnim",cheeta)
  c1.scale = 2
  cam1 = createCamera()
  cam1.setPosition(windowWidth,windowHeight)
  
  edges = createEdgeSprites();

}

function draw() {
  background(backgroundImg) 
  c1.collide(edges[3]) 
  camera.position.x = c1.x
  if(keyDown("space")&&c1.y>=562)
  {c1.velocityY = -10}
  c1.velocityY = c1.velocityY+0.8
  if(keyWentDown("a"))
  {c1.velocityX = -4}
  if(keyWentUp("a"))
  {c1.velocityX = 0}
  //console.log(c1.y)
  SpawnFire();
  SpawnDeers();
  drawSprites();
  
}

function SpawnFire(){
  var rand = Math.round(random(50,750))
  var r1 = Math.round(random(20,30))
  if(frameCount%r1===0)
  {
    f1 = createSprite(100,windowHeight,10,10)
    f1.addAnimation("fAnim",fire)
    f1.velocityY = -10
    f1.x = rand
    f1.scale = 0.8
  }
}

function SpawnDeers(){
  var rand1 = Math.round(random(30,60))
  if(frameCount%rand1===0)
  {
  d1 = createSprite(windowWidth-10, windowHeight-20, 50, 50)
  d1.addAnimation("dAnim",deer)
  d1.collide(edges[3])
  d1.velocityX = random(-3,-7)
  c1.depth = d1.depth+1
  }
  
}