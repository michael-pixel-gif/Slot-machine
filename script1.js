let startingCash = 1000; // This is the amount you start with at the beginning of every game.
let spinCount = 0; // to log the amount of spins you make
const faces = ['🐲','🌶️']; // the faces shown on each slot

document.getElementById("money").innerHTML = `${startingCash}`;

function slot1(){
    return faces[Math.floor(Math.random()*faces.length)];
};
function slot2(){
    return faces[Math.floor(Math.random()*faces.length)];
};
function slot3(){
    return faces[Math.floor(Math.random()*faces.length)]; 
    // these will pick a random emoji from the array above once for each slot
};

function spin(){
    document.getElementById('button').style.display = 'block';
    document.getElementById('playButton').style.display = 'none'; 
    // There are two buttons, "spin" will always show while "play again will be hidden until player loses"

    // cant allow players to bet whatever they want
    let number = Number(document.getElementById('gamble').value);
    if(number <= 0 || number === ""){
        return alert(`You must bet a positive amount`);
    }
    if(startingCash > 100){ // Checks if your cash amount is greater than 100
        // wont allow player to bet under 100 or over the amount of cash they have
        if (number < 100 || number > startingCash){
            return alert(`Your bet has to between 100 and ${startingCash}`);
        }
    }else {
        if (number < 1 || number > startingCash){
            return alert(`Your bet has to between 1 and ${startingCash}`);
        }// if cash is under 100 will only allow player to bet from 1 to however much they have that is under 100
    }

    // this will interval each slot five times before stopping on the right one to cause a spinning affect
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
        
        // this will stop the interval after five times
        if(intervalCount >= 6){
            clearInterval(interval);

            const outcome = document.getElementById("outcome");
            const money = document.getElementById("money");
            const moneyMsg = document.getElementById("moneyMsg");

            moneyMsg.style.display = 'none';
            spinCount++;
            console.log(spinCount);
            // every five spins will grant $100
            if(spinCount % 5 == 0){
                startingCash += 100;
                console.log("You win 100")
                moneyMsg.innerHTML = 'You won $100!';
                moneyMsg.style.display = 'block'; // this will let the message only display for the fifth spin
            };
        
            if(slot_1 == slot_2 && slot_1 == slot_3){
                let win = document.getElementById('win');
                startingCash += number;
                outcome.innerHTML = `You Won!`;
                money.innerHTML = `${startingCash}`;
                win.play();
            // this will check if the player won or lost
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
    }, 200); // each interval will be 200 milliseconds
    document.getElementById("money").innerHTML = `${startingCash}`;
};
// when "play again" is pressed this will reset the game
function playAgain(){
    startingCash = 1000;
    document.getElementById('button').style.display = 'none';
    document.getElementById('playButton').style.display = 'block';
};

document.getElementById("gamble").addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        event.preventDefault();
    }
})