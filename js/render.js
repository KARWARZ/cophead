var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var sprPath='img/sprites/'

function flipX()
{
  ctx.save();
  ctx.scale(-1,1);
}

function flipY()
{
  ctx.save();
  ctx.scale(1,-1);
}

//Creating an image with taking a path to draw
function makeImage(path, x=0, y=0, width, height, flipSide=' ')
{
  var img = new Image();
  img.src = path;


  if(flipSide == 'x')
  {
    x = -x - width;
    flipX();
  }
  else if(flipSide == 'y')
  {
    y = -y - height;
    flipY();
  }


  ctx.drawImage(img, x, y,width,height);
  ctx.restore();
}

function checkImage(path)
{
  var img = new Image();
  img.src = path;

  img.onload = function()
  {
    return true;
  }

  img.onerror = function()
  {
    return false;
  }
}
