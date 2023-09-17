const main = document.querySelector("main");
const voicesSelect = document.getElementById("voices");
const textarea = document.getElementById("text");
const readButton = document.getElementById("read");
const toggleButton = document.getElementById("toggle");
const closeButton = document.getElementById("close");

const message = new SpeechSynthesisUtterance();
message.rate = 1.3;

const data = [
  {
    image: "drink",
    text: "I'm Thirsty",
  },
  {
    image: "food",
    text: "I'm Hungry",
  },
  {
    image: "tired",
    text: "I'm Tired",
  },
  {
    image: "hurt",
    text: "I'm Hurt",
  },
  {
    image: "happy",
    text: "I'm Happy",
  },
  {
    image: "angry",
    text: "I'm Angry",
  },
  {
    image: "sad",
    text: "I'm Sad",
  },
  {
    image: "scared",
    text: "I'm Scared",
  },
  {
    image: "outside",
    text: "I Want To Go Outside",
  },
  {
    image: "home",
    text: "I Want To Go Home",
  },
  {
    image: "school",
    text: "I Want To Go To School",
  },
  {
    image: "grandma",
    text: "I Want To Go To Grandmas",
  },
];

function createBox(item) {
  const box = document.createElement("div");
  const { image, text } = item;
  box.classList.add("box");
  box.innerHTML = `
    <img src='img/${image}.jpg?raw=true' alt="${text}"/>
    <p class="info">${text}</p>
    `;
  box.addEventListener("click", () => handleSpeech(text, box));
  main.appendChild(box);
}

data.forEach(createBox);

function handleSpeech(text, box) {
  setTextMessage(text);
  speakText();
  box.classList.add("active");
  setTimeout(() => box.classList.remove("active"), 800);
}

let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();
  voices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;
    voicesSelect.appendChild(option);
  });
}

speechSynthesis.addEventListener("voiceschanged", getVoices);

function setTextMessage(text) {
  message.text = text;
}

function speakText() {
  speechSynthesis.speak(message);
}

readButton.addEventListener("click", () => {
  setTextMessage(textarea.value);
  speakText();
});

function setVoice(e) {
  message.voice = voices.find((voice) => voice.name === e.target.value);
}

voicesSelect.addEventListener("change", setVoice);

toggleButton.addEventListener("click", () => {
  document.getElementById("text-box").classList.toggle("show");
});

closeButton.addEventListener("click", () => {
  document.getElementById("text-box").classList.remove("show");
});



