var animSet = [];

animSet["idle"] = [
  "img/sprites/cuphead/Idle/cuphead_idle_",
  5,
  function()
  {
    if(cuphead.frame > cuphead.maxFrame)
      cuphead.frame = 1;

    cuphead.chosenPath = cuphead.path + stdizeCount(cuphead.frame) + '.png';
    makeImage(
      cuphead.chosenPath,
      cuphead.x, cuphead.y,
      cuphead.width, cuphead.height,
      cuphead.flip
    );

    if(cuphead.currentPick < cuphead.speedTick)
    {
      cuphead.currentPick += deltaTime;
      return;
    }
    else
      cuphead.currentPick = 0;

    if(!goaledEnd)
    {
      if(cuphead.frame > cuphead.maxFrame - 1)
        goaledEnd = true;
      else
        cuphead.frame++;
    }
    else
    {
      if(cuphead.frame < 2)
      {
        goaledEnd = false;
        isPausePassed = false;
      }
      else
        cuphead.frame--;
    }
  }
];
animSet["run"] = [
  "img/sprites/cuphead/Run/Normal/cuphead_run_",
  16,
  false
];
animSet["jump"] = [
  "img/sprites/cuphead/Jump/Cuphead/cuphead_jump_",
  8,
  false
];

//Creating Cuphead character and getting his sprites
var cuphead = new Character(
  animSet,
  x=150,y=150,
  width=100,height=150,
  speed=6
);

cuphead.chosenAct = "run";

cuphead.speedTick = 40;

var goaledEnd = false;
var gravity = 5;

cuphead.veloY = 0;

var givenForce = 10;

prepareVelocity(cuphead);

cuphead.update = function() {
  //Collecting time to make seeking vector to zero
  this.velocity.collectedTime += 0.15;

  //Simulate physics
  simPhysics(this);

  if(this.isGround == false) {
    this.chosenAct = "jump";
  }

  //In result, those ops just comfirm char's positions by his velocities
  resultPhysics(this);
}
