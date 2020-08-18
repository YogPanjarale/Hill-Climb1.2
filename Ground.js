class Ground{
    constructor(l){
        this.lenght=l
        this.arr =[]
        this.height=-height
        this.noiseScale= 0.01
        this.xScale =20
        this.yScale =12;
      this.arr.push({x:0,y:height*5})
       this.arr.push({x:0,y:this.height})
       // vertex(0,height)
       // vertex(0,this.height)
        for (let x=0; x < 1500; x++) {
            let noiseScale=this.noiseScale;
          //  this.noiseScale +=0.0001
          if(this.yScale<60)
            {this.yScale+=0.02}
            if(this.noiseScale<0.002)
            {this.noiseScale= 0.00001}
            //this.noiseScale +=0.00001
            let noiseVal = noise((2+x)*noiseScale, 250*noiseScale);
           // stroke(noiseVal*255);
           // line(x, this.height+noiseVal*80, x, height);
            var v1= {x:x*this.xScale,y : this.height+noiseVal*80 * this.yScale}
            this.arr.push(v1)
            // var v2= createVector(x,height)
           // this.arr.push(v2)
          } 
          this.arr.push({x:this.arr[this.arr.length-1].x,y: this.arr[this.arr.length-1].y})
          this.arr.push({x:this.arr[this.arr.length-1].x,y:height*5}) 
          var options = {
            isStatic: true,
        
           }
        //this.body=Bodies.fromVertices(0,0,this.arr, options)
         //example
   // var vertices = [{x: 0, y: 0}, {x: 50, y:25}, {x: 100, y: 0}, {x: 50, y: 50}]
         this.vertices = this.arr
        this.arr =this.arr.slice(3,-3)

       // this.body= Bodies.rectangle()
    }
    display(){
        push()
        fill("#5C4949")
        stroke(255)
       // scale(this.xScale,this.yScale)
        beginShape()
       this.vertices.forEach(e => {
            vertex(e.x, e.y);
        });     
        endShape(CLOSE);
        fill(25,255,255)
       
        pop()
    }
}
