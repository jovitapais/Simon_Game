const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];

const nextSequence = () => {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  const bleep = new Audio("sounds/" + randomChosenColour + ".mp3");
  bleep.play();
};
