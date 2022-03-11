const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];

const nextSequence = () => {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = randomNumber[buttonColours];
  gamePattern.push(randomChosenColour);
};
