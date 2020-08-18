class Blob {
    constructor(x, y,w=random(10, 50)) {
      var options = {
          isStatic:false,
          'restitution':1,
          'friction':0.1,
          'density':0.1,
          "debug":true
      }
      this.body = Bodies.circle(x, y,w/2, options);
      this.width = width;
      this.height = height;
      this.w = w
      this.color=[random(100,255),random(100,255),random(100,255)]
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle)
      
      fill(this.color[0],this.color[1],this.color[2]);
      ellipse(0, 0, this.w)
      pop();
    }
  };
  var Blobs = []
  function createBlob(x,y,w=random(10,35)){
    var a= new Blob(x,y,w)
    Blobs.push(a)
    return a;
  }
  function drawBlobs(){
    Blobs.forEach(element => {
      element.display();
    });
  }