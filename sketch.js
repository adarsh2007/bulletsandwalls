var wall,thickness;
var speed,bullet,weight,damage;
var bulletRightEdge,wallLeftEdge;

function setup(){
  
    createCanvas(1600,400);
    bullet=createSprite(50,200,50,30);
   wall=createSprite(1200,200,thickness,height/2);
   wall.shapeColor="white";

    thickness=random(22,83);
    weight=random(30,52);
     speed=random(223,321);
    

    bullet.velocityX=speed;
    bullet.shapeColor="white";
  }

function draw(){
  background(0,0,0);
if (hasCollided(wall,bullet)) {
  bullet.velocityX=0;
  var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);
  
  
  if(damage>=10){
  wall.shapeColor="red"
  }
  
  if(damage<10){
  wall.shapeColor="green";
  }
  }
  
drawSprites();
 } 
 
function hasCollided(wall,bullet){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x; 

  if(bulletRightEdge<=wallLeftEdge){
  return true;
}
return false;  



}

