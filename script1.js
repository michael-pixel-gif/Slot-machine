let startingCash = 1000;
const faces = ['🐲','🌶️'];

function slot1(){
    return faces[Math.floor(Math.random()*faces.length)]
}

function slot2(){
    return faces[Math.floor(Math.random()*faces.length)]
}

function slot3(){
    return faces[Math.floor(Math.random()*faces.length)]
}

function spin(){
    document.getElementById('button').style.display = 'block';
    document.getElementById('playButton').style.display = 'none';
    let slot_1 = slot1();
    document.getElementById("slot1").innerHTML = slot_1;
    let slot_2 = slot2();
    document.getElementById("slot2").innerHTML = slot_2;
    let slot_3 = slot3();
    document.getElementById("slot3").innerHTML = slot_3;
    console.log(slot_1, slot_2, slot_3);

    const outcome = document.getElementById("outcome");
    const money = document.getElementById("money");

    if(slot_1 == slot_2 && slot_1 == slot_3){
        startingCash += 200;
        outcome.innerHTML = `You win!`;
        money.innerHTML = `${startingCash}`;
    } else {
        startingCash -= 100;
       outcome.innerHTML = `You Lose!`;
       money.innerHTML = `${startingCash}`;
    }

    if (startingCash <= 0){
        outcome.innerHTML = `Game over! You're broke!`;
        return playAgain();
    }
};
document.getElementById("money").innerHTML = `${startingCash}`;

function playAgain(){
    startingCash = 1000;
    document.getElementById('button').style.display = 'none';
    document.getElementById('playButton').style.display = 'block';
};