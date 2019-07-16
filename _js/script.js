function embaralhar(lista) {
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
  
  let cartas = document.querySelectorAll(".carta");
  
  let imagensSalvas = ["1.png", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];
  
  let imagens = imagensSalvas.concat(imagensSalvas);
  
  imagens = embaralhar(imagens);
  
  for(let i = 0; i < cartas.length; i++){
    cartas[i].style.backgroundImage = `url("./_images/${imagens[i]}")`;
  }
  
  setTimeout(function(){
    for(let carta of cartas){
      carta.style.backgroundImage = 'url("./_images/1.png")';
    }
  }, 3000);