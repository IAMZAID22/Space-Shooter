var pla,plI,as1,as2,as3,as,bl1,hp,bg,b1,b2,b3;
function preload(){
plI = loadImage("spaceship.png");
as  = loadImage('asteroid.png');
 bg = loadImage("space.png"); 
}

function setup(){
  createCanvas(800,600);
 
  pla = createSprite(400,500);
  pla.addImage(plI);
  pla.scale = 0.2;
  
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
  

hp = 10;
  
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
   if (keyDown("space")){
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
  if(as1.isTouching(bl1)){
    as1.x = (Math.round(random(0,800)))
    as1.y = 0;
  }
  if(as2.isTouching(bl1)){
    as2.x = (Math.round(random(0,800)))
    as2.y = 0;
  }
  if(as3.isTouching(bl1)){
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
pla.collide(b2);
   pla.collide(b3);
 }
  drawSprites();
}