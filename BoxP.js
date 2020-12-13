class BoxP
{
    constructor(x,y,width,height)
    {
        var options={
            isStatic: false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/Pink.png");
        this.Visibility = 255;
        World.add(world,this.body);
    }

    display()
    {
        if(this.body.speed <3)
        {
            var locus = this.body.position;
            var angle = this.body.angle;
            push();
            translate(locus.x,locus.y);
            rotate(angle);
            rectMode(CENTER);
            strokeWeight(4);
            fill("pink");
            rect(0,0,this.width,this.height);
            pop();
        }

        else
        {
            World.remove(world, this.body);
            push();
            this.Visibility = this.Visibility - 5;
            tint(255,this.Visibility);
            image(this.image, this.body.position.x, this.body.position.y, 50, 50);
            pop();
        }

    }

    score()
    {
        if(this.Visibility<0 && this.Visibility>-1005)
        {
            score++;
        }
    }
}