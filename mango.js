class Mango  {
    constructor(x,y){
       var options= {
isStatic:true,
restitution:0,
friction:1,
//scale= 0.2,
        }
       
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

      this.image = loadImage("pictures/mango.png");
     // size(20,200)
      }
  
    display() {
         var pos =this.body.position;
        
   
      rectMode(CENTER);
      
      imageMode(CENTER);
      image(this.image,200,200, this.width, this.height);
     
    }
  }