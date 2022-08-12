const btnLogar = document.querySelector('.btnLogin')
const user = document.querySelector('.input-user')
const password = document.querySelector('.input-password')

function login(event) {
    event.preventDefault()
    if (user.value === 'hemolabes' && password.value === 'hemolabes' ) {
        localStorage.setItem('key', user.value)
        window.location.href='home.html'
        alert('Login realizado com sucesso!' )
    } else if (user.value === '' || password.value === ''){
        alert('Campo imcompleto')
    } else {
        alert('Login ou senha inválido!')
    }
}
btnLogar.addEventListener('click', login)

