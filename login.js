const btnLogar = document.querySelector('.btnLogin')
const user = document.querySelector('.input-user')
const password = document.querySelector('.input-password')

btnLogar.addEventListener('click', login)

function login(event) {
    event.preventDefault()
    if (user.value === 'hemolabes' && password.value === 'hemolabes' ) {
       window.location.href='home.html'
    } else if (user.value === '' || password.value === ''){
        alert('Campo imcompleto')
    } else {
        alert('Login ou senha inválido!')
    }
}

