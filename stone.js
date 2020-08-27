class Stone {
    constructor(x,y,radius){
    var options={
        restitution:0,
        friction:1,
        density:1.2
    }
    this.body=Bodies.circle(x,y,radius,options);
    World.add(world,this.body);
    this.image=loadImage("Plucking mangoes/stone.png");
    this.radius=radius;
}
display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    imageMode(CENTER)
    image(this.image, 0, 0, this.radius, this.radius)
    pop();
}
}