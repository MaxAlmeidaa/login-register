const email = document.getElementById("email");
const password = document.getElementById("password");
const emailModal = document.getElementById("emailModal");
const passwordModal = document.getElementById("passwordModal");
const passwordConfirmModal = document.getElementById("passwordModalConfirm");
const btnRegister = document.getElementById("btnRegister");
const btnLogin = document.getElementById("btn-login");
const nameModal = document.getElementById("nameModal");
const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,25}$/;
const invalidLogin = document.getElementById("invalidLogin")
const invalidEmail = document.getElementById("invalidEmail")
const invalidPasswordModal = document.getElementById("invalidPasswordModal")
const invalidPasswordModalConfirm = document.getElementById("invalidPasswordModalConfirm")

class Modal {
  constructor() {
    this.container = document.getElementById("container");
    this.mostrarModalBtn = document.getElementById("btn-register");
    this.fecharModalBtn = document.getElementById("exit");
    this.modal = document.getElementById("vis-modal");

    this.fecharModalBtn.addEventListener("click", () => {
      this.exitModal();
    });

    this.mostrarModalBtn.addEventListener("click", () => {
      this.abrirModal();
    });
  }

  exitModal() {
    this.modal.style.display = "none";
  }
  abrirModal() {
    this.modal.style.display = "block";
  }
}

const modal = new Modal();

const listUsers = [];

function users(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
}

btnRegister.addEventListener("click", () => {
  if (emailModal.value.match(pattern)) {
    if (passwordModal.value === passwordConfirmModal.value && passwordModal.value.match(patternPassword)) {
      const newUser = new users(
        nameModal.value,
        emailModal.value,
        passwordModal.value
      );
      listUsers.push(newUser);
      nameModal.value = "";
      emailModal.value = "";
      passwordModal.value = "";
      passwordConfirmModal.value = "";
      invalidEmail.style.display = "none"
      invalidPasswordModal.style.display = "none"
      invalidPasswordModalConfirm.style.display = "none"
      alert("Conta criada com sucesso!");
      modal.exitModal();
    } else {
      passwordModal.value = "";
      passwordConfirmModal.value = "";
      invalidPasswordModal.style.display = "block"
      invalidPasswordModalConfirm.style.display = "block"
      alert("Senhas inválidas!");
    }

  } else {
    invalidEmail.style.display = "block"
    alert("Por favor insira um e-mail válido");
  }
});

let userLogged;
btnLogin.addEventListener("click", () => {
  if (email.value.match(pattern) && password.value.match(patternPassword)) {
    for (let i = 0; i < listUsers.length; i++) {
      if (email.value === listUsers[i].email &&
        password.value === listUsers[i].password) {
        userLogged = listUsers[i];
        password.value = "";
        email.value = "";
        break;
      }
    }
    if (userLogged) {
      alert(`Seja Bem vindo ${userLogged.name}`);
      sessionStorage.setItem("token", uuidv4());
      location.href = "dashboard.html";
      invalidLogin.style.display = "none"
    }
  } else {
    invalidLogin.style.display = "block"
    alert("Por favor insira um e-mail valido");
  }
});

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
