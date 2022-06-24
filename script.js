password = document.querySelector('#password');
passwordConfirmation = document.querySelector('#passwordConfirmation');
passwordError = document.querySelector('input + span');
button = document.querySelector('.bottom button');
email = document.querySelector('#email');

button.disabled = true;
passwordConfirmation.addEventListener('input', checkMatch);
email.addEventListener('input', checkMatch);

function checkMatch() {
  if (passwordConfirmation.value != '') {
    password.addEventListener('input', checkMatch);
    if (password.value != passwordConfirmation.value) {
      password.style['border-color'] = 'red';
      passwordConfirmation.style['border-color'] = 'red';
      passwordError.style['visibility'] = 'visible'
      button.disabled = true;
    } else {
      password.style['border-color'] = 'lightgray';
      passwordConfirmation.style['border-color'] = 'lightgray';
      passwordError.style['visibility'] = 'hidden'
      if (email.checkValidity()) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    }
  } else {
    password.style['border-color'] = 'lightgray';
    passwordConfirmation.style['border-color'] = 'lightgray';
    passwordError.style['visibility'] = 'hidden'
    password.removeEventListener('input', checkMatch);
    button.disabled = true;
  }
}
