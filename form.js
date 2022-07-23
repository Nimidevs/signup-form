const password = document.getElementById('passworde')
const confirmPassword = document.getElementById('confirm-password')
const errorMessage = document.querySelector('.password-err')
function confirmPasswords(){
    if(confirmPassword.value !== password.value){
        errorMessage.innerText = "*Passwords do not match!"
        password.classList.add('unmatch')
        confirmPassword.classList.add('unmatch')
        errorMessage.classList.add('errmessage')

        password.classList.remove('match')
        confirmPassword.classList.remove('match')
        errorMessage.classList.remove('message')
    }else if(confirmPassword.value === password.value){
        errorMessage.innerText = "Passowrds match"
        password.classList.add('match')
        confirmPassword.classList.add('match')
        errorMessage.classList.add('message')


        password.classList.remove('unmatch')
        confirmPassword.classList.remove('unmatch')
        errorMessage.classList.remove('errmessage')
    }
}

password.addEventListener('keyup', confirmPasswords)
confirmPassword.addEventListener('keyup', confirmPasswords)

