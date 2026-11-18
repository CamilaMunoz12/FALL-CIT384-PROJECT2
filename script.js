$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.

  // Called function to update the name, happiness, and weight of our pet in our HTML
  checkAndUpdatePetInfoInHtml();

  // When each button is clicked, it will "call" function for that button (functions are below)
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  $('.nap-button').click(clickedNapButton);

  // Makes Mochi shake whenever an action button is clicked
  $('.button-container button').click(shakePetImage);

  // jQuery Method 1: .toggle()
  // The .toggle() method shows an element if it is hidden
  // and hides it if it is visible.
  // Here, it allows the user to show or hide Mochi's care guide.
  $('.guide-button').click(function() {
    $('#care-guide').toggle();
  });

});

// Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
var pet_info = {name:"Mochi", weight:10, happiness:60};

// Arrays containing different messages for each pet action

// Messages when Mochi receives a treat
var treatMessages = [
  "Ooo, is that for me?",
  "My tummy is doing a happy dance!",
  "That hit the spot! Got any more?"
];

// Messages when Mochi plays
var playMessages = [
  "Splash splash! This is so much fun!",
  "Bet you can't catch me!",
  "Look at all the bubbles I made!"
];

// Messages when Mochi exercises
var exerciseMessages = [
  "My little legs are getting tired!",
  "Swimming is harder than it looks!",
  "Phew! I need a break from all this swimming!"
];

// Messages when Mochi takes a nap
var napMessages = [
  "Shhh... I'm dreaming about snacks!",
  "Just five more minutes, please!",
  "Zzz... Wake me up when it's snack time!"
];

function clickedTreatButton() {
  // Increase pet happiness
  pet_info.happiness += 10;

  // Increase pet weight
  pet_info.weight += 2;

  checkAndUpdatePetInfoInHtml();

  // Display a random treat message
  showPetMessage(getRandomMessage(treatMessages));
}

function clickedPlayButton() {
  // Increase pet happiness
  pet_info.happiness += 10;

  // Decrease pet weight
  pet_info.weight -= 1;

  checkAndUpdatePetInfoInHtml();

  // Display a random play message
  showPetMessage(getRandomMessage(playMessages));
}

function clickedExerciseButton() {
  // Decrease pet happiness
  pet_info.happiness -= 5;

  // Decrease pet weight
  pet_info.weight -= 2;

  checkAndUpdatePetInfoInHtml();

  // Display a random exercise message
  showPetMessage(getRandomMessage(exerciseMessages));
}

// New action button: Take a Nap
function clickedNapButton() {
  // Increase pet happiness
  pet_info.happiness += 5;

  // Weight stays the same
  checkAndUpdatePetInfoInHtml();

  // Display a random nap message
  showPetMessage(getRandomMessage(napMessages));
}

function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
  // Add conditional so if weight is lower than zero.
  if (pet_info.weight < 0) {
    pet_info.weight = 0;
  }

  // Prevent happiness from going below zero
  if (pet_info.happiness < 0) {
    pet_info.happiness = 0;
  }
}

// Updates your HTML with the current values in your pet_info object
function updatePetInfoInHtml() {
  $('.name').text(pet_info['name']);
  $('.weight').text(pet_info['weight']);
  $('.happiness').text(pet_info['happiness']);
}

// Selects a random message from an array
function getRandomMessage(messages) {
  // Generate a random number based on the array length
  var randomIndex = Math.floor(Math.random() * messages.length);

  // Return the message at that position
  return messages[randomIndex];
}

// Displays a comment from Mochi after each button press
function showPetMessage(message) {

  // jQuery Method 2: .empty()
  // The .empty() method removes all existing content inside
  // the selected HTML element without removing the element itself.
  // Here, it clears Mochi's old message before showing a new one.
  $('#pet-message').empty();

  // Displays the new message on the webpage
  $('#pet-message').text("Mochi says: " + message);
}

// Makes Mochi react whenever an action button is clicked
function shakePetImage() {

  // Select Mochi's image from the HTML
  var petImage = document.querySelector('.pet-image');

  // Remove the shake class so the animation can restart
  petImage.classList.remove('shake');

  // Reset the animation so it works on every click
  void petImage.offsetWidth;

  // Add the shake class to start the animation
  petImage.classList.add('shake');
}
