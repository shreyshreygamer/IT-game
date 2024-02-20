scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile0
    `, function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.blizzard)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile1
    `, function on_overlap_tile2(sprite2: Sprite, location2: tiles.Location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function on_b_pressed() {
    if (pinky.vy == 0) {
        pinky.vy = -200
    }
    
})
let pinky : Sprite = null
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
tiles.setCurrentTilemap(tilemap`
    level1
`)
pinky.ay = 350
scene.cameraFollowSprite(pinky)
