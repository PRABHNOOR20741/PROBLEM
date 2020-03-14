class Box extends Parent
{
  constructor(x, y, width, height)
  {
    super(x,y,width,height);
  }

  display()
    {
      fill("blue");
      super.display();
    }
  

};
