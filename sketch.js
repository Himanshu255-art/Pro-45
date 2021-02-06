var police;
var Alex;
var zombie1,zombie2,zombie3,zombie4;
var zombie5;
var gameState="start";
var arrowGroup,zombieGroup;
var score=0;
function preload(){
  title=loadImage("images/Rescue.png")
 Back=loadImage("images/background2.jpg")
 ShootingPolice=loadImage("images/shootingpolice.png")
 arch=loadImage("images/name.png")
 bullet=loadImage("images/bullet.png")
 JohnImage=loadImage("images/John.png")
 Zombie1=loadImage("images/download.png")
 Zombie2=loadImage("images/images.png")
Zombie3=loadImage("images/Zombie3.png")
}
function setup() {
 var canvas= createCanvas(displayWidth,displayHeight);
 
  
  Police=createSprite(1600,470,50,50)
     Police.addImage(ShootingPolice)

     zombieGroup=createGroup();
     arrowGroup=createGroup();
   zombiesGroup=createGroup();
     vampireGroup=createGroup();

   
    
}

function draw() {
  if(gameState === "start"){
    background(title)
    stroke ("red")
    fill ("blue")
  textSize(50)
    text("Note : Please press space bar to start the game  ",290,930)
   
    if(keyDown("space")){
      
      
      gameState = "play";
     }
  }
 

  

   if(gameState === "play"){
   background(Back)
   fill("red")
   stroke("yellow")
   textSize(50)
    text("Please press up arrow to shoot",500,910)
     text("Score:"+score,100,100)
     
     if(arrowGroup.isTouching(zombieGroup)){
       zombieGroup.destroyEach();
       score=score+1
     }

     if(arrowGroup.isTouching(zombiesGroup)){
       zombiesGroup.destroyEach();
       score=score+3
     }
     if(arrowGroup.isTouching(vampireGroup)){
       vampireGroup.destroyEach();
       score=score+5
     }
    archway=createSprite(940,100,20,30)
    archway.addImage(arch)
    archway.scale=0.6

    Police.y=World.mouseY


    if (keyDown("up")){
       createArrow();
     
     
       
   }
   
    spawnZombies();
    largeZombies();
    tallZombies();
     drawSprites();
   }
   
  console.log(gameState)
 
 
}
function spawnZombies(){
if(frameCount % 80===0){

  zombie=createSprite(78,Math.round(random(200,900)),30,30)
  zombie.velocityX=3
  zombie.addImage(Zombie2)
  zombie.scale=0.5
  zombie.lifetime=700
  zombieGroup.add(zombie)
  
}
}

function largeZombies(){
  if(frameCount % 169===0){
    monsters=createSprite(68,Math.round(random(200,900)),30,30)
    monsters.velocityX=4
    monsters.addImage(Zombie1)
    monsters.scale=0.4
    monsters.lifetime=700
    zombiesGroup.add(monsters)
  }
}

function tallZombies(){
  if(frameCount % 129===0){
    vampire=createSprite(91,Math.round(random(200,900)),30,30)
    vampire.velocityX=4.4
    vampire.addImage(Zombie3)
    vampire.scale=0.3
    vampire.lifetime=700
    vampireGroup.add(vampire)
  }
}
function createArrow(){
  arrow= createSprite(1580, Police.y, 5, 10);
  arrow.addImage(bullet);
  arrow.scale = 0.07;
  rotate(arrow)
  arrow.velocityX = -6;
  arrowGroup.add(arrow)

}


