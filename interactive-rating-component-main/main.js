const activeStage = document.querySelector(".active-stage-container");
const thankYouStage = document.querySelector(".thank-you-stage-container");

const activeStageSubmitButton = document.querySelector(
  ".active-stage-container__submit"
);
const selectors = document.querySelectorAll(".rating-selector");
const valueDisplay = document.querySelector(".thank-you-rating-container");

let selectedValue = null;
activeStageSubmitButton.addEventListener("click", () => {
  let selected = false;
  selectors.forEach((a) => {
    if (!a.classList.contains("rating-selected")) return;
    selected = true;
    selectedValue = a.textContent;
    valueDisplay.textContent = `You selected ${selectedValue} out of 5`;
  });
  if (!selected) return;
  activeStage.style.display = "none";
  thankYouStage.style.display = "flex";
});

selectors.forEach((s) => {
  s.addEventListener("click", () => {
    selectors.forEach((a) => a.classList.remove("rating-selected"));
    s.classList.add("rating-selected");
  });
});
