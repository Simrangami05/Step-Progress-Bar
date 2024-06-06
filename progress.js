const nextl = document.getElementById("next");
const prevl = document.getElementById("previous");
const progressl = document.querySelector(".bar-frontward");
const stepsl = document.querySelectorAll(".steps");

let currentChecked = 1;

nextl.addEventListener("click", () => {
  currentChecked++;
  if (currentChecked > stepsl.length) {
    currentChecked = stepsl.length;
  }
  updateStepProgress();
});

prevl.addEventListener("click", () => {
  currentChecked--;
  if (currentChecked < 1) {
    currentChecked = 1;
  }
  updateStepProgress();
});

function updateStepProgress() {
  stepsl.forEach((stepsl, index) => {
    if (index < currentChecked) {
      stepsl.classList.add("checked");
      stepsl.innerHTML = `
      <i class="fas fa-check"></i>
      <small>${
        index === 0
          ? "Start"
          // : index === stepsl.length - 1
          : index === 4
          ? "Final"
          : "Step " + index
      }</small>
      `;
    } else {
      stepsl.classList.remove("checked");
      stepsl.innerHTML = `
      <i class="fas fa-times"></i>
      `;
    }
  });

  const checkedNumber = document.querySelectorAll(".checked");

  progressl.style.width =
    ((checkedNumber.length - 1) / (stepsl.length - 1)) * 100 + "%";

  if (currentChecked === 1) {
    prevl.disabled = true;
  } else if (currentChecked === stepsl.length) {
    nextl.disabled = true;
  } else {
    prevl.disabled = false;
    nextl.disabled = false;
  }
}
