class Parent
{
    constructor(x, y, width, height,bodyA,pointB,angle) 
    {
        var options = 
        {
            isStatic : false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }

      display()
      {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(x,y,this.width,this.height)
        pop();
      }
}