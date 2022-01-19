var sprite
function setup() {
  createCanvas(1350,600);
  sprite = createSprite (700,500)
}

function draw() 
{
  background("white");
  drawSprites()
  if (keyDown("right")){
sprite.x=sprite.x+5
  }
  if (keyDown("left")){
    sprite.x=sprite.x-5
  }
  if (keyDown("down")){
    sprite.y=sprite.y+5
      }
      if (keyDown("up")){
        sprite.y=sprite.y-5
          }
}




