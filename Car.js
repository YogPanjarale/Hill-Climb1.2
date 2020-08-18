class Car{
    constructor(x,y,w,h,r,d=5,dva,dvb){
        this.car =Composites.car(x, y, w,h, r,d,dva,dvb,-0.1)
        World.add(world,this.car)
        this.car.bodies[1].friction=2
        this.car.bodies[2].friction=2
        this.car.constraints[0].stiffness =  1
        this.car.constraints[1].stiffness =  1
        this.car.bodies[1].friction=2
        this.car.bodies[2].friction=2
        this.maxspeed=2
        this.acceleration =0.02
        this.car.bodies[0].mass=150
    }
    display(){
        push()
           // var car =this.car
           //this.car.constraints[0].bodyB.position.x = this.car.constraints[0].pointA.x
           //this.car.constraints[1].bodyB.position.x =  this.car.constraints[1].pointA.x
           var body =car.car.bodies[0]
           var pos=body.position
           var verticiesArr= car.car.bodies[0].vertices 
            fill(25,100,100)
           // rect(pos.x,pos.y,body.width,body.height)
            verticies(verticiesArr)
            push()         
            stroke("black")
           var wheelA=car.car.bodies[1]
           strokeWeight(wheelA.circleRadius*2 /7)
           car.car.bodies[1].friction=3
           pos=wheelA.position
           fill(255,100,100)
           ellipse(pos.x,pos.y,wheelA.circleRadius*2 )
           pop()
           push()
           fill("balck")
           translate(pos.x,pos.y)
           rotate(degrees(wheelA.angle))
           rect(0,0, wheelA.circleRadius, 2)
           rect(0,0,2, wheelA.circleRadius)
         //  line(pos.x,pos.y,)
           pop()
           push()
           strokeWeight(wheelA.circleRadius*2 /7)
           stroke("black")
           var wheelB=car.car.bodies[2]
           pos=wheelB.position
           fill(255,100,100)
           ellipse(pos.x,pos.y,wheelB.circleRadius*2 );
           pop()
           push()
           fill("balck")
           translate(pos.x,pos.y)
           rotate(degrees(wheelB.angle))
           rect(0,0, wheelB.circleRadius, 2)
           rect(0,0,2, wheelB.circleRadius)
         //  line(pos.x,pos.y,)
           pop()
        pop()
        if(keyIsPressed== true){
            if(keyCode==39){
           this.moveForward()
        }
           if(keyCode==37){
          this.moveBack()
        }
          }
    }
    moveForward(){
        
      //  if(car.car.bodies[1].angle<6.28319){
            if(car.car.bodies[1].angularVelocity<this.maxspeed)  {        
                console.log(car.car.bodies[1].angularVelocity,car.car.bodies[1].speed,car.car.bodies[1].angle)
               // car.car.bodies[2].angle+=this.acceleration
                car.car.bodies[1].angle+=this.acceleration
            }      
    //       }
    //    else if(car.car.bodies[1].angle == radians(360)){
    //     car.car.bodies[1].angle=0   
    //    }

    }
    moveBack(){
        if(car.car.bodies[1].angularVelocity<this.maxspeed)  {        
            console.log(car.car.bodies[1].angularVelocity,car.car.bodies[1].speed,car.car.bodies[1].angle)
           // car.car.bodies[2].angle+=this.acceleration
            car.car.bodies[1].angle-=this.acceleration
        }      
//       }
    }
}

function verticies(arr){
    beginShape()
    //console.log(arr)
    arr.forEach(e => {
        vertex(e.x, e.y)
    });
    endShape()
}