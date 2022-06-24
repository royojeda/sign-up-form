password = document.querySelector('#password');
passwordConfirmation = document.querySelector('#passwordConfirmation');
passwordError = document.querySelector('input + span');

passwordConfirmation.addEventListener('input', checkMatch);

function checkMatch() {
  if (passwordConfirmation.value != '') {
    password.addEventListener('input', checkMatch);
    if (password.value != passwordConfirmation.value) {
      password.style['border-color'] = 'red';
      passwordConfirmation.style['border-color'] = 'red';
      passwordError.style['visibility'] = 'visible'
    } else {
    password.style['border-color'] = 'lightgray';
    passwordConfirmation.style['border-color'] = 'lightgray';
    passwordError.style['visibility'] = 'hidden'
    }
  } else {
    password.removeEventListener('input', checkMatch);
  }
}
