function theBeatlesPlay(musicianArray, instrumentArray) {
  const answerArray = [];
  for(let i = 0; i < musicianArray.length; i ++) {
    answerArray.push(`${musicianArray[i]}` + " plays " + `${instrumentArray[i]}`);
  }
  return answerArray;
}
