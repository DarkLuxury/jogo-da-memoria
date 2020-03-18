let cartas = document.querySelectorAll(".carta")
let imagensSalvas = ["1.png", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"]
let imagens = imagensSalvas.concat(imagensSalvas)

setTimeout(function(){ // Voltar a primeira imagem em um tempo determinado
    for(let carta of cartas){
        carta.style.backgroundImage = 'url("./_images/1.png")'
    }
}, 4000)


function embaralhar(lista) { // função para embaralhar as imagens
    let valor_temporario;
    let indice_aleatorio;
  
    for (let i = lista.length -1; i !== 0; i--) {
        indice_aleatorio = Math.floor(Math.random() * i);
  
        valor_temporario = lista[i];
        lista[i] = lista[indice_aleatorio];
        lista[indice_aleatorio] = valor_temporario;
    }
    return lista;
  }
imagens = embaralhar(imagens) // Chamada da função ao iniciar
  
for(let i = 0; i < cartas.length; i++){
    cartas[i].style.backgroundImage = `url("./_images/${imagens[i]}")` // Posicionar as imagens
}

let carta0 = document.getElementById(0)
let carta1 = document.getElementById(1)
let carta2 = document.getElementById(2)
let carta3 = document.getElementById(3)
let carta4 = document.getElementById(4)
let carta5 = document.getElementById(5)
let carta6 = document.getElementById(6)
let carta7 = document.getElementById(7)
let carta8 = document.getElementById(8)
let carta9 = document.getElementById(9)
let carta10 = document.getElementById(10)
let carta11 = document.getElementById(11)
let carta12 = document.getElementById(12)
let carta13 = document.getElementById(13)
let carta14 = document.getElementById(14)
let carta15 = document.getElementById(15)
carta0.addEventListener("click", mudaCarta)
carta1.addEventListener("click", mudaCarta)
carta2.addEventListener("click", mudaCarta)
carta3.addEventListener("click", mudaCarta)
carta4.addEventListener("click", mudaCarta)
carta5.addEventListener("click", mudaCarta)
carta6.addEventListener("click", mudaCarta)
carta7.addEventListener("click", mudaCarta)
carta8.addEventListener("click", mudaCarta)
carta9.addEventListener("click", mudaCarta)
carta10.addEventListener("click", mudaCarta)
carta11.addEventListener("click", mudaCarta)
carta12.addEventListener("click", mudaCarta)
carta13.addEventListener("click", mudaCarta)
carta14.addEventListener("click", mudaCarta)
carta15.addEventListener("click", mudaCarta)

function mudaCarta() {
    id = this.id
    let imagem = imagens[id]
    cartaAtual = document.getElementById(`${id}`)
    console.log(cartaAtual)
    cartaAtual.style.backgroundImage = `url("./_images/${imagem}")`
}



