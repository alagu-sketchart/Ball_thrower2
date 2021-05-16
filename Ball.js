class Ball{
    constructor(){
        var options = {
            restitution :0.5,
            friction :0.1,
            density :1.2
        }
        this.body = Bodies.circle(250,540,20,options);
        this.width = 35;
        this.image = loadImage("Images/paper.png");
        World.add(world,this.body);
    }
    display(){
        var positions = this.body.position;
        imageMode(CENTER);
        image(this.image,positions.x,positions.y,35,35);
    }
}