let numberDrawn = [];
let maxNumber = 10;
let secretNumber = randomNumber();
let attemps = 1;


function showOnScreen(tag, text){
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
    responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate:1.2});

}
function showNewGame() {
showOnScreen('h1', 'Jogo do número secreto');
showOnScreen('p','Escolha um número entre 1 e 10.');
}
showNewGame()

function verificarChute() {
    let choice = document.querySelector('input').value;
    if (choice == secretNumber){
        showOnScreen('h1', 'Acertou!');
        let attempsSingular = attemps > 1 ? 'tentativas' : 'tentativa'
        let attempsText = `Você descobriu o número secreto com ${attemps} ${attempsSingular}!`;
        showOnScreen ('p', attempsText);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (choice > secretNumber){
            showOnScreen('p', 'O número secreto é menor.');
        } else {
            showOnScreen('p', 'O número secreto é maior.');
        }
        attemps++;
        resetGame()
    }
    
}

function randomNumber() {
    let chosenNumber = parseInt(Math.random() * maxNumber + 1);
    let listOfElements = numberDrawn.length;

    if (listOfElements == maxNumber) {
        numberDrawn = [];
    }

    if (numberDrawn.includes(chosenNumber)) {
        return randomNumber();
    } else {
        numberDrawn.push(chosenNumber);
        console.log(numberDrawn)
        return chosenNumber;
    }
    
}

function resetGame(){
    choice = document.querySelector('input')
    choice.value = ''
}

function newGame(){
    secretNumber = randomNumber();
    resetGame();
    attemps = 1;
    showNewGame();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}