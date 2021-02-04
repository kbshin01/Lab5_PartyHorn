// main.js

var volumeNumber = document.getElementById("volume-number");
var volumeSlider = document.getElementById("volume-slider");
var hornSound = document.getElementById("horn-sound");

volumeNumber.addEventListener("input", updateNumber);
function updateNumber() {
  var volVal = volumeNumber.valueAsNumber();
  volumeSlider.setAttribute("value", volVal);
  hornSound.volume = volVal * 0.01;
  updateVolImage(volVal);
}

volumeSlider.addEventListener("input", updateSlider);
function updateSlider() {
  var volVal = volumeSlider.valueAsNumber();
  volumeNumber.setAttribute("value", volVal);
  hornSound.volume = volVal * 0.01;
  updateVolImage(volVal);
}

var volumeImage = document.getElementById("volume-image");
var honkBtn = document.getElementById("honk-btn");
function updateVolImage(volVal) {
  if (volVal >= 67) {
    volumeImage.setAttribute("src", "./assets/media/icons/volume-level-3.svg");
    honkBtn.disabled = false;
  } else if (volVal >= 34) {
    volumeImage.setAttribute("src", "./assets/media/icons/volume-level-2.svg");
    honkBtn.disabled = false;
  } else if (volVal >= 1) {
    volumeImage.setAttribute("src", "./assets/media/icons/volume-level-1.svg");
    honkBtn.disabled = false;
  } else {
    volumeImage.setAttribute("src", "./assets/media/icons/volume-level-0.svg");
    honkBtn.disabled = true;
  }
}

var soundImage = document.getElementById("sound-image");

var airHorn = document.getElementById("radio-air-horn");
airHorn.addEventListener("click", setAirHorn);
function setAirHorn() {
  hornSound.setAttribute("src", "./assets/media/audio/air-horn.mp3");
  soundImage.setAttribute("src", "./assets/media/images/air-horn.svg");
}

var carHorn = document.getElementById("radio-car-horn");
carHorn.addEventListener("click", setCarHorn);
function setCarHorn() {
  hornSound.setAttribute("src", "./assets/media/audio/car-horn.mp3");
  soundImage.setAttribute("src", "./assets/media/images/car.svg");
}

var partyHorn = document.getElementById("radio-party-horn");
partyHorn.addEventListener("click", setPartyHorn);
function setPartyHorn() {
  hornSound.setAttribute("src", "./assets/media/audio/party-horn.mp3");
  soundImage.setAttribute("src", "./assets/media/images/party-horn.svg");
}

honkBtn.addEventListener("click", playSound);
function playSound() {
  hornSound.play();
}
