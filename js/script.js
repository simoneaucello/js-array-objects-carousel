// elements 
const itemsWrapper = document.querySelector('.items-wrapper');
const topChev = document.querySelector('.top');
const bottomChev = document.querySelector('.bottom');

topChev.classList.add('hide')

let counterImg = 0;
console.log(counterImg);



// creo un array di oggetti contenenti le proprietà image, title e text.

const images = [
  {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, 
  {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, 
  {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, 
  {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, 
  {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];



// AUTOPLAY //
let c = 0;
let myAutoPlay = setInterval(autoPlay, 3000);

function autoPlay() {
  itemsCollection[c].classList.add('hide');
  c++;

  if(c > images.length - 1){
    c = 0;
  }

  itemsCollection[c].classList.remove('hide');
}

// creo un ciclo dell'array delle immagini e ad ogni ciclo aggiungo il tag con l'immagine ciclata 

for(let i = 0; i < images.length; i++){
  const img = images [i];
  console.log(img);

  itemsWrapper.innerHTML += `<img class="img hide" src="${img}">`
}

// prendo tutti gli elementi con la classe img 
const itemsCollection = document.getElementsByClassName('img');
console.log(itemsCollection);

// tolgo la classe .hide al primo elemento 

itemsCollection[counterImg].classList.remove('hide');
console.log(itemsCollection[counterImg]); 


// al click delle frecce incremento o decremento il counter 
topChev.addEventListener('click', function(){    
  bottomChev.classList.remove('hide')
  // rimetto la classe hide all'elemento con l'indice attuale che si incrementa o decrementa
  itemsCollection[counterImg].classList.add('hide');

  counterImg--;

  if(counterImg === 0){
    topChev.classList.add('hide')
  }

 // tolgo la classe hide all'elemento a indice contatore (che si è incrementato o decrementato)
  itemsCollection[counterImg].classList.remove('hide');
})


bottomChev.addEventListener('click', function(){

topChev.classList.remove('hide')

itemsCollection[counterImg].classList.add('hide');

counterImg++;


itemsCollection[counterImg].classList.remove('hide');


  if(counterImg === images.length -1){
    bottomChev.classList.add('hide')
  }
})








