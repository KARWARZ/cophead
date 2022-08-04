class Character
{
  constructor(
  animSet,
  x=0, y=0,
  width=100,
  height=150,
  speed=5)
  {
    initAnim(this, animSet);

    this.speed = speed;

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.flip = ' ';
    this.chosenPath = "";

    //erasePhysics(this);
    this.gravitySpeed = 0;
  }

  // Should be prepareAnimation(this) instead of:
  animate(fun = function () { return false; })
  {
    if(arguments.length == 1) {
      if(!fun)
        basicAnim(this);
      else
        fun();
    }
    else
    {
      this.path = this.animSet[this.chosenAct][0];
      this.maxFrame = this.animSet[this.chosenAct][1];

      if(this.animSet[this.chosenAct][2] == false)
      {
        this.takenAnimation = function()
        {
          basicAnim(this);
        }
      }
      else
      {
        this.takenAnimation = function()
        {
          this.animSet[this.chosenAct][2]();
        }
      }
      this.takenAnimation();
    }
  }
  update() { console.log("THERE SHOULD BE AN UPDATE FUNCTION!!!"); }
}

Character.readyToJump = true;
Character.isJumping = false;
Character.isGround = false;

//Checks user's hitting on the keys
function keyCheck(subj)
{
  if(leftPressed == true) {
    subj.dx = -speed;
    subj.flip = 'x';
  }
  if(rightPressed == true) {
    subj.dx = speed;
    subj.flip = ' ';
  }
  if(upPressed == true && subj.isGround && subj.readyToJump) {
     subj.isJumping = true;
     subj.readyToJump = false;
  }
  if(upPressed == false) {
    subj.readyToJump = true;
  }
  if(downPressed == true)
    subj.dy = speed;
}

//Always checks the character about his velocity
function dirCheck(subj) {
  if(subj.dx != 0) {
    try {
      subj.chosenAct = "run";
    } catch(err) {
      subj.frame = 1;
    }
  } else {
    subj.chosenAct = "idle";
  }
}
