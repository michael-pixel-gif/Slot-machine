let startingCash = 1000;
let spinCount = 0;
const faces = ['🐲','🌶️','🔥'];

document.getElementById("money").innerHTML = `${startingCash}`;

function slot1(){
        return faces[Math.floor(Math.random()*faces.length)];
};
function slot2(){
    return faces[Math.floor(Math.random()*faces.length)];
};
function slot3(){
    return faces[Math.floor(Math.random()*faces.length)];
};

function spin(){
    document.getElementById('button').style.display = 'block';
    document.getElementById('playButton').style.display = 'none';

    let number = Number(document.getElementById('gamble').value);
    if(number >= 1001 || number === '' || number <= 1)
        return window.alert("Your bet has to between 1 and 1000");

    if(number > startingCash)
        return alert("not enough cash");

    let intervalCount = 0;
    let interval = setInterval(function(){
        intervalCount++;
            let slot_1 = slot1();
            document.getElementById("slot1").innerHTML = slot_1;
            let slot_2 = slot2();
            document.getElementById("slot2").innerHTML = slot_2;
            let slot_3 = slot3();
            document.getElementById("slot3").innerHTML = slot_3;
            console.log(slot_1, slot_2, slot_3);
        
         if(intervalCount >= 6){
            clearInterval(interval);

            const outcome = document.getElementById("outcome");
            const money = document.getElementById("money");
            const moneyMsg = document.getElementById("moneyMsg");

            moneyMsg.style.display = 'none';
            spinCount++;
            console.log(spinCount);
        
            if(spinCount % 5 == 0){
                startingCash += 100;
                console.log("You win 100")
                moneyMsg.innerHTML = 'You won $100!';
                moneyMsg.style.display = 'block';
            };
        
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
            };
        
            if (startingCash <= 0){
                outcome.innerHTML = `Game over! You're broke!`;
                spinCount = 0;
                return playAgain();
            };
        };
    }, 200);
    document.getElementById("money").innerHTML = `${startingCash}`;
};

function playAgain(){
    startingCash = 1000;
    document.getElementById('button').style.display = 'none';
    document.getElementById('playButton').style.display = 'block';
};