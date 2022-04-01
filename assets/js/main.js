const email = document.getElementById('email')
const password = document.getElementById('password')
const validateForm = document.getElementById('form')

//Selecting Email and validating Live, if the inputted email are valid or not 
email.addEventListener('change', () => {
  let emailValue = email.value
  const patternEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  const textEmail = document.getElementById('text')

  email.onblur = () => {
    emailValue = emailValue.replace(/\s+$/, '') 
  }

  if (emailValue.match(patternEmail)) {
    email.classList.add("valid")
    email.classList.remove('invalid')
    textEmail.innerHTML = "Your Email address is Valid!"
    textEmail.style.color = "#00ff00"
    email.style.border = "1px solid #000"
  } else {
    email.classList.remove('valid')
    email.classList.add("invalid")
    textEmail.innerHTML = "Please Enter Valid Email Address"
    textEmail.style.color = "#ff0000"
    email.style.border = "1px solid #ff0000"
    email.style.outline = "#ff0000"
  }

  if (emailValue === "") {
    email.classList.remove("valid")
    email.classList.remove('invalid')
    textEmail.innerHTML = ""
    email.style.border = "1px solid #000"
    email.style.outline = "#000"
  }
})

//Same function as Email
password.addEventListener('change', () => {
  const passwordValue = password.value
  const textPassword = document.getElementById('textPassword')
  const patternPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])/

  if (passwordValue.match(patternPassword)) {
    password.classList.add("valid")
    password.classList.remove('invalid')
    textPassword.innerHTML = "Your password address is Valid!"
    textPassword.style.color = "#00ff00"
    password.style.border = "1px solid #000"
    password.style.outline = "#ff0000"
  } else {
    password.classList.remove('valid')
    password.classList.add("invalid")
    textPassword.innerHTML = "Please Enter Alphanumeric Password and at least One UPPERCASE Letter"
    textPassword.style.color = "#ff0000"
    password.style.border = "1px solid #ff0000"
    password.style.outline = "#ff0000"
  }

  if (passwordValue == "") {
    password.classList.remove("valid")
    password.classList.remove('invalid')
    textPassword.innerHTML = ""
    password.style.border = "1px solid #000"
    password.style.outline = "#000"
  }
})

const submitButton = document.getElementById('register')
const closeTab = document.getElementsByClassName("close")[0];
const modal = document.getElementById('success')

modal.classList.add('no-show')

//Validating the Inputted Fields
validateForm.addEventListener('change', () => {
  const emailValue = email.value
  const passwordValue = password.value
  const patternEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  const patternPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])/

  const female = document.getElementById('female')
  const male = document.getElementById('male')
  let gender_result = ''

  const terms = document.getElementById('terms')

  //To select the value of the gender
  if (female.checked) {
    gender_result = female.value
  } else if (male.checked) {
    gender_result = male.value
  }

  //If the inputted fields are valid and all fields are filled, the button will be clickable
  if (emailValue.match(patternEmail) && passwordValue.match(patternPassword) && terms.checked === true && gender_result != '') {
    submitButton.removeAttribute('disabled')
    submitButton.classList.add('cursor')

    submitButton.onclick = () => {
      modal.classList.remove('no-show')
    }

    closeTab.onclick = () => {
      modal.classList.add('no-show')
    }

    window.onclick = (event) => {
      if (event.target === modal) {
        modal.classList.add('no-show')
      }
    }
  } else { //if there's an error to the inputted fields the button while not be clickable
    submitButton.setAttribute('disabled', 'disabled')
  }
})