const audio = document.getElementById('horn-sound');
const input = document.querySelector('input');
const slider = document.getElementById('volume-slider');
const number = document.getElementById('volume-number');
const volumeimg = document.getElementById('volume-image');

const hornsound = document.getElementById('horn-sound');
const airhorn = document.getElementById('radio-air-horn');
const carhorn = document.getElementById('radio-car-horn');
const partyhorn = document.getElementById('radio-party-horn');
const soundimage = document.getElementById('sound-image');

const button = document.getElementById('honk-btn');

input.addEventListener('input', updateValue);
slider.addEventListener('input', updateValue);
volumeimg.addEventListener('input', updateValue);

airhorn.addEventListener('change', updateHorn);
carhorn.addEventListener('change', updateHorn);
partyhorn.addEventListener('change', updateHorn);

button.addEventListener('click', buttonClick);

function updateValue(e) {
  var num = e.target.value;

  slider.value = num;
  audio.volume = num / 100.0;
  number.value = num;

  if(num >= 67){
    volumeimg.src = "./assets/media/icons/volume-level-3.svg";
    button.disabled = false;
  } else if(num <= 66 && num >= 34){
    volumeimg.src = "./assets/media/icons/volume-level-2.svg";
    button.disabled = false;
  } else if(num <= 33 && num >= 1){
    volumeimg.src = "./assets/media/icons/volume-level-1.svg";
    button.disabled = false;
  } else if(num == 0){
    volumeimg.src = "./assets/media/icons/volume-level-0.svg";
    button.disabled = true;
  }
}

function updateHorn(e){
  if(airhorn.checked){
    hornsound.src = "./assets/media/audio/air-horn.mp3";
    soundimage.src = "./assets/media/images/air-horn.svg"
  } else if(carhorn.checked){
    hornsound.src = "./assets/media/audio/car-horn.mp3";
    soundimage.src = "./assets/media/images/car.svg"
  } else if(partyhorn.checked){
    hornsound.src = "./assets/media/audio/party-horn.mp3";
    soundimage.src = "./assets/media/images/party-horn.svg"
  }
}

function buttonClick(e){
  hornsound.play();
  e.preventDefault();
}
