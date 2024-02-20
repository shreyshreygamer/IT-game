scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 . . . . . . . . 
    . . . . . 3 . 3 3 3 . . . . . . 
    . . . . . 3 3 . . 3 . . . . . . 
    . . . . . . . 3 3 3 . . . . . . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . 3 3 3 3 3 3 3 3 3 3 . 
    . . . . . . . 3 . . . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . 3 . . . 3 3 . . . . . 
    . . . . . 3 . . . . 3 . . . . . 
    . . . . . . . . . . 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
