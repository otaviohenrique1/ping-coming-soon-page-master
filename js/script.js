const formulario = document.querySelector("#formulario");
const formularioInput = document.querySelector("#formulario-input");
const formularioErro = document.querySelector("#formulario-erro");
const formularioBotao = document.querySelector("#formulario-botao");

const mensagemErro = "Please provide a valid email address";

formularioInput.addEventListener("blur", (evento) => {
  let email = formularioInput.value;
  validaCampo(email);
});

formularioInput.addEventListener("invalid", (evento) => evento.preventDefault());

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault()
  let email = formularioInput.value;
  validaCampo(email);
});

function validaCampo(email) {
  if (validaCompoVazio(email)) {
    formularioInput.classList.add("formulario__input--erro");
    formularioErro.textContent = mensagemErro;
  } else if (!validaEmail(email)) {
    formularioInput.classList.add("formulario__input--erro");
    formularioErro.textContent = mensagemErro;
  } else {
    formularioInput.classList.remove("formulario__input--erro");
    formularioErro.textContent = "";
  }
}

function validaCompoVazio(email) {
  return email.length === 0;
}

function validaEmail(email) {
  return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email);
}