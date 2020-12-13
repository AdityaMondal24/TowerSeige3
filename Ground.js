class Ground
{
    constructor(x,y,width,height)
    {
        var options={
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display()
    {
        var locus = this.body.position;
        rectMode(CENTER);
        strokeWeight(4);
        fill("red");
        rect(locus.x,locus.y,this.width,this.height);
    }
}