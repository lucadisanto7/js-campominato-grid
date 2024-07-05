// Creazione Quadrati
function createSquare(){
    let currentElement = document.createElement('div');
    currentElement.classList.add('square');
    return currentElement;
}

const btn = document.getElementById('start')
const grid = document.getElementById('grid');

btn.addEventListener('click', function(){

// Creazione un ciclo di 100 iterazioni per la griglia
for (let i = 0; i < 100; i++){
    let currentSquare = createSquare();
    currentSquare.addEventListener('click', function(){
        console.log(this);
        if (this.innerText % 2 == 0){
            this.classList.toggle('clicked-red');
        }
        else{
            this.classList.toggle('clicked-orange');
        }

    });

    currentSquare.innerText = i + 1;
    grid.append(currentSquare);
}
})