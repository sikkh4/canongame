class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    
    this.canonshoot = loadImage("assets/canon.png");
    this.canonbase = loadImage("assets/cannonBase");

  }
  display(){
  push();
  translate(this.x, this.y);
  imageMode(CENTER);
  rotate(this.angle)
  //topo do canhão
  image(this.canonshoot, 0, 0, this.width,this.height);
  pop();
//base do canhão
  image(this.canonbase, 75, 30, 200, 200);
  
  
  }
  

}
