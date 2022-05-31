/*--------------------------------------------------------*/
var PLAY = 1;
var END = 0;
var WIN = 2;
var gameState = PLAY;

var trex, trex_running, trex_collided;
var jungle, invisiblejungle;

var obstaclesGroup, obstacle1,obstacle2;

var score=0;

var gameOver, restart;
var cowboyImg
var iGround


function preload(){
  //kangaroo_running =   loadAnimation("assets/kangaroo1.png","assets/kangaroo2.png","assets/kangaroo3.png");
  //kangaroo_collided = loadAnimation("assets/kangaroo1.png");
  cowboyImg = loadAnimation("cowboy_1.png","cowboy_2.png","cowboy_3.png","cowboy_4.png")
  jungleImage = loadImage("assets/bg.png");
  obstacel1Img = loadImage("assets/stone.png")
  obstacle2Img = loadImage("assets/monster1.png")
  

}

function setup() {
  createCanvas(800, 400);


  jungle = createSprite(400,100,400,20);
  jungle.addImage("jungle",jungleImage);
  jungle.scale=0.3
  jungle.x = width /2;

  cowboy = createSprite(50,300,20,50)
  cowboy.addAnimation("running",cowboyImg)

  cowboy.scale = 0.25;

iGround = createSprite(400,350,1600,10)
iGround.visible = false


  

  //kangaroo = createSprite(50,200,20,50);
  //kangaroo.addAnimation("running", kangaroo_running);
  //kangaroo.addAnimation("collided", kangaroo_collided);
  //kangaroo.scale = 0.15;
  //kangaroo.setCollider("circle",0,0,300)
    
obstaclesGroup = new Group()


}

function draw() {
  background(255);
  
 // kangaroo.x=camera.position.x-270;
   jungle.velocityX = -3
  if(jungle.x<100){
    jungle.x = 400 
  }
  if(keyDown("SPACE")&& cowboy.y>170){
    cowboy.velocityY = -5
  }
  
  cowboy.velocityY += 0.8


  cowboy.collide(iGround)
enemy()
  drawSprites();

 
}
function enemy(){
  
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,320,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -(6 + 3*score/100);
    
    //generate random obstacles
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacle.addImage(obstacel1Img);
              break;
      case 2: obstacle.addImage(obstacle2Img);
              break;
     
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);



}
}