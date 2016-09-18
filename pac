function update() {
    if (upKey.isDown)
    {
        sprite.y--;
    }
    else if (downKey.isDown)
    {
        sprite.y++;
    }

    if (leftKey.isDown)
    {
        sprite.x--;
    }
    else if (rightKey.isDown)
    {
        sprite.x++;
    }
    checkFood();
    checklimits();
    
}

function checkFood(){
    if(Math.round(sprite.x/16)== Math.round(orb.x/16) && Math.round(sprite.y/16)== Math.round(orb.y/16))
    {
       console.log("Miam");orb.destroy();
    }
}
function checklimits(){

    if(sprite.x <0){
        sprite.x=0
    }
    else if (sprite.x>window.innerWidth){
        sprite.x=window.innerWidth;
    }
    if(sprite.y <0){
        sprite.y=0
    }
    else if (sprite.y>window.innerWidth){
        sprite.y=window.innerWidth;
    }





}
------------------------------------
var upKey;
var downKey;
var leftKey;
var rightKey;

var sprite;
var orb;
function create() {

    sprite = game.add.sprite(100, 100, 'phaser');
    orb=game.add.sprite(0,0,'orb');
    
    upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
    downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    leftKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    rightKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
}
-------------------------------------------------------------------------
function preload() {

    game.load.baseURL = 'http://examples.phaser.io/assets/';
    game.load.crossOrigin = 'anonymous';

    game.load.image('phaser', 'sprites/phaser-dude.png');
    game.load.image('orb', 'sprites/orb-blue.png');
}
