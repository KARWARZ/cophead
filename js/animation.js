function initAnim(subj, animSet) {
  subj.currentPick = 0;
  subj.speedTick = 23;

  subj.animSet = animSet;
  subj.chosenAct = "run";
  subj.frame = 1;
}

//Function of basic animation
function basicAnim(subj)
{
  if(subj.frame > subj.maxFrame)
    subj.frame = 1;

  subj.chosenPath = subj.path + stdizeCount(subj.frame) + '.png';
  makeImage(subj.chosenPath, subj.x, subj.y, subj.width, subj.height, subj.flip);

  if(subj.currentPick < subj.speedTick)
  {
    subj.currentPick += 7;
    return;
  }
  else if(subj.currentPick >= subj.speedTick)
    subj.currentPick = 0;

  if(subj.frame > subj.maxFrame)
    subj.frame = 1;
  else
    subj.frame++;
}
