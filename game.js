const buttonColours = ['red', 'blue', 'green', 'yellow'];
const gamePattern = [];
const userClickedPattern = [];

$('.btn').click((e) => {
  
  let userChosenColour = e.target.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
});

const nextSequence = () => {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  // Animate flash using jquery
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
};

function playSound(name) {
  const audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

const animatePress = (currentColour) => {
  $("#" + currentColour).addClass('pressed');

 //use Javascript to remove the pressed class after a 100 milliseconds.
  setTimeout(() => {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
};
nextSequence();
animatePress();
