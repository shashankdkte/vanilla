const toggleSwitch = document.querySelector("input[type='checkbox']");
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

function modeSwap(theme, navStyle, textStyle, icon1, icon2) {
  nav.style.backgroundColor = `rgb(${navStyle} ${navStyle} ${navStyle} / 50%)`;
  textBox.style.backgroundColor = `rgb(${textStyle} ${textStyle} ${textStyle} / 50%)`;
  toggleIcon.children[1].classList.replace(`fa-${icon1}`, `fa-${icon2}`);
  toggleIcon.children[0].textContent = `${theme} Mode`;
  image1.src = `./images/undraw_proud_coder_${theme}.svg`;
  image2.src = `./images/undraw_conceptual_idea_${theme}.svg`;
  image3.src = `./images/undraw_feeling_proud_${theme}.svg`;
}

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    modeSwap("dark", 0, 255, "sun", "moon");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    modeSwap("light", 255, 0, "moon", "sun");
  }
}
toggleSwitch.addEventListener("change", switchTheme);
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    modeSwap("dark", 0, 255, "sun", "moon");
  }
}
