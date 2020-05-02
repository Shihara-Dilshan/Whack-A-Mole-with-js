let divElements = document.querySelectorAll(".Mycontents");
let scoreB = document.getElementById("scoreBoard");
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
  let elems = document.querySelectorAll(".sidenav");
  M.Sidenav.init(elems);

  setInterval(randomImage, 2000);

  divElements.forEach((divElement) => {
    divElement.addEventListener("click", () => {
      if (divElement.classList.contains("mole")) {
        score++;
        scoreB.textContent = ` Your Score : ${score}`;
      } else if (divElement.classList.contains("mole2")) {
        score--;
        scoreB.textContent = ` Your Score : ${score}`;
      }
    });
  });
});

//randomoly generate image
let randomImage = () => {
  let appendDiv = document.getElementById(Math.ceil(Math.random() * 9));
  let appendDiv2 = document.getElementById(Math.ceil(Math.random() * 9));

  if (appendDiv != appendDiv2) {
    appendDiv.classList.add("mole");
    appendDiv2.classList.add("mole2");
    setTimeout(() => {
      appendDiv.classList.remove("mole");
      appendDiv2.classList.remove("mole2");
    }, 550);
  } else {
  }
};
