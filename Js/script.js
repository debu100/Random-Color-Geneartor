const h1 = document.querySelector("h1");
const button = document.querySelector("button");
button.addEventListener("click", function () {
  const newRandomColor = makeRandomColor();
  document.body.style.backgroundColor = newRandomColor;
  h1.innerText = newRandomColor;
});

const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};
