function prepareVelocity(subj) {
  subj.velocity = [
    collectedTime = 1
  ];
  subj.velocity.x = 0;
  subj.velocity.y = 0;
}

function simPhysics(subj) {
  subj.dx = 0;
  subj.dy = 0;
  subj.gravitySpeed += 0.15;
  subj.dy += subj.gravitySpeed;

  //COLLISION STUFF
  //Cuphead can't get moved through barrier
  //Checks user's pressing on the keys (MUST BE GOT REMOVED TO GAMEPLAY.JS)
  keyCheck(subj);
  physJob = givenForce / subj.velocity.collectedTime;

  if(subj.isJumping) {
    subj.isJumping = false;
    subj.velocity.collectedTime = 1;
    subj.velocity.y -= physJob;
  }

  subj.dy += subj.velocity.y;

  subj.isGround = false;

  //Always checks the character's direction and changed to the supposed to be flip
  dirCheck(subj);

  if(subj.x >= 500 && rightPressed)
    subj.dx = 0;
  //Cuphead can't get moved deeper a floop (collision)
  if(subj.y > (testSq.y - subj.height))
    subj.isGround = true;

  if(subj.isGround && subj.dy > 0) {
    subj.velocity.y = 0;
    subj.velocity.collectedTime = 1;
    erasePhysics(subj);
    subj.dy = 0;
  }

}

function resultPhysics(subj) {
  subj.x += subj.dx;
  subj.y += subj.dy;
}

function erasePhysics(subj) {
  subj.gravitySpeed = 0;
}
