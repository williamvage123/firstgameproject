let player = {
    x: 40,
    y:350,
};

let obstacle = {
    x:1500,
    y:700 * Math.random(),
};

let coin = {
    x:1500,
    y:700 * Math.random(),
};

let score = 0;

let lives = 5;

let obstacleDirectionx = -1;
let obstacleDirectiony = -1;
let obstacleSpeed = 3;

let coinDirectionx = -1;
let coinDirectiony = -1;
let coinSpeed = 3;




function setup() {
    createCanvas(1500, 700);
  }

function draw() {
    
obstacle.x = obstacle.x + (obstacleDirectionx * obstacleSpeed);
obstacle.y = obstacle.y + (obstacleDirectiony * obstacleSpeed);


if (obstacle.y < 0) {
    obstacleDirectiony = obstacleDirectiony * -1;
}
if (obstacle.y > height) {
    obstacleDirectiony = obstacleDirectiony * -1;
}

coin.x = coin.x + (coinDirectionx * coinSpeed);
coin.y = coin.y + (coinDirectiony * coinSpeed);

if (coin.y < 0) {
    coinDirectiony = coinDirectiony * -1;
}
if (coin.y > height) {
    coinDirectiony = coinDirectiony * -1;
}








background(30);

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
}
