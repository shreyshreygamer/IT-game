scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.blizzard)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (pinky.vy == 0) {
        pinky.vy = -150
    }
})
let pinky: Sprite = null
scene.setBackgroundColor(9)
pinky = sprites.create(img`
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
controller.moveSprite(pinky, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
pinky.ay = 350
scene.cameraFollowSprite(pinky)
