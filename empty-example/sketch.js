// Game State

let player = {
  x: 40,
  y: 350,
};

let treasure = {
  x: 1500 * Math.random(),
  y: 700 * Math.random(),
};

let obstacle = {
  x: 1500 * Math.random(),
  y: 700 * Math.random(),
  vx: 0.25 * Math.random() - 0.05,
  vy: 0.25 * Math.random() - 0.05,
};

let score = 0;
let lives = 5;


function setup() {
  createCanvas(1500, 700);
}

function draw() {
  // ==== updating state
  if (keyIsPressed) {
    const movement = 0.5 * deltaTime;
    if (key == 'w') {
      if (player.y > 40) {
        // move player downwards
        player.y -= movement;
      }
    }
    else if (key == 's') {
      if (player.y < 700 - 40) {
        player.y += movement;
      }
    }
  }





  const distancePlayerTreasure = Math.sqrt(
    Math.pow(treasure.x - player.x, 2) +
    Math.pow(treasure.y - player.y, 2)
  );
  if (distancePlayerTreasure <= 40 + 25) {
    // collision between player and treasure!
    score++;
    treasure = {
      x: 1500 * Math.random(),
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
      x: 1500 * Math.random(),
      y: 700 * Math.random(),
      vx: 0.25 * Math.random() - 0.05,
      vy: 0.25 * Math.random() - 0.05,
    };
  }

  obstacle.x -= obstacle.vx * deltaTime;
  obstacle.y -= obstacle.vy * deltaTime;


  // ===== drawing
  background(30);

  fill('blue');
  circle(player.x, player.y, 80);

  fill(255, 204, 0);
  circle(treasure.x, treasure.y, 50);

  fill('red');
  circle(obstacle.x, obstacle.y, 60);

  fill('white')
  text("Score: " + score, 750, 20);

  fill('green')
  textSize(30);
  textAlign(CENTER);
  text("Lives: " + lives, 750, 60)
}