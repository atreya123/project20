var car,wall,speed,weight
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  car.velocityX=speed;
  car.shapeColor="white"
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor="grey"
}

function draw() {
  background("black");  
  if(wall.x-car.x<=wall.width/2+car.width/2){
    car.velocityX=0;
    var d=0.5*weight*speed*speed/22500;

    if(d>180){
      car.shapeColor="yellow";
    }
    if(d<180&&d>100){
      car.shapeColor="red";
    }
    if(d<100){
      car.shapeColor="blue"
    }
  }
  drawSprites();
}