class Mango {
    constructor(x,y,radius){
    var options={
        isStatic:true,
        restitution :0,
        friction :1,
    }
    this.body=Bodies.circle(x,y,radius,options);
    World.add(world,this.body);
    this.image=loadImage("Plucking mangoes/mango.png");
    this.radius=radius;
    }
display(){
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius)
}
}