const inputUsername = document.getElementById('username');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputPassword2 = document.getElementById('password2');

const smallUsername = document.querySelector('#username ~ small');
const smallEmail = document.querySelector('#email ~ small');
const smallPassword = document.querySelector('#password ~ small');
const smallPassword2 = document.querySelector('#password2 ~ small');

const btnSubmit = document.querySelector('button#submit');
const btnNewAcc = document.querySelector('button#newAcc');

const h2 = document.querySelector('h2');

const divs = [...document.querySelectorAll('div.form-control')]
const inputs = [...document.querySelectorAll('.form-control input')]




function checkIfEmpty(input) {
  if(input.value.trim() === '') {
    errorHandler(input);
    input.parentElement.querySelector('small').textContent = '*required';
  }
}

function errorHandler(input) {
  input.parentElement.classList.remove('success');
  input.parentElement.classList.add('error');
}

function successHandler(input) {
  input.parentElement.classList.remove('error');
  input.parentElement.classList.add('success');
}

function validateForm(event) {
  event.preventDefault();



  // USERNAME VALIDATION
  if (inputUsername.value.length < 3 ) {
    errorHandler(inputUsername);
    smallUsername.textContent = 'Username must be at least 3 characters';
  }
  else if (inputUsername.value.includes(' ')) {
    errorHandler(inputUsername);
    smallUsername.textContent = 'Spacebar is forbidden';
  }
  else {
    successHandler(inputUsername);
  }


  // EMAIL VALIDATION
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(inputEmail.value)) {
    errorHandler(inputEmail);
  }
  else {
    successHandler(inputEmail);
  }


  // PASSWORD VALIDATION
  if (inputPassword.value.length < 6) {
    errorHandler(inputPassword);
    smallPassword.textContent = 'Password must be at least 6 characters';
  }
  else if (inputPassword.value.includes(' ')) {
    errorHandler(inputPassword);
    smallPassword.textContent = 'Spacebar is forbidden';
  }
  else {
    successHandler(inputPassword);
  }

  // PASSWORD CONFIRM VALIDATION
  if (inputPassword2.value.length === 0) {
    errorHandler(inputPassword2);
    smallPassword2.textContent = 'Password confirmation is required';
  }
  else if (inputPassword2.value !== inputPassword.value) {
    errorHandler(inputPassword2);
    smallPassword2.textContent = 'Passwords do not match';
  }
  else {
    successHandler(inputPassword2);
  }


  //CHECKING IF ANY INPUT IS EMPTY
    inputs.forEach(input => checkIfEmpty(input));



  // ALL FORMS SUCCESS 
  let numberOfSuccess = 0;
  divs.forEach(form => {
    if (form.classList.contains('success')) {
      numberOfSuccess += 1;
    } 
  })
  if (numberOfSuccess === divs.length) {
    divs.forEach(form => form.classList.add('hidden'));
    btnSubmit.classList.add('hidden');
    btnNewAcc.classList.remove('hidden');
    h2.textContent = 'Thank you for registration!'


  }
}

btnSubmit.addEventListener('click', validateForm)
