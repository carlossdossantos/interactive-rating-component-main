const ratingButtons = document.querySelectorAll(".numbers button");
const btnSubmit = document.querySelector(".btnSubmit");
const question = document.querySelector(".question");
const text = document.querySelector(".text");
const iconStar = document.querySelector(".icon-star");
const numbers = document.querySelector(".numbers");
const thankState = document.querySelector(".thank-you-state");
const middleCard = document.querySelector(".middle-card");
const errorMessage = document.querySelector(".error-message");

let selectedRating = null;

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove("display-none");
  errorMessage.focus();
}

function hideError() {
  errorMessage.textContent = "";
  errorMessage.classList.add("display-none");
}

function clearRatingSelection() {
  ratingButtons.forEach((button) => {
    button.classList.remove("active");
    button.setAttribute("aria-checked", "false");
  });
}

function selectRating(button) {
  clearRatingSelection();
  hideError();
  button.classList.add("active");
  button.setAttribute("aria-checked", "true");
  selectedRating = button.textContent.trim();
}

function moveFocus(index) {
  const button = ratingButtons[index];
  button.focus();
  selectRating(button);
}

ratingButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    selectRating(button);
  });

  button.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      moveFocus((index + 1) % ratingButtons.length);
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      moveFocus((index - 1 + ratingButtons.length) % ratingButtons.length);
    }

    if (event.key === "Home") {
      event.preventDefault();
      moveFocus(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      moveFocus(ratingButtons.length - 1);
    }
  });
});

btnSubmit.addEventListener("click", () => {
  if (!selectedRating) {
    showError("Por favor, selecione um número antes de enviar.");
    return;
  }

  hideError();
  iconStar.classList.add("display-none");
  question.classList.add("display-none");
  text.classList.add("display-none");
  numbers.classList.add("display-none");
  btnSubmit.classList.add("display-none");
  middleCard.classList.add("display-none");

  thankState.innerHTML = `<div class="img-state">
            <img src="./src/images/illustration-thank-you.svg" alt="Image ThankYou">
            <p class="selected-number">You selected ${selectedRating} out of 5</p>
            <h1>Thank you!</h1>
            <p class="info-msg">We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</p>
        </div>`;
});
