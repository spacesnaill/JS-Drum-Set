function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"`);
  if (!audio) return; // stop function from running
  audio.currentTime = 0; // rewind to the start
  audio.play();
  //console.log(key);
  key.classList.add("playing");
}
function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skip if not a transform
  //this.classList.remove('playing');
  this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
