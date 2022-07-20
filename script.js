const buttonCadastrar = document.getElementById('cadastrar');
const buttonLogin = document.getElementById('logar');
const inputLoginNome = document.getElementById('textinput3');
const inputLoginSenha = document.getElementById('textinput4');
const buttonshowpasswordtwo = document.getElementById('showpassowordtwo');
const inputCadastroNome = document.getElementById('textinput1');
const inputCadastroSenha = document.getElementById('textinput2');
const buttonshowpassword = document.getElementById('showpassoword');
const imageViews2 = document.getElementById('imageView2')
const imageViews1 = document.getElementById('imageView1')


let  DB = []


if (JSON.parse(localStorage.getItem('DB')) === null) {
    DB = []
    localStorage.setItem('DB', JSON.stringify(DB));
} else {
    DB = JSON.parse(localStorage.getItem('DB'))
}

const cadastrar = () => {   

        function validation(buscaDb) {
            return buscaDb.nome === inputCadastroNome.value;
        }
    
        const dbStorage = JSON.parse(localStorage.getItem('DB'))
        const filtered = dbStorage.find(validation)

        console.log(filtered)

    
    
    if (inputCadastroNome.value === "" || inputCadastroSenha === "" ){
        alert ("Prencha os campos de texto")

    } else {
        if (filtered === undefined){
            DB.push(
            {
            nome: inputCadastroNome.value,
            senha: inputCadastroSenha.value
            })
            localStorage.setItem('DB', JSON.stringify(DB));
            alert("Usuario Cadastrado com sucesso")
        } else {
            alert ("Ja existe um usuario com este nome")
        }
    }
    
}


const mostrarsenha = () => {
    inputCadastroSenha.classList.toggle('view')

    if (inputCadastroSenha.classList.contains('view')) {
        inputCadastroSenha.type ='text'
        imageView1.setAttribute('src', './img/olho-on.svg')
    } else {
        inputCadastroSenha.type ='password'
        imageView1.setAttribute('src', './img/olho-off.svg')
    }
}



const login = () => {

    if (inputLoginSenha.value === "" || inputLoginSenha === "" ){
 alert ("Prencha os campos de texto")

    } else {
    const dadosLogin = {
        nome: inputLoginNome.value,
        senha: inputLoginSenha.value
    }
    
    function validation(buscaDb) {
        return buscaDb.nome === dadosLogin.nome && buscaDb.senha === dadosLogin.senha;
    }

    const dbStorage = JSON.parse(localStorage.getItem('DB'))
    console.log(dbStorage)
    const filtered = dbStorage.find(validation)

    if(filtered == undefined) {
        alert('Tente novamente!')
    } else {
        alert('Autenticado com sucesso!')
        window.location.href = "./sortear.html";
    }
    
}
}

const mostrarsenhatwo = () => {
    inputLoginSenha.classList.toggle('view')

    if (inputLoginSenha.classList.contains('view')) {
        inputLoginSenha.type ='text'
        imageView2.setAttribute('src', './img/olho-on.svg')
    } else {
        inputLoginSenha.type ='password'
        imageView2.setAttribute('src', './img/olho-off.svg')
    }
}


buttonCadastrar.addEventListener('click', cadastrar)
buttonLogin.addEventListener('click', login)
buttonshowpassword.addEventListener('click', mostrarsenha)
buttonshowpasswordtwo.addEventListener('click', mostrarsenhatwo)