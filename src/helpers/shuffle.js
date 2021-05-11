const shuffle = (array) => {
  //Fisher-Yates Shuffle algorithm
  let currentIndex = array.length;
  let tempValue = 0;
  let randomIndex = 0;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    tempValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempValue;
  }
  return [...array];
};

export default shuffle;
