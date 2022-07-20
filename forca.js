const  letrashtml = document.getElementById("letras")
const  tracohtml = document.getElementById("traco")
const  divdica = document.getElementById("dica")
const  coracaohtml = document.getElementById("gameover")
const  teclado = document.getElementById("teclado")
const  letrasUtilizadas = document.getElementById("alfabetoutilizavel")
const  fotopokemons  = document.getElementById('fotopokemon')
camadasimg = 0
let traco = ""
let elementotraco = ""
let palavras = []
let numero = ""
let sorteada = ""
let letras = []
let conteudoElemento = ""
let elemento = ""
let ganhador = 0
let camada = ""
let derrota = -1
let json = {}
let url = ''
let alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 'l', 'm','n','o', 'p','q', 'r', 's','t','u', 'v', 'w', 'x', 'y', 'z']
let camadaalfabeto = "" 
let dica = ""
let dicatype = ""
let conteudoType = "" 
let urlfoto = ""
function sortear() {
    window.location.href = "./forca.html";
    }
function escolhendoPalavra(){
    numero = Math.floor(Math.random() * palavras.length)
    sorteada = palavras[numero];

    url = json.results[numero].url;
    getType();

    [...sorteada].forEach(function(char){
    letras.push(char)
    
    let div = document.createElement('div');
    div.id = 'letradaforca'
    div.className = 'invisible'

    // create a new heading and add it to the div
    elemento = document.createElement("a"); // Criar elemento
    conteudoElemento = document.createTextNode(char); // Criar o conteudo de texto
    elemento.appendChild(conteudoElemento);// Anexar o conteudo de texto ao elemento <a>
    div.appendChild(elemento);
    letrashtml.appendChild(div)  

    
    

})
}
function verificar () {
    const  letradaforca = document.getElementById("letradaforca")
    camadaalfabeto = alfabeto.indexOf(teclado.value) 
    alfabeto[camadaalfabeto] = ""
    if (camadaalfabeto === -1){
        alert("esta letra ja foi usada")
    } else {
        letrasUtilizadas.children[camadaalfabeto].classList.add("usado")
    if (letras.includes(teclado.value)){
        [...sorteada].forEach(function(char){ 
            if (char == teclado.value){
            camada = letras.indexOf(char)
            letras[camada] = ""   
            letrashtml.children[camada].classList.remove("invisible")
            letrashtml.children[camada].classList.add("visible")
            ganhador = ganhador + 1
        
            if (ganhador >= letras.length){
                fotopokemons.setAttribute('src',  urlfoto)
                fotopokemons.classList.remove("imginvisible")
                setTimeout(() => {
                
                alert("VOCÊ ACERTOU")
                window.location.href = "./sortear.html";

                  }, "1000"
                  )     
            }  
            } 
            })
    } else {
        derrota = derrota + 1
        coracaohtml.children[derrota].innerHTML = "❤"
        alert("errou")
        console.log(derrota)
        if (derrota === 5) {
            fotopokemons.setAttribute('src',  urlfoto)
            fotopokemons.classList.remove("imginvisible")
            setTimeout(() => {
                alert("VOCÊ PERDEU O POKEMON ERA O: " + sorteada)
                window.location.href = "./sortear.html";
                  }, "3000"
                  )  
            } 
        }
    }
        teclado.value = ""
    }
    async function getPokemon() {
        const result = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
        json = await result.json()
        for (let i = 0; i < 100; i++ ){
            palavras.push(json.results[i].name)
        }
        escolhendoPalavra()
    }
    getPokemon()
    async function getType() {
        const result = await fetch(url)
        json = await result.json()
        urlfoto = json.sprites.front_default
        dica = json.types[0].type.name          
    dicatype = document.createElement("h2");
    conteudoType = document.createTextNode(dica); 
    dicatype.appendChild(conteudoType);
    divdica.appendChild(dicatype)
    }
    

    