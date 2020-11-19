class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
     
       this.image= loadImage("pictures/tree.png"); 
       
    }
    display(){
      var pos =this.body.position;
     // rectMode(CENTER);
     // fill("brown");
     // rect(pos.x, pos.y, this.width, this.height);
      imageMode(CENTER);
       image(this.image, 480, 540, this.width, this.height);
    }
  };
