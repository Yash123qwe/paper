class Paper {

constructor(x,y){
	var options={
        'density':4,
        'friction': 1.0,
        'restitution':0.5		
        }

        this.body = Bodies.rectangle(x,y,50,50,options)
        this.image=loadImage("paper.png")
        this.width = 50
        this.height = 50
        World.add(world , this.body)
}
display(){
    push()
    translate(this.body.position.x, this.body.position.y);
    fill(255)
    imageMode(CENTER);
    image(this.image, 0,0,50,50)
    pop()
}


}


