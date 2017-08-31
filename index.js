function theBeatlesPlay(musicianArray, instrumentArray) {
  const answerArray = [];
  for(let i = 0; i < musicianArray.length; i ++) {
    answerArray.push(`${musicianArray[i]}` + `${instrumentArray[`i`]}`);
  }
  return answerArray;
}
