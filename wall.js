var walls = []
class Wall {
    constructor(x,y,width,height,angle,show=true) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      Matter.Body.rotate(this.body,radians(angle),{x:this.body.position.x,y:this.body.position.y})
      World.add(world, this.body);
      this.show=show;
      
    }
    display(){
      
      push()
      var pos =this.body.position;
      rectMode(CENTER);
      stroke(1, 1, 1, 1)
      fill("#C58020");
      translate(pos.x,pos.y)
      rotate(degrees(this.body.angle))
      rect(0,0, this.width, this.height);
      pop()
    }
    grass(){
      
      push()
      var pos =this.body.position;
      rectMode(CENTER);
      stroke(1, 1, 1, 1)
      fill("#80BB11");
      translate(pos.x,pos.y)
      rotate(degrees(this.body.angle))
      rect(0,0, this.width, this.height);
      pop()
    }
  };
  class WallBall {
    constructor(x,y,width,height,angle,show=true) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,height,options);
      this.width = width;
      this.height = height;
      Matter.Body.rotate(this.body,radians(angle),{x:this.body.position.x,y:this.body.position.y})
      World.add(world, this.body);
      this.show=show;
      
    }
    display(){
      
      push()
      var pos =this.body.position;
      rectMode(CENTER);
      stroke(1, 1, 1, 1)
      fill("#C58020");
      strokeWeight(5)
      translate(pos.x,pos.y)
      rotate(degrees(this.body.angle))
      rect(0,0, this.width, this.height);
      pop()
    }
    grass(){
      
      push()
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(5)
      stroke(1, 1, 1, 1)
      fill("#80BB11");
     // fill(0)
      translate(pos.x,pos.y)
      rotate(degrees(this.body.angle))
      ellipse(0,0, this.height);
      pop()
    }
  };
  function newWall(x,y,width=150,height=50,angle=int(random(1, 18)*20),show =true){
      var wall = new Wall(x,y,width,height,angle,show)
      walls.push(wall)
      return wall
  }
  function newWallBall(x,y,width=150,height=50,angle=int(random(1, 18)*20),show =true){
    var wallBall = new WallBall(x,y,width,height,angle,show)
    walls.push(wallBall)
    return wallBall
}
  function drawWalls(){
      walls.forEach(element => {
         if(element.show===true){
           element.display();
        }
        if(element.show===false){
          element.grass();
       }
      });
   
      // ground.arr.forEach(i => {
      //   push()
      //   strokeWeight(9.5)
      //   stroke("#70543E")
      //   point(i.x,i.y)
      //   pop()
      // });
  }