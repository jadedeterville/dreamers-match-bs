const loginBtn = document.getElementById('loginButton')
const loginModal = document.getElementById('loginModal')

const myModal = new bootstrap.Modal(document.getElementById("loginModal"), {});
loginBtn.onclick = function () {
  myModal.show();
};