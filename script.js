function createGame() {
    let guess;
    let attempts

    function startNewGame() {
        attempts = 10;
        guess = Math.floor(Math.random() * 100) + 1;
        console.log("загаданное число:", guess);
        guessNumber();
    }

    function guessNumber() {
        if (attempts <= 0) {
            let restart = confirm("Попытки закончились, хотите сыграть еще?");
            if (restart) {
                createGame().startNewGame();
            } else {
                alert("До свидания! Спасибо за игру!");
            }
            return;
        }
        
        let question = prompt("Угадай число от 1 до 100? Осталось попыток:" + attempts);
        console.log("Загаданное:", guess, "Попыток:", attempts);

        if (question === null) {
            alert("Игра окончена!");
            return;
        }
        
        question = Number(question);

        if (isNaN(question)) {
            alert("Введи число!");
            guessNumber();
            return;
        }

        attempts--;

        if (question < guess) {
            if (attempts <= 0) {
                let restart = confirm("Попытки закончились, хотите сыграть еще?");
                if (restart) {
                    createGame().startNewGame();
                } else {
                    alert("До свидания! Спасибо за игру!");
                }
            } else {
                alert("Загаданное число больше, осталось попыток " + attempts);
                guessNumber();
            }
        } else if (question > guess) {
            if (attempts <= 0) {
                let restart = confirm("Попытки закончились, хотите сыграть еще?");
                if (restart) {
                    createGame().startNewGame();
                } else {
                    alert("До свидания! Спасибо за игру!");
                }
            } else {
                alert("Загаданное число меньше, осталось попыток " + attempts);
                guessNumber();
            }
        } else {
            let restartGame = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
            if (restartGame) {
                startNewGame();
            } else {
                alert("До свидания! Спасибо за игру!");
            }
        }
    }
    
    return {
        startNewGame: startNewGame,
        guessNumber: guessNumber
    };
}

const game = createGame();
game.startNewGame();