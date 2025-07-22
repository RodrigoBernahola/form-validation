import "./styles.css";

function comprobarContraseñas() {
  let res;

  const pwd = document.querySelector("#pwd").value;
  const rePwd = document.querySelector("#re-pwd").value;

  pwd === rePwd ? (res = true) : (res = false);

  return res;
}

function eventListenerBoton(event) {
  let flag = true;
  console.log(event);
  const boton = event.target;
  console.log(boton);
  console.log(inputFields);
  for (const inputElement of inputFields) {
    if (!inputElement.validity.valid) {
      console.log(
        "Los campos requeridos no han sido completados de forma correcta",
      );
      flag = false;
      break;
    }
  }

  if (flag) {
    let res = comprobarContraseñas();
    if (res) {
      alert("High Five");
    } else {
      alert("Las contraseñas no coinciden");
    }
  }
}

function showError(inputElement, spanElement) {
  if (inputElement.validity.valueMissing) {
    spanElement.textContent = "No puede dejar este campo vacío";
  } else if (inputElement.validity.typeMismatch) {
    spanElement.textContent =
      "El valor ingresado no se corresponde con el formato esperado";
  } else if (inputElement.validity.tooShort) {
    spanElement.textContent =
      "El valor ingresado no cumple con la longitud mínima requerida";
  } else if (inputElement.validity.patternMismatch) {
    spanElement.textContent = "No se cumple con el patrón requerido";
  }

  spanElement.className = "error activo";
}

function eventListener(event) {
  console.log(event);
  const inputElement = event.target;
  const spanElement = inputElement.nextElementSibling;
  console.log(inputElement);
  console.log(spanElement);

  if (inputElement.validity.valid) {
    console.log("Cumple con requisitos");
    spanElement.textContent = "";
    spanElement.className = "error";
  } else {
    console.log("No cumple con los requisitos");
    showError(inputElement, spanElement);
  }
}

const inputFields = document.querySelectorAll("input");
const botonAceptar = document.querySelector("button");

console.log(inputFields);

inputFields.forEach((inputElement) => {
  inputElement.addEventListener("input", eventListener);
});

botonAceptar.addEventListener("click", eventListenerBoton);
