import "./styles.css";

function eventListener(inputElement) {
  console.log(inputElement);

  if (inputElement.validity.valid) {
    console.log("Cumple con requisitos");
  } else {
    console.log("No cumple con los requisitos");
  }
}

const inputFields = document.querySelectorAll("input");
console.log(inputFields);

inputFields.forEach((inputElement) => {
  document.addEventListener("input", eventListener(inputElement));
});

// const body = document.body;
// body.style.fontFamily = "Arial";

// function showError() {
//   console.log(emailInput);
//   console.log(emailError);
//   if (emailInput.validity.valueMissing) {
//     console.log("poronga");
//     emailError.textContent =
//       "Debe introducir una dirección de correo electrónico";
//   } else if (emailInput.validity.typeMismatch) {
//     console.log("PORONGA");
//     emailError.textContent =
//       "El valor introducido debe ser una dirección de correo electrónico";
//   }

//   emailError.className = "error activo";
// }

// //Añadir eventlistener del tipo input a cada campo del form

// const emailInput = document.querySelector("#email");
// const emailError = document.querySelector("#email + span.error");
// console.log(emailInput);
// console.log(typeof emailInput);

// emailInput.addEventListener("input", () => {
//   //No se cumpln las restricciones del campo input email
//   if (emailInput.validity.valid) {
//     console.log("Se cumple");
//     emailError.textContent = "";
//     emailError.className("error");
//   }
//   //Se cumplen las restricciones del campo input email
//   else {
//     console.log("No se cumple");
//     showError();
//   }
// });
