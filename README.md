# Slot Machine Game

## DESCRIPTION
A simple slot machine game where everytime you press "Spin" 
you win or lose money based on the icons displayed, which are random.

## HOW TO PLAY
1. You start with $1000 and gamble 200 each time (I plan to add a betting system)
2. Press the "Spin!" button to spin the wheel
3. If you get three in a row ex: 🐲🐲🐲
4. If you dont get three in a row you lose 100$
5. Note that every five spins you will win $200 to stay in the game
6. You lose when you run out of money and have to press "Play Again?" restart
7. Have fun!

## TECHNOLOGIES USED
- HTML5
- CSS3
- JavaScript

## FEATURES

- Random number generation
- point system
- Visual feedback
- spin functionality
- Play again functionality

## PROJECT STRUCTURE

The project consists of three files:
- **index.html** - Contains the structure of the game
- **slotGame.css** - Contains the styling of the game
- **script1.js** - Contains the game logic

## CODE EXAMPLE

```
if(slot_1 == slot_2 && slot_1 == slot_3){
        let win = document.getElementById('win');
        startingCash += 200;
        outcome.innerHTML = `You Won!`;
        money.innerHTML = `${startingCash}`;
        win.play();
        
    } else {
        startingCash -= 100;
        let lose = document.getElementById('lose');
        outcome.innerHTML = `You Lost!`;
        money.innerHTML = `${startingCash}`;
        lose.play();
    }
```

## Creidits

- Created by: Michael Rodriguez
- For: West-MEC Coding Class