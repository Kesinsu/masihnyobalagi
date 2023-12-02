const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-Btn");
const noBtn = document.querySelector(".no-Btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Aaaaa, I love u too";
  gif.src =
    "https://raw.githubusercontentcom/DzarelDeveloper/img/,aon/gif.webp";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.stle.top = randomY + "px";
});