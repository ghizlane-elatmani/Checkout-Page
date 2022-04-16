// =========================== VARIABLE ===========================
const buttonDecrement = document.getElementById("decrement");
const buttonIncrement = document.getElementById("increment");
const myInputNumber = document.getElementById("my-input-number");
const buttonDecrement2 = document.getElementById("decrement2");
const buttonIncrement2 = document.getElementById("increment2");
const myInputNumber2 = document.getElementById("my-input-number2");

const checkoutForm = document.getElementById("form");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

const fullNameInput = document.getElementById("name");
const addressInput = document.getElementById("address");
const cityInput = document.getElementById("city");
const countryInput = document.getElementById("country");
const postalCodeInput = document.getElementById("postal");

const btnSubmit = document.getElementById("btnSubmit");
const alertNotif = document.getElementById("alert");
const closeBtn = document.getElementById("closeBtn");

// =========================== INPUT NUMBER ===========================
buttonDecrement.addEventListener("click", (event) => {
  let id = buttonDecrement.getAttribute("id");
  stepper(id, myInputNumber);
});

buttonIncrement.addEventListener("click", (event) => {
  let id = buttonIncrement.getAttribute("id");
  stepper(id, myInputNumber);
});

buttonDecrement2.addEventListener("click", (event) => {
  let id = buttonDecrement.getAttribute("id");
  stepper(id, myInputNumber2);
});

buttonIncrement2.addEventListener("click", (event) => {
  let id = buttonIncrement.getAttribute("id");
  stepper(id, myInputNumber2);
});

function stepper(id, input) {
  let min = input.getAttribute("min");
  let max = input.getAttribute("max");
  let step = input.getAttribute("step");
  let value = input.getAttribute("value");

  let calcStep = id === "increment" ? step * 1 : step * -1;
  let newValue = parseInt(value) + calcStep;

  if (newValue >= min && newValue <= max) {
    input.setAttribute("value", newValue);
  }
}

// =========================== FORM ===========================
checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();
  isValidEmail = emailInput.checkValidity();
  isValidPhone = phoneInput.checkValidity();
  isValidName = fullNameInput.checkValidity();
  isValidAddress = addressInput.checkValidity();
  isValidCity = cityInput.checkValidity();
  isValidCountry = countryInput.checkValidity();
  isValidPostalCode = postalCodeInput.checkValidity();

  if (
    isValidEmail &&
    isValidPhone &&
    isValidName &&
    isValidAddress &&
    isValidCity &&
    isValidCountry &&
    isValidPostalCode
  ) {
    alertNotif.classList.add("show");
    alertNotif.classList.remove("hide");
    alertNotif.classList.add("showAlert");
    setTimeout(function () {
      alertNotif.classList.remove("show");
      alertNotif.classList.add("hide");
    }, 5000);
  }
});

closeBtn.addEventListener("click", function (event) {
  alertNotif.classList.remove("show");
  alertNotif.classList.add("hide");
});
