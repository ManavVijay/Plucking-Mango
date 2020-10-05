class Stone extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");

    this.path = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    var position = [this.body.position.x,this.body.position.y]
    this.path.push(position);
    for(var i = 0;i<this.path.length;i = i+1){
      this.image(this.smoke,this.path[i][0])
    }
  }
}
