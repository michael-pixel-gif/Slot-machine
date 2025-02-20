let startingCash = 1000;
let spinCount = 0;
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
    spinCount++;
    console.log(spinCount)
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
    const moneyMsg = document.getElementById("moneyMsg");

    if(spinCount % 5 == 0){
        startingCash += 200;
        console.log("You win 200")
        moneyMsg.innerHTML = 'You win $200';
    }

    if(slot_1 == slot_2 && slot_1 == slot_3){
        let win = document.getElementById('win');
        startingCash += 200;
        outcome.innerHTML = `You win!`;
        money.innerHTML = `${startingCash}`;
        win.play();

        
    } else {
        startingCash -= 100;
        let lose = document.getElementById('lose');
       outcome.innerHTML = `You Lose!`;
       money.innerHTML = `${startingCash}`;
       lose.play();
    }

    if (startingCash <= 0){
        outcome.innerHTML = `Game over! You're broke!`;
        spinCount = 0;
        return playAgain();
    }
};
document.getElementById("money").innerHTML = `${startingCash}`;

function playAgain(){
    startingCash = 1000;
    document.getElementById('button').style.display = 'none';
    document.getElementById('playButton').style.display = 'block';
};