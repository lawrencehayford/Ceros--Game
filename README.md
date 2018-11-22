# Ceros Ski Game New Features

## Run Game Live

Visit http://skier.wizbizgh.com/

![](http://wizbizgh.com/skier_images/img1.png)

## Pause Game

![](http://wizbizgh.com/skier_images/img2.png)

## Game Over

![](http://wizbizgh.com/skier_images/img4.png)

## Running Game

Clone the repository

    git clone https://github.com/lawrencehayford/Ceros--Game.git

Switch to the repo folder

    cd Ceros--Game

Install all dependencies

    npm install

Start Game

    npm start

Browse http://localhost:5000 to view Game

Run Test Using

    npm run test

## New features added to the game

- Fix left bug after a crush
- Skier speed increases after sometime
- A dashboard interface to show distance covered, Speed and Number of Hits
- Able to Pause and Resume of game
- Game Background color changes when speeding up
- Ability to Reset Game when you Loase

## How i fixed the problem with game crashing when hit an Obstacle

I identified that when the skier is moving, the direction is always > 0
But when it moves to left and crashes, the direction changes to negative which is < 0
Any time skier moves to diffrent position, its always get redraws Skier Asset by running getSkierAsset() in controls.js file;
Skier Asset take in case from 0 to 5 but when the direction comming is less than 0 , it is not able to
get the equivalent case and therefore crashes the Game. The code below redraws the skier on the canvas depending on
the x and y cordinates. if skier direction is < 0 , this.getSkierAsset() will return empty therefore making this.loadedAssets[skierAssetName] null. this means the width and height of the SkierImage below will be undefined

    drawSkier() {

    let skierAssetName = this.getSkierAsset();
    let skierImage = this.loadedAssets[skierAssetName];
    let x = (this.gameWidth - skierImage.width) / 2;
    let y = (this.gameHeight - skierImage.height) / 2;
    this.ctx.drawImage(skierImage, x, y, skierImage.width, skierImage.height);
    }



    getSkierAsset() {

        let skierAssetName;
        switch (this.skierDirection) {
        case 0:
            skierAssetName = "skierCrash";
            break;
        case 1:
            skierAssetName = "skierLeft";
            break;
        case 2:
            skierAssetName = "skierLeftDown";
            break;
        case 3:
            skierAssetName = "skierDown";
            break;
        case 4:
            skierAssetName = "skierRightDown";
            break;
        case 5:
            skierAssetName = "skierRight";
            break;
        }

        return skierAssetName;
    }

## Keys used to play the game

- Arrow Down - For moving down or start the game
- Arrow Left - To move skier left
- Arrow Right - To move skier right
- Space bar for pause or resume game

## How Scores are Calculated

Scores are calculated when the skier is moving along the Y cordinates. Y cordinates are distances covered. The greater the Y cordinate distance covered.

## How Game is Paused And Resumed

In the gameLoop function in the gameFacade.js file the following condition checks on every loop if game was paused.

    this.paused === true ? this.pauseGame() : this.continueGame();

## How Game is Ended

If the skier has reached 3 crashes, the function below in the board.js file opens a modal and displays scores when game is over;

    gameOver() {
        /*
        This function ends the game
        */
        $("#over").modal({
        backdrop: "static",
        keyboard: false
        });
        document.getElementById("score").innerHTML = Math.ceil(this.skierMapY);
        throw "game over";
    }
