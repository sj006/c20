

var car,wall,d;
var speed,weight;




function setup() {
  createCanvas(2000,400);
  car = createSprite(50, 200, 70, 50);
  car.shapeColor="white";
  wall = createSprite(1000,200,60,200);
  wall.shapeColor="white";
 // wall.debug=true;
  car.depth=wall.depth;
  
  speed=random(55,90);
  weight=random(400,1500);
  
}

function draw() {
  background("black"); 
  car.velocityX=speed;
  if(wall.x-car.x < (car.width+wall.width)/2 ){
   car.velocityX=0;
   d = (0.5*weight*speed*speed)/22500;
   

  if(d<100){  
   car.shapeColor="green";
  }

   if(d>100 && d<180){
    car.shapeColor="yellow";
    
  } 
    if(wall.x-car.x < (car.width+wall.width)/2 && d>180){
    car.shapeColor="red";
  } 
   } 
  drawSprites();
}






