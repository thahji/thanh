const passwordInput = document.querySelector('input[type="password"]');
const passwordIcon = document.querySelector('.fa-key');

passwordIcon.addEventListener('click', function() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    passwordIcon.classList.add('password-hide');
  } else {
    passwordInput.type = 'password';
    passwordIcon.classList.remove('password-hide');
  }
});