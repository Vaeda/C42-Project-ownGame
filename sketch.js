var database;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var players;

var player_img;
var player1score =0;
var player2score =0;

function preload() {
}

function setup() {
  createCanvas(1000, 600);
 // createSprite(400, 200, 50, 50);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}
function draw() {
  background("lightblue");  
  //drawSprites();
}