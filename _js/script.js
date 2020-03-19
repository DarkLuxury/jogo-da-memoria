let cartas = document.querySelectorAll(".carta")
let imagensSalvas = ["1.png", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"]
let imagens = imagensSalvas.concat(imagensSalvas)

setTimeout(function(){ // Voltar a primeira imagem em um tempo determinado
    for(let carta of cartas){
        carta.style.backgroundImage = 'url("./_images/0.png")'
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

for(let i = 0; i < 16; i++) { // Adiciona um evento de click em cada carta
    let card = document.getElementById(i);
    card.addEventListener('click', mudaCarta);
    }

let cartaVirada = false
let comparaIf = ''
let comparaElse = ''
let idAcessivelIf = ''
let idAcessivelElse = ''

function mudaCarta() { // Verifica se as cartas são iguais, e se não forem volta a carta inicial
    var id = this.id
    var imagem = imagens[id]
    cartaAtual = document.getElementById(`${id}`)
    cartaAtual.style.backgroundImage = `url("./_images/${imagem}")`
    if (cartaVirada == true) {
        cartaVirada = false
        comparaIf = imagem
        idAcessivelIf = id
        if (comparaIf != comparaElse){
            var cartaIdAcessivelIf = document.getElementById(`${idAcessivelIf}`)
            var cartaIdAcessivelElse = document.getElementById(`${idAcessivelElse}`)
            setTimeout(() => {
                cartaIdAcessivelIf.style.backgroundImage = 'url("./_images/0.png")'
                cartaIdAcessivelElse.style.backgroundImage = 'url("./_images/0.png")'
            }, 1000);
            
        }
    } else {
        cartaVirada = true
        comparaElse = imagem
        idAcessivelElse = id
    }
}
