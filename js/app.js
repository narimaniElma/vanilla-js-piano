const pianoKeys = document.querySelectorAll(".key");
const audioElem = document.querySelector("audio");
const volumeElem = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");

const allValidKeys = [];

pianoKeys.forEach((pianoKey) => {
  allValidKeys.push(pianoKey.dataset.key);

  pianoKey.addEventListener("click", () => playPiano(pianoKey.dataset.key));
});

const pressKeys = (event) => {
  if (allValidKeys.includes(event.key)) {
    playPiano(event.key);
  }
};

const playPiano = (key) => {
  audioElem.setAttribute("src", `./tunes/${key}.wav`);
  audioElem.play();

  const mainKeyElem = document.querySelector(`[data-key='${key}']`);
  mainKeyElem.classList.add("active");

  setTimeout(() => mainKeyElem.classList.remove("active"), 150);
};

const setVolume = (event) => (audioElem.volume = event.target.value);

const showOrHideKeys = () => {
  pianoKeys.forEach((pianoKey) => pianoKey.classList.toggle("hide"));
  //   pianoKeys.forEach(function (pianoKey) {
  //     if (!event.target.checked) {
  //       pianoKey.classList.add("hide");
  //       //   pianoKey.innerHTML = "";
  //     } else {
  //       pianoKey.classList.remove("hide");
  //       //   pianoKey.innerHTML = `<span>${pianoKey.dataset.key}</span>`;
  //     }
  //   });
};

document.body.addEventListener("keydown", pressKeys);
// volumeElem.addEventListener("change", setVolume);
volumeElem.addEventListener("input", setVolume);
keysCheckbox.addEventListener("click", showOrHideKeys);
