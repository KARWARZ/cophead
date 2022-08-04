var pickAnimation = 23;
var deltaTime = 4;

var seconds = 0;
var miliseconds = 0;



function stdizeCount(count) {
  if(count > 9999) {
    throw "THIS FUNCTION ONLY ACCEPTS NOT MORE THAN 9999";
  }

  var lnghC = count.toString().length;

  var toReturn = "";

  for(i = 0; i < (4 - lnghC); i++) {
      toReturn += '0';
  }
  toReturn += count;
  
  return toReturn;
}

//Getting the tick of time transforming miliseconds to seconds
function keepTime()
{
  if(miliseconds >= 1000)
  {
    seconds += 1;
    miliseconds = 0;
    stdizeCount(seconds);
  }
  else
    miliseconds += 4;
}
