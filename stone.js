class Stone  {
    constructor(x,y){
       var options= {
isStatic:false,
restitution:0,
friction:1,
density:1.2
        }
        //super(x,y);
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);

      this.image = loadImage("pictures/stone.png");
 //Matter.Body.scale(this.image,2,2)
    }
  
    display() {
         var pos =this.body.position;
        
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
     // rectMode(CENTER);
       // fill("brown");
       // rect(pos.x, pos.y, this.width, this.height);
     
      imageMode(CENTER);
      image(this.image,mouseX, mouseY, this.width, this.height);
      //super.display();
    }
  }
    