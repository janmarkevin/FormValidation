function EmailValidation() {
  let email = document.getElementById('email').value
  let email1 = document.getElementById('email')
  let text = document.getElementById('text')
  let patternEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

  if (email.match(patternEmail)) {
    email1.classList.add("valid")
    email1.classList.remove('invalid')
    text.innerHTML = "Your Email address is Valid!"
    text.style.color = "#00ff00"
    email1.style.border = "1px solid #000"
  } else {
    email1.classList.remove('valid')
    email1.classList.add("invalid")
    text.innerHTML = "Please Enter Valid Email Address"
    text.style.color = "#ff0000"
    email1.style.border = "1px solid #ff0000"
    email1.style.outline = "#ff0000"
  }

  if (email == "") {
    email1.classList.remove("valid")
    email1.classList.remove('invalid')
    text.innerHTML = ""
    email1.style.border = "1px solid #000"
    email1.style.outline = "#000"
  }
}

function PasswordValidation() {
  let password = document.getElementById('password').value
  let password1 = document.getElementById('password')
  let textPassword = document.getElementById('textPassword')
  let patternPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

  if (password.match(patternPassword)) {
    password1.classList.add("valid")
    password1.classList.remove('invalid')
    textPassword.innerHTML = "Your password address is Valid!"
    textPassword.style.color = "#00ff00"
    password1.style.border = "1px solid #000"
    password1.style.outline = "#ff0000"
  } else {
    password1.classList.remove('valid')
    password1.classList.add("invalid")
    textPassword.innerHTML = "Please Enter Alphanumeric Password and at least One UPPERCASE Letter"
    textPassword.style.color = "#ff0000"
    password1.style.border = "1px solid #ff0000"
    password1.style.outline = "#ff0000"
  }

  if (password == "") {
    password1.classList.remove("valid")
    password1.classList.remove('invalid')
    textPassword.innerHTML = ""
    password1.style.border = "1px solid #000"
    password1.style.outline = "#000"
  }
}

function validate() {
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value

  let gender = document.getElementById('gender').checked

  const terms = document.getElementById('terms')
  const btn = document.getElementById('register')

  if (email != "" && password != "" && terms.checked === true && gender != "") {
    btn.removeAttribute('disabled')
  }
}