// main.js

const input = document.querySelector('input');
const log = document.getElementById('volume-number');

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
