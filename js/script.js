const html = document.querySelector("html");
const body = document.querySelector("body");
const buttons = Array.from(document.querySelectorAll("button"));
const blocks = Array.from(document.querySelectorAll(".block"));
blocks.unshift(document.querySelector(".main-info"));
const certificates = document.querySelectorAll(".a");
const codeBlock = document.querySelectorAll(".block")[4];
const code = document.querySelector("code");
let codePosition = 0;

html.addEventListener("click", (event) => {
  blur(event);
  certificate(event);
});
window.addEventListener("load", () => {
  ticker();
  window.location.hash = "";
});

// Blur option
const blur = (event) => {
  if (buttons.indexOf(event.target) === -1) {
    blocks.forEach(
      (e, i) =>
        e.classList.remove("blur") & buttons[i].classList.remove("active")
    );
    return;
  }
  blocks.forEach(
    (e, i) => e.classList.add("blur") & buttons[i].classList.remove("active")
  );
  const location = (i) => (window.location.hash = `${i}`);
  buttons.forEach((e, i) => {
    return event.target === e
      ? blocks[i].classList.toggle("blur") &
          e.classList.add("active") &
          location(i)
      : null;
  });
};

// Show certificate option
const certificate = (event) => {
  body.classList.add("body-hide");
  if (event.target === certificates[0]) {
    body.style.backgroundImage = 'url("assets/img/diploma.jpg")';
  } else if (event.target === certificates[1]) {
    body.style.backgroundImage = 'url("assets/img/rsschool.jpg")';
  } else if (event.target === certificates[2]) {
    body.style.backgroundImage = 'url("assets/img/stepik.jpg")';
  } else {
    body.classList.remove("body-hide");
    body.style.backgroundImage = 'url("assets/img/screen.jpg")';
  }
};

// Ticker option
function ticker() {
  if (codeBlock.offsetWidth < 535) {
    setTimeout(ticker, 50);
  } else {
    setTimeout(ticker, 2000);
    code.style.left = "5px";
    codePosition = 0;
    return;
  }

  if (codePosition !== -1) {
    code.style.left = `${code.offsetLeft - 1}px`;
    if (codeBlock.offsetWidth - 535 >= code.offsetLeft) {
      codePosition = -1;
    }
  } else if (codePosition !== 1) {
    code.style.left = `${code.offsetLeft + 1}px`;
    if (code.offsetLeft >= 5) {
      codePosition = 1;
    }
  }
}
