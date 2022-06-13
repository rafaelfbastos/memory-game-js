const cards = document.querySelectorAll('.card');;

let fristCard, secondCard;
let hasFliped = false;
let lockBoard = false;

function flip (){

    if(lockBoard) return;

    if(this === fristCard) return;

    this.classList.add('flip');

    if(!fristCard){
        fristCard = this;
        hasFliped = true;
        return;   
    }

    secondCard = this;
    hasFliped = false;

    macthTest();
}

function macthTest(){

    lockBoard = true;
  
    if(fristCard.dataset.card === secondCard.dataset.card){

        disableCards();
        return;

    }

    unFliped();

}

function unFliped(){

    let lockBoard = true;

    setTimeout(()=>{
        fristCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    },1000);


}

function disableCards(){
    fristCard.removeEventListener('click',flip);
    fristCard.removeEventListener('click',flip);
    resetBoard();
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [fristCard, secondCard] = [null, null];
}

cards.forEach((card)=> {card.addEventListener('click',flip)});

(
    function shuffer(){
        cards.forEach((card) =>{
            let ramdomPosition;
            ramdomPosition = Math.floor((Math.random()*1000)%12);
            card.style.order = ramdomPosition;
        })
    } 
)();


