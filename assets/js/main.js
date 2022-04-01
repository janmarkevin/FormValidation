const email = document.getElementById('email')
const password = document.getElementById('password')
const validateForm = document.getElementById('form')
const submitButton = document.getElementById('registerBtn')
const closeTab = document.getElementsByClassName("close")[0];
const modal = document.getElementById('success')
modal.classList.add('hidden')
email.classList.add('neutral')
password.classList.add('neutral')

//Selecting Email and validating Live, if the inputted email are valid or not 
email.addEventListener('change', () => {
  let emailValue = email.value
  const patternEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  const errorEmail = document.getElementById('errorEmail')

  email.onblur = () => {
    emailValue = emailValue.replace(/\s+$/, '') 
  }

  if (emailValue.match(patternEmail)) {
    email.classList.add("valid")
    email.classList.remove('invalid')
    errorEmail.innerHTML = "Your Email address is Valid!"
    errorEmail.classList.add('success')
    errorEmail.classList.remove('error')
    email.classList.add('border-success')
    email.classList.remove('border-error')
    email.classList.remove('neutral')
  } else {
    email.classList.remove('valid')
    email.classList.add("invalid")
    errorEmail.innerHTML = "Please Enter Valid Email Address"
    errorEmail.classList.add('error')
    errorEmail.classList.remove('success')
    email.classList.add('border-error')
    email.classList.remove('border-success')
    email.classList.remove('neutral')
  }

  if (emailValue === "") {
    email.classList.remove("valid")
    email.classList.remove('invalid')
    email.classList.remove('border-error')
    email.classList.remove('border-success')
    email.classList.add('neutral')
    errorEmail.innerHTML = ""
  }
})

//Same function as Email
password.addEventListener('change', () => {
  const passwordValue = password.value
  const errorPassword = document.getElementById('errorPassword')
  const patternPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])/

  if (passwordValue.match(patternPassword)) {
    password.classList.add("valid")
    password.classList.remove('invalid')
    errorPassword.innerHTML = "Your Password address is Valid!"
    errorPassword.classList.add('success')
    errorPassword.classList.remove('error')
    password.classList.add('border-success')
    password.classList.remove('border-error')
    password.classList.remove('neutral')
  } else {
    password.classList.remove('valid')
    password.classList.add("invalid")
    errorPassword.innerHTML = "Please Enter Alphanumeric Password and at least One UPPERCASE Letter"
    errorPassword.classList.add('error')
    errorPassword.classList.remove('success')
    password.classList.add('border-error')
    password.classList.remove('border-success')
    password.classList.remove('neutral')
  }

  if (passwordValue === "") {
    password.classList.remove("valid")
    password.classList.remove('invalid')
    password.classList.remove('border-error')
    password.classList.remove('border-success')
    password.classList.add('neutral')
    errorPassword.innerHTML = ""
  }
})

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
      modal.classList.remove('hidden')
    }

    closeTab.onclick = () => {
      modal.classList.add('hidden')
    }

    window.onclick = (event) => {
      if (event.target === modal) {
        modal.classList.add('hidden')
      }
    }
  } else { //if there's an error to the inputted fields the button while not be clickable
    submitButton.setAttribute('disabled', 'disabled')
  }
})