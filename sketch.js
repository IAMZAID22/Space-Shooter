var pla,pla2,plI,plI1,as1,as2,as3,as,bl1,hp,hp2,bg,b1,b2,b3,bl2,GameState  = END,PLAY,END;
function preload(){
plI = loadImage("spaceship.png");
plI1 = loadImage("spaceshipq.png");
as  = loadImage('asteroid.png');
 bg = loadImage("space.png"); 
}

function setup(){
  createCanvas(800,600);
 
  pla = createSprite(200,500);
  pla.addImage(plI);
  pla.scale = 0.2;
  
  pla2 = createSprite(600,500);
  pla2.addImage(plI1);
  pla2.scale = 0.2;
  
  as1 = createSprite(Math.round(random(0,800)),0);
  as1.addImage(as);
  as1.scale = 0.1;
  as2 = createSprite(Math.round(random(0,800)),0);
  as2.addImage(as);
  as2.scale = 0.1;
  as3 = createSprite(Math.round(random(0,800)),0);
  as3.addImage(as);
  as3.scale = 0.1;
  
   bl1 =createSprite(100,100,10,20);
  bl1.shapeColor  = "gold";
  bl1.visible = false;
  
    bl2 =createSprite(100,100,10,20);
  bl2.shapeColor  = "gold";
  bl2.visible = false;

hp = 10;
  hp2 = 10;
  
  b1 = createSprite(400,599,800,1);
  b2 = createSprite(1,300,1,600);
  b3 = createSprite(799,300,1,600);
  
}


function draw(){
  background(bg);
  as1.velocityY = 9;
  as2.velocityY = 9;
  as3.velocityY = 9;
  textSize(25);
  fill("white");
  text("HP:"+hp,20,50);
  text("HP:"+hp2,700,50);
  
if(keyDown("space")){
 GameState = PLAY;
}
 if(GameState === PLAY){
  if(hp >=1){
  
  if(as1.isTouching(as2)){
    as1.x = (Math.round(random(0)))
    as1.y = 0;
  }
  if(as1.isTouching(as3)){
    as1.x = (Math.round(random(0)))
    as1.y = 0;
  }
  if(as2.isTouching(as1)){
    as2.x = (Math.round(random(0)))
    as2.y = 0;
  }
  if(as2.isTouching(as3)){
    as2.x = (Math.round(random(0)))
    as2.y = 0;
  }
  if(as3.isTouching(as2)){
    as3.x = (Math.round(random(0)))
    as3.y = 0;
  }
  if(as3.isTouching(as1)){
    as3.x = (Math.round(random(0)))
    as3.y = 0;
  }
   if (keyDown("down")){
    bl1.visible = true;
    bl1.x = pla.x;
    bl1.y = pla.y;
    bl1.velocityY = -6;
     bl1.depth = bl1.depth - 2;
    
  }
  if(keyDown("left")){
    pla.x = pla.x -10;
  }
  if(keyDown("right")){
    pla.x = pla.x +10;
  }
   if (keyDown("s")){
    bl2.visible = true;
    bl2.x = pla2.x;
    bl2.y = pla2.y;
    bl2.velocityY = -6;
     bl2.depth = bl2.depth - 2;
    
  }
  if(keyDown("a")){
    pla2.x = pla2.x -10;
  }
  if(keyDown("d")){
    pla2.x = pla2.x +10;
  }
  if(as1.isTouching(bl1)|| as1.isTouching(bl2)){
    as1.x = (Math.round(random(0,800)))
    as1.y = 0;
  }
  if(as2.isTouching(bl1)|| as2.isTouching(bl2)){
    as2.x = (Math.round(random(0,800)))
    as2.y = 0;
  }
  if(as3.isTouching(bl1)||as3.isTouching(bl2)){
    as3.x = (Math.round(random(0,800)))
    as3.y = 0;
  }
  if(pla.isTouching(as1)){
    hp = hp -1;
    as1.x = (Math.round(random(0,800)))
    as1.y = 0;
    as1.veloctyY = 9;
  }
  if(pla.isTouching(as2)){
    hp = hp -1;
    as2.x = (Math.round(random(0,800)))
    as2.y = 0;
    as2.veloctyY = 9;
  }
  if(pla.isTouching(as3)){
    hp = hp -1;
    as3.x = (Math.round(random(0,800)))
    as3.y = 0;
    as3.veloctyY = 9;
  }
   if(pla2.isTouching(as1)){
    hp2 = hp2 -1;
    as1.x = (Math.round(random(0,800)))
    as1.y = 0;
    as1.veloctyY = 9;
  }
  if(pla2.isTouching(as2)){
    hp2 = hp2 -1;
    as2.x = (Math.round(random(0,800)))
    as2.y = 0;
    as2.veloctyY = 9;
  }
  if(pla2.isTouching(as3)){
    hp2 = hp2 -1;
    as3.x = (Math.round(random(0,800)))
    as3.y = 0;
    as3.veloctyY = 9;
  }
  if(as1.isTouching(b1)){
     as1.x = (Math.round(random(0,800)))
    as1.y = 0;
    as1.veloctyY = 9;
  }
  if(as2.isTouching(b1)){
     as2.x = (Math.round(random(0,800)))
    as2.y = 0;
    as2.veloctyY = 9;
  }
  if(as3.isTouching(b1)){
     as3.x = (Math.round(random(0,800)))
    as3.y = 0;
    as3.veloctyY = 9;
  }
  }
pla.collide(b2);
   pla.collide(b3);
   pla2.collide(b2);
   pla2.collide(b3);
 }
  drawSprites();
}
