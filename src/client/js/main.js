(() => {
  document.addEventListener('DOMContentLoaded',() => {
    document.getElementById('email').onkeyup=validateEmail;
    document.getElementById('password').onkeyup=validatePassword;
    document.getElementById('passwordConfirm').onkeyup=comparePasswords;
  },false);

  const setFieldStatus = (e, status) => {
    if (status) {
      e.target.parentElement.className = 'form-group has-success';
      e.target.nextElementSibling.style.display = 'none';
      // return true;
    } else {
      e.target.parentElement.className = 'form-group has-error';
      e.target.nextElementSibling.style.display = 'block';
      // return false;
    }
  }

  const validateEmail = (e) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setFieldStatus(e, re.test(e.target.value));
  }

  const validatePassword = (e) => {
    const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    setFieldStatus(e, re.test(e.target.value));
  }

  const comparePasswords = (e) => {
    const password = document.getElementById('password').value;
    setFieldStatus(e, password === e.target.value);
  }

  // const formValidation = () => {
  //   const email = document.getElementById('email').value;
  //   const password = document.getElementById('password').value;
  //   const passwordConfirm = document.getElementById('passwordConfirm').value;
  //   console.log(email);
  //   console.log(password);
  //   console.log(passwordConfirm);
  // }
})();
