const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');


form.addEventListener('submit', e =>{
    e.preventDefault();

    validateInputs();

});

const setError = (element , message) => {
    const formControl = element.parentElement;
    const errorDisplay = formControl.querySelector('.error');

    errorDisplay.innerText = message;
    formControl.classList.add('error');
    formControl.classList.remove('success');

}

const setSuccess = element =>{
    const formControl = element.parentElement;
    const errorDisplay = formControl.querySelector('.error');

    errorDisplay.innerText = '';
    formControl.classList.add('success');
    formControl.classList.remove('error');

};

const validateInputs = () =>{
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

     if(usernameValue === ''){
        setError(username,'Username is requiered');
     }else{
        setSuccess(username);
     }

     if(passwordValue === ''){
        setError(password,'Password is required');

     }else if (passwordValue.length<8){
        setError(password,'password must be 8 characters');
     }
     else{
        setSuccess(password);
     }

};


