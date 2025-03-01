let startingCash = 1000;
let spinCount = 0;
const faces = ['🐲','🌶️','🔥'];

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
    let number = Number(document.getElementById('gamble').value);
    
    if(number >= 1001 || number === '' || number <= 0 ){
        window.alert("Your bet has to between 1 and 1000");
        return;
    }

    spinCount++;
    console.log(spinCount)
    document.getElementById('button').style.display = 'block';
    document.getElementById('playButton').style.display = 'none';

    let intervalCount = 0;

    let interval = setInterval(function(){
        intervalCount++;
        if(intervalCount >= 6){
            clearInterval(interval)
        }else{
            let slot_1 = slot1();
            document.getElementById("slot1").innerHTML = slot_1;
            let slot_2 = slot2();
            document.getElementById("slot2").innerHTML = slot_2;
            let slot_3 = slot3();
            document.getElementById("slot3").innerHTML = slot_3;
            console.log(slot_1, slot_2, slot_3);
        }

    }, 100)

   
    
    const outcome = document.getElementById("outcome");
    const money = document.getElementById("money");
    const moneyMsg = document.getElementById("moneyMsg");
    moneyMsg.style.display = 'none';

    

    if(spinCount % 5 == 0){
        startingCash += 200;
        console.log("You win 200")
        moneyMsg.innerHTML = 'You won $200!';
        moneyMsg.style.display = 'block';
    }

    if(slot_1 == slot_2 && slot_1 == slot_3){
        let win = document.getElementById('win');
        startingCash += number;
        outcome.innerHTML = `You Won!`;
        money.innerHTML = `${startingCash}`;
        win.play();
        
    } else {
        startingCash -= number;
        let lose = document.getElementById('lose');
        outcome.innerHTML = `You Lost!`;
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