let gameOver = false;

let level = 1;


let player = {
    x: 40,
    y: 350,
};

let obstacle = {
    x: 1500,
    y: 700 * Math.random(),
}

let coin = {
    x: 1500,
    y: 700 * Math.random(),
};

let monster = {
    x: 1500,
    y: 700 * Math.random(),
}

let score = 0;
let lives = 3;



let obstacleDirectionx = -1;
let obstacleDirectiony = -1;
let obstacleSpeed = 5;

let coinDirectionx = -1;
let coinDirectiony = -1;
let coinSpeed = 5;

let monsterDirectionx = -1;
let monsterDirectiony = -1;
let monsterSpeed = 7;





function setup() {
    createCanvas(1500, 700);

}

function draw() {




    if (gameOver === true) {
        score = 0;
        background = 0;
        textSize(50);
        fill(255, 0, 0);
        text("Game Over", 750, 350)
    }
    if (lives <= 0) {
        gameOver = true;
    }


    if (keyIsPressed) {
        const movement = 0.5 * deltaTime;
        if (key === 'w') {
            if (player.y > 40) {
                // move player upwards with limit
                player.y -= movement;
            }
        }
        else if (key === 's') {
            if (player.y < 700 - 40) {
                //move player downwards with limit
                player.y += movement;
            }
        }
    }
    const distancePlayerCoin = Math.sqrt(
        Math.pow(coin.x - player.x, 2) +
        Math.pow(coin.y - player.y, 2)
    );
    if (distancePlayerCoin <= 40 + 25) {
        // collision between player and Coin!
        score++;
        coin = {
            x: 1500,
            y: 700 * Math.random(),
        };
    }
    const distancePlayerMonster = Math.sqrt(
        Math.pow(monster.x - player.x, 2) +
        Math.pow(monster.y - player.y, 2)
    );
    if (distancePlayerMonster <= 40+45) {
        lives = 0;
        monster = {
            x: 1500,
            y: 700 * Math.random(),
        };
    }

    const distancePlayerObstacle = Math.sqrt(
        Math.pow(obstacle.x - player.x, 2) +
        Math.pow(obstacle.y - player.y, 2)
    );
    if (distancePlayerObstacle <= 40 + 30) {
        // collision between player and obstacle!
        lives--;
        obstacle = {
            x: 1500,
            y: 700 * Math.random(),
        };
    }


    obstacle.x = obstacle.x + (obstacleDirectionx * obstacleSpeed);
    obstacle.y = obstacle.y + (obstacleDirectiony * obstacleSpeed);
    //creates motion for our obstacle

    if (obstacle.y < 0) {
        obstacleDirectiony = obstacleDirectiony * -1;
    }
    //obstacle will bounce off the the top of the screen
    if (obstacle.y > height) {
        obstacleDirectiony = obstacleDirectiony * -1;
    }
    //obstacle will bounce of the bottom of the screen
    if (obstacle.x < 0) {
        
        obstacle = {
            x: 1500,
            y: 700 * Math.random(),
        };
    }

    coin.x = coin.x + (coinDirectionx * coinSpeed);
    coin.y = coin.y + (coinDirectiony * coinSpeed);
    //creates motion for our coin

    if (coin.y < 0) {
        coinDirectiony = coinDirectiony * -1;
    }
    //coin will bounce off the the top of the screen

    if (coin.y > height) {
        coinDirectiony = coinDirectiony * -1;
    }
    //coin will bounce of the bottom of the screen

    if (coin.x < 0) {
        coin = {
            x: 1500,
            y: 700 * Math.random(),
        };

    }
    //if coin is not collected, it will reset in random starting position

    monster.x = monster.x + (monsterDirectionx * monsterSpeed);
    monster.y = monster.y + (monsterDirectiony * monsterSpeed);
// creates motion for our monster

if (monster.y < 0) {
    monsterDirectiony = monsterDirectiony * -1;
}
//monster will bounce off the the top of the screen
if (monster.y > height-45) {
   monsterDirectiony = monsterDirectiony * -1;
}
//monster will bounce of the bottom of the screen
if (monster.x < 0) {
    
    monster = {
        x: 1500,
        y: 700 * Math.random(),
    };
}


  










    background(30,)
    
    fill('gray')
    rect(monster.x, monster.y, 90, 90);

    fill('white');
    circle(player.x, player.y, 80);

    fill('red');
    circle(obstacle.x, obstacle.y, 60);

    fill('yellow');
    circle(coin.x, coin.y, 60);

    fill('green')
    textSize(30);
    textAlign(CENTER);
    text("Lives: " + lives, 750, 60)

    fill('blue')
    text("Score: " + score, 750, 20)

    fill('rgba(100%,0%,100%,0.5)')
    text("Level: " + level, 750, 100)
}
