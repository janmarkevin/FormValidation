function EmailValidation() {
  let email = document.getElementById('email').value
  let email1 = document.getElementById('email')
  let text = document.getElementById('text')
  let patternEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

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
  let patternPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])/

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
  let patternEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  let password = document.getElementById('password').value
  let patternPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])/

  let female = document.getElementById('female')
  let male = document.getElementById('male')
  let gender_result = ''

  const terms = document.getElementById('terms')
  const btn = document.getElementById('register')

  const span = document.getElementsByClassName("close")[0];
  const modal = document.getElementById('success')

  if (female.checked) {
    gender_result = female.value
  } else if (male.checked) {
    gender_result = male.value
  }

  if (email.match(patternEmail) && password.match(patternPassword) && terms.checked === true && gender_result != '') {
    btn.removeAttribute('disabled')
    btn.style.cursor = "pointer"

    btn.onclick = function() {
      modal.style.display = "block"
    }
    span.onclick = function() {
      modal.style.display = "none"
    }

    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = 'none'
      }
    }
  } else {
    btn.setAttribute('disabled', 'disabled')
  }
}