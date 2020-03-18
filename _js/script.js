function createCardDiv(id) {
    const root = document.getElementById('root');
    const div = document.createElement('div');
    div.setAttribute('id', id);
    div.setAttribute('class', 'carta');
    div.addEventListener('click', changeCard);
    root.appendChild(div);
}

function createCards(max) {
    for(var i = 0; i < max; i++) {
        createCardDiv(i);
    }
}

createCards(16);

let cards = document.querySelectorAll(".carta")
let imageNames = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"]
let images = [...imageNames, ...imageNames]

let backgroundCard = 'url("./_images/0.jpg")';

const changeBackground = card => card.style.backgroundImage = backgroundCard;
setTimeout(() => cards.forEach(changeBackground), 4000);

function randomize(list) { // função para embaralhar as imagens
    let temp;
    let randomIndex;
  
    for (let i = list.length -1; i !== 0; i--) {
        randomIndex = Math.floor(Math.random() * i);
        temp = list[i];
        list[i] = list[randomIndex];
        list[randomIndex] = temp;
    }
    return list;
}

images = randomize(images) // Chamada da função ao iniciar
  
for(let i = 0; i < cards.length; i++){
    cards[i].style.backgroundImage = `url("./_images/${images[i]}")` // Posicionar as imagens
}

let selectedCard = false
let firstSelectedCard = ''
let secondSelectedCard = ''
let firstId = ''
let secondId = ''

function changeImageCard(id, image) {
    const cardDiv = document.getElementById(id)
    cardDiv.style.backgroundImage = `url("./_images/${image}")`;
}

function changeBackgroundCards(_firstId, _secondId) {
    setTimeout(() => {
        var firstCard = document.getElementById(_firstId)
        var secondCard = document.getElementById(_secondId)
        changeBackground(firstCard);
        changeBackground(secondCard);
    }, 1000);
}

function changeCard() {
    const { id } = this;
    const image = images[id]
    changeImageCard(id, image);

    if (selectedCard) {
        selectedCard = !selectedCard;
        firstSelectedCard = image;
        firstId = id;
        if (firstSelectedCard != secondSelectedCard){
            changeBackgroundCards(firstId, secondId);
        }
        return;
    } 
      
    selectedCard = !selectedCard;
    secondSelectedCard = image
    secondId = id
}
