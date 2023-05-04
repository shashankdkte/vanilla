const button = document.getElementById("button");
const audioElement = document.getElementById("audio");

let currentAPIUrl =
  "https://sv443.net/jokeapi/v2/joke/Programming,Dark?blacklistFlags=nsfw,religious,political,racist,sexist";
// VoiceRSS Javascript SDK

function toggleButton() {
  button.disabled = !button.disabled;
}
function tellMe(joke) {
  VoiceRSS.speech({
    key: "43415475f933454e83f89b3e8929f1bb",
    src: joke,
    hl: "en-us",
    v: "Linda",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

//tellMe();

async function getJokes() {
  let joke = "";
  try {
    const response = await fetch(currentAPIUrl);
    const data = await response.json();
    if (data.setup) {
      joke = `${data.setup}...${data.delivery}`;
    } else {
      joke = data.joke;
    }
    tellMe(joke);
    toggleButton();
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", () => {
  getJokes();
});
audioElement.addEventListener("ended", toggleButton);
