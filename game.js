const buttonColours = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;
$(document).keypress(() => {
  if (!started) {
    $('#level-title').text(`Level  ${level}`);
    nextSequence();
    started = true;
  }
});

$('.btn').click((e) => {
  const userChosenColour = e.target.id;
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  // Call checkAnswer() after a user has clicked and chosen their answer,
  // passing in the index of the last answer in the user's sequence.
  checkAnswer(userClickedPattern.length - 1);
});

const checkAnswer = (currentLevel) => {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log('success');

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound('wrong');

    console.log('wrong');
    $('body').addClass('game-over');
    setTimeout(() => {
      $('body').removeClass('game-over');
    }, 200);
    $('#level-title').text('Game Over, Press Any Key to Restart');
    
    // Call startOver() if the user gets the sequence wrong.
    startOver();
  }
};

const nextSequence = () => {
  // Once nextSequence() is triggered, reset the userClickedPattern
  // to an empty array ready for the next level.

  userClickedPattern = [];
  // Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
  level++;

  // Inside nextSequence(), update the h1 with this change in the value of level.
  $('#level-title').text(`Level ${level}`);

  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  // Animate flash using jquery
  $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
};

function playSound(name) {
  const audio = new Audio(`sounds/${name}.mp3`);
  audio.play();
}

const animatePress = (currentColour) => {
  $(`#${currentColour}`).addClass('pressed');

  // use Javascript to remove the pressed class after a 100 milliseconds.
  setTimeout(() => {
    $(`#${currentColour}`).removeClass('pressed');
  }, 100);
};

const startOver = () => {
  // reset values

  level = 0;
  gamePattern = [];
  started = false;
};
