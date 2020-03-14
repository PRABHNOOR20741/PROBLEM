class Ammo extends Parent
 {
  constructor(x,y)
  {
    super(x,y,50,50);
  }

  display() 
  {
    fill("red");
    super.display();
  }
}
