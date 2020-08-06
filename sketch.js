var dog;
var happyDog;
var foodS;
var foodStock;
var database;

//Create variables here

function preload(){
dog = loadImage("images/Dog.png")
happyDog = loadImage ("images/happydog.png")
}


function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog = createSprite(250,250,10,10);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() { 
  background(46,139,87);
    if(keyDown(LEFT_ARROW)){
        writeStock(foodS);
        dog.addImage(dogHappy);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeStock(foodS);
        dog.addImage(dogHappy);
    }
    else if(keyDown(UP_ARROW)){
        writeStock(foodS);
        dog.addImage(dogHappy);
    }
    else if(keyDown(DOWN_ARROW)){
        writeStock(foodS);
        dog.addImage(dogHappy);

    } 
    drawSprites();
    text("foodStock");
    textSize(9);
    fill("red");


      
  }
  
  function readStock(data){
    foodS=data.val();
  }

  function writeStock(x){

database.ref('/').update({
  Food:x
})
  }
  
  
  