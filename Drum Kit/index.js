// It find the first button in my html, and then adds event listener to listen for clicks and it does it runs the function
// Anonymous function has no name, and it should be inside Event Listener, it tells what to do after action


// document.querySelector("#select .button").addEventListener("click", function () {
//   alert("I got clicked");
// });


// document.querySelectorAll("button").forEach(button => {
//   button.addEventListener("click", () => {
//     console.log(this.innerHTML);
//   });
// });


// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();

var numberOfButtons = document.querySelectorAll(".drum").length;
for (i=0; i<numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});


function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;


      default:
      console.log(buttonInnerHTMLinnerHTML);

  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey, 3000);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
