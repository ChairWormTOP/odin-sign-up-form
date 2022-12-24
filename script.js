const createAccount = () => {
    const password = document.getElementById('password')
    const confirmPassword = document.getElementById('confirm_password')
    const error_message = document.getElementById('error-message') 

    if (password.value !== confirmPassword.value) {
        password.classList.add('error')
        confirmPassword.classList.add('error')
        error_message.style.display = 'inline'
    } else {
        password.classList.remove('error')
        confirmPassword.classList.remove('error')
        error_message.style.display = 'none'
    }
}