const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const number3 = document.querySelector(".number3");
const number4 = document.querySelector(".number4");
const number5 = document.querySelector(".number5");
const btnSubmit = document.querySelector(".btnSubmit");
const question = document.querySelector(".question");
const text = document.querySelector(".text");
const iconStar = document.querySelector(".icon-star");
const numbers = document.querySelector(".numbers");
const thankState = document.querySelector(".thank-you-state");
const middleCard = document.querySelector(".middle-card");

number1.addEventListener("click", () => {
  number1.classList.toggle("active");
  if (number2.classList.contains("active")) number2.classList.remove("active");
  if (number3.classList.contains("active")) number3.classList.remove("active");
  if (number4.classList.contains("active")) number4.classList.remove("active");
  if (number5.classList.contains("active")) number5.classList.remove("active");
});

number2.addEventListener("click", () => {
  number2.classList.toggle("active");
  if (number1.classList.contains("active")) number1.classList.remove("active");
  if (number3.classList.contains("active")) number3.classList.remove("active");
  if (number4.classList.contains("active")) number4.classList.remove("active");
  if (number5.classList.contains("active")) number5.classList.remove("active");
  var value2 = number2.textContent;
});

number3.addEventListener("click", () => {
  number3.classList.toggle("active");
  if (number1.classList.contains("active")) number1.classList.remove("active");
  if (number2.classList.contains("active")) number2.classList.remove("active");
  if (number4.classList.contains("active")) number4.classList.remove("active");
  if (number5.classList.contains("active")) number5.classList.remove("active");
  var value3 = number3.textContent;
});

number4.addEventListener("click", () => {
  number4.classList.toggle("active");
  if (number1.classList.contains("active")) number1.classList.remove("active");
  if (number2.classList.contains("active")) number2.classList.remove("active");
  if (number3.classList.contains("active")) number3.classList.remove("active");
  if (number5.classList.contains("active")) number5.classList.remove("active");
  const value4 = number4.textContent;
});

number5.addEventListener("click", () => {
  number5.classList.toggle("active");
  if (number1.classList.contains("active")) number1.classList.remove("active");
  if (number2.classList.contains("active")) number2.classList.remove("active");
  if (number3.classList.contains("active")) number3.classList.remove("active");
  if (number4.classList.contains("active")) number4.classList.remove("active");
  var value5 = number5.textContent;
});

btnSubmit.addEventListener("click", () => {
  if (!number1.classList.contains("active") && !number2.classList.contains("active") && !number3.classList.contains("active") && !number4.classList.contains("active") && !number5.classList.contains("active")) {
    alert("Nenhum número selecionado");
  } else {
    iconStar.classList.add("display-none");
    question.classList.add("display-none");
    text.classList.add("display-none");
    numbers.classList.add("display-none");
    btnSubmit.classList.add("display-none");
    middleCard.classList.add("display-none");

    if (number1.classList.contains("active")) {
      console.log(number1.textContent);
      thankState.innerHTML = `<div class="img-state">
                <img src="./src/images/illustration-thank-you.svg" alt="Image ThankYou">
                <p class="selected-number">You selected ${number1.textContent} out of 5</p>
                <h1>Thank you!</h1>
                <p class="info-msg">We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</p>
            </div>`;
    }

    if (number2.classList.contains("active")) {
      console.log(number2.textContent);
      thankState.innerHTML = `<div class="img-state">
                <img src="./src/images/illustration-thank-you.svg" alt="Image ThankYou">
                <p class="selected-number">You selected ${number2.textContent} out of 5</p>
                <h1>Thank you!</h1>
                <p class="info-msg">We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</p>
            </div>`;
    }

    if (number3.classList.contains("active")) {
      console.log(number3.textContent);
      thankState.innerHTML = `<div class="img-state">
                <img src="./src/images/illustration-thank-you.svg" alt="Image ThankYou">
                <p class="selected-number">You selected ${number3.textContent} out of 5</p>
                <h1>Thank you!</h1>
                <p class="info-msg">We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</p>
            </div>`;
    }

    if (number4.classList.contains("active")) {
      console.log(number4.textContent);
      thankState.innerHTML = `<div class="img-state">
                <img src="./src/images/illustration-thank-you.svg" alt="Image ThankYou">
                <p class="selected-number">You selected ${number4.textContent} out of 5</p>
                <h1>Thank you!</h1>
                <p class="info-msg">We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</p>
            </div>`;
    }

    if (number5.classList.contains("active")) {
      console.log(number5.textContent);
      thankState.innerHTML = `<div class="img-state">
                <img src="./src/images/illustration-thank-you.svg" alt="Image ThankYou">
                <p class="selected-number">You selected ${number5.textContent} out of 5</p>
                <h1>Thank you!</h1>
                <p class="info-msg">We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</p>
            </div>`;
    }
  }
});
