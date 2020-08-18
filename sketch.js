
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Composites =Matter.Composites;
var gscale=1
function preload()
{
	
}
var r1
function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    car = new Car(600,-height-200,125,75,20,40,-35,35)
    ground = new Ground(width)
	Engine.run(engine);
	groundBodies();
	camera.zoom = 2
	newWall(0,height/2,height*10,100,90)
	
//	Matter.Body.scale(ground.body,ground.xScale,ground.yScale)
}


function draw() {
  rectMode(CENTER);
  background(240,255,240);
  ground.display()
  car.display()
  drawSprites();
 drawBlobs();
 drawWalls();
 k()
 camera.position.x =car.car.bodies[2].position.x
 camera.position.y =car.car.bodies[0].position.y
 push()
	translate((camera.position.x - width/2),(camera.position.y - height/2))
   textSize(55)
   fill("black")
   text("Distance: "+int((car.car.bodies[0].position.x-600)/100),100,100)
	pop()
}
function k(){
	if(keyIsPressed===true)
	{switch (keyCode) {
		case 37:
			camera.position.x-=10
			break;
	    case 39:
			camera.position.x+=10
			car.moveForward()
			break;
		case 38:
			newWall(mouseX,mouseY)
			break;
		case 38:
			newWall(mouseX,mouseY)
			break;
		case 68:
			car.moveForward()
			break;
		case 32:
			
			createBlob(mouseX+(camera.position.x - width/2),mouseY+(camera.position.y - height/2))
				default:
			break;
	}}
}

function groundBodies(){
	for(let i=1;i<ground.arr.length-3;i++) {
		var a= ground.arr[i]
		var b= ground.arr[i-1]
	   strokeWeight(0)
	   fill(0,25,20)
	   var angle = angleBetween(a, b)
	  //snewWall((a.x+b.x)/2,(a.y+b.y)/2,int(dist(a.x,a.y,b.x,b.y)),10,angle,false)
	  newWallBall(b.x,b.y,0,8,0,false)
//  console.log((a.x+b.x)/2,(a.y+b.y)/2,int(dist(a.x,a.y,b.x,b.y)),2,angle,false)
	  // var r= rect(0,0,int(dist(a.x,a.y,b.x,b.y)), 1);

   }
}
function angleBetween(a,b){
	//x1=a.x;y1=a.y;x2=b.x;y2=b.y
	var delta_x = a.x - b.x
	var delta_y = a.y- b.y
	theta_radians = atan2(delta_y, delta_x)
	 // console.log(theta_radians)
	  return theta_radians
	}




