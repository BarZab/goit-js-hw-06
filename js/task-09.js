function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('button')

const body = document.querySelector('body')

const colorName = document.querySelector('span.color')

button.addEventListener("click", () => {
  const color = getRandomHexColor()
  colorName.innerHTML = color
  body.style.backgroundColor = color
});