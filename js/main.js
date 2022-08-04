/*Plans:
*
* WE SHOULD:
*
* - Initialization system to load in advance to avoid an white space
*
* - Divide some abilities of character to "components" as Unity and Unread do
*
*/

class Square {
  constructor(x,y,
    width,height
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw()
  {
    ctx.beginPath();
    ctx.rect(this.x,this.y,this.width,this.height);
    ctx.fill();
    ctx.closePath();
  }
}
  var testSq = new Square(0,400,500,200);

//Main function of the script
function main()
{
  ctx.clearRect(0,0,canvas.width,canvas.height);

  testSq.draw();

  cuphead.update();
  cuphead.animate();
}


//THE MOST IMPORTANT FUNCTION WHAT WE HAVE!!!
/*!!!*/     setInterval(main, 1);     /*!!!*/
//THE MOST IMPORTANT FUNCTION WHAT WE HAVE!!!
