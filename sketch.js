//Create variables here
var happyDog, dog , database,foodS,foodStock , dogImage , happyDogImage
function preload()
{dogImage = loadImage ("images/dogimg.png");
happyDogImage = loadImage ("images/dogimg1.png");
	//load images here
}

function setup() {
	createCanvas(1000, 500);
  database=firebase.database();
  dog = createSprite(700 , 250 , 50,50);
  dog.addImage(dogImage)
  dog.scale=0.3
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
  drawSprites();
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImage)
  }
  textSize(20)
stroke("black")
fill('white')
text('Food Remaining : '+foodS,500,50)
text('Note: Press UP_ARROW Key TO Feed Drago Milk!',100,100)


}
function readStock(data){
foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x = 0
  }else(
x = x-1
  )
  database.ref('/').update({
    Food:x
  })
}


