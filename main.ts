namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const badguy = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.blizzard)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (pinky.vy == 0) {
        pinky.vy = -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.badguy, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        enemie = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        sprites.destroy(otherSprite)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite2, location2) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(100)
    sprites.destroy(otherSprite)
})
let enemie: Sprite = null
let bad_guy: Sprite = null
let coin: Sprite = null
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
for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
    coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 4 4 4 4 5 5 5 . . . 
        . 5 5 5 5 4 4 5 5 5 4 5 5 5 . . 
        . 5 5 5 4 4 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 4 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 4 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 4 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 4 5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 4 5 5 5 5 5 5 5 5 5 . . 
        . . 5 5 4 4 4 5 5 5 4 5 5 . . . 
        . . . 5 5 5 4 4 4 4 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.coin)
    animation.runImageAnimation(
    coin,
    [img`
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . 5 5 5 5 4 4 4 5 5 5 5 5 5 . . 
        . 5 5 5 4 4 5 5 4 4 4 5 5 5 . . 
        5 5 5 5 4 5 5 5 5 5 4 4 5 5 5 . 
        5 5 5 4 4 5 5 5 5 5 5 4 5 5 5 . 
        5 5 5 4 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 4 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 4 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 4 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 4 4 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 4 4 5 5 5 5 4 5 5 5 . . 
        . 5 5 5 5 4 4 4 4 4 4 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 4 4 5 5 5 5 . . . . 
        . . 5 5 5 4 5 5 4 4 5 5 . . . . 
        . 5 5 5 5 4 5 5 5 5 5 5 5 . . . 
        . 5 5 5 4 4 5 5 5 5 5 5 5 . . . 
        . 5 5 5 4 5 5 5 5 5 5 5 5 . . . 
        . 5 5 5 4 5 5 5 5 5 5 5 5 . . . 
        . 5 5 5 4 5 5 5 5 5 5 5 5 . . . 
        . 5 5 5 4 5 5 5 5 5 5 5 5 . . . 
        . 5 5 5 4 4 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 4 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 4 4 4 4 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . 5 5 5 . . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . 5 5 5 5 5 5 5 5 . . . . . 
        . . . 5 5 5 4 4 5 5 5 . . . . . 
        . . 5 5 5 5 5 4 4 5 5 5 . . . . 
        . . 5 5 5 4 5 5 4 5 5 5 . . . . 
        . . 5 5 5 4 5 5 5 5 5 5 . . . . 
        . . 5 5 5 4 5 5 5 5 5 5 . . . . 
        . . 5 5 5 4 5 5 5 5 5 5 . . . . 
        . . 5 5 5 4 5 5 5 5 5 5 . . . . 
        . . 5 5 5 4 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 4 5 5 5 . . . . . 
        . . . 5 5 5 4 4 5 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . 5 5 5 4 5 . . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . . 5 5 5 4 5 5 5 . . . . 
        . . . . . 5 5 5 4 5 5 5 . . . . 
        . . . . . 5 5 5 4 5 5 5 . . . . 
        . . . . . 5 5 5 4 5 5 5 . . . . 
        . . . . . 5 5 5 4 5 5 5 . . . . 
        . . . . . 5 5 5 4 5 5 5 . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . 5 5 5 4 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 4 5 . . . . . . 
        . . . . . . . 5 4 5 . . . . . . 
        . . . . . . . 5 4 5 . . . . . . 
        . . . . . . . 5 4 5 . . . . . . 
        . . . . . . . 5 4 5 . . . . . . 
        . . . . . . . 5 4 5 . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . 5 5 5 4 5 . . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . . 5 5 5 4 5 5 5 . . . . 
        . . . . . 5 5 5 4 5 5 5 . . . . 
        . . . . . 5 5 5 4 5 5 5 . . . . 
        . . . . . 5 5 5 4 5 5 5 . . . . 
        . . . . . 5 5 5 4 5 5 5 . . . . 
        . . . . . 5 5 5 4 5 5 5 . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . 5 5 5 4 5 . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . 5 5 5 . . . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . 5 5 5 5 5 5 5 5 . . . . . 
        . . . 5 5 5 4 4 5 5 5 . . . . . 
        . . 5 5 5 5 5 4 4 5 5 5 . . . . 
        . . 5 5 5 4 5 5 4 5 5 5 . . . . 
        . . 5 5 5 4 5 5 5 5 5 5 . . . . 
        . . 5 5 5 4 5 5 5 5 5 5 . . . . 
        . . 5 5 5 4 5 5 5 5 5 5 . . . . 
        . . 5 5 5 4 5 5 5 5 5 5 . . . . 
        . . 5 5 5 4 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 4 5 5 5 . . . . . 
        . . . 5 5 5 4 4 5 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 4 4 5 5 5 5 . . . . 
        . . 5 5 5 4 5 5 4 4 5 5 . . . . 
        . 5 5 5 5 4 5 5 5 5 5 5 5 . . . 
        . 5 5 5 4 4 5 5 5 5 5 5 5 . . . 
        . 5 5 5 4 5 5 5 5 5 5 5 5 . . . 
        . 5 5 5 4 5 5 5 5 5 5 5 5 . . . 
        . 5 5 5 4 5 5 5 5 5 5 5 5 . . . 
        . 5 5 5 4 5 5 5 5 5 5 5 5 . . . 
        . 5 5 5 4 4 5 5 5 5 5 5 5 . . . 
        . . 5 5 5 4 5 5 5 5 5 5 . . . . 
        . . 5 5 5 5 4 4 4 4 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . 5 5 5 5 4 4 4 5 5 5 5 5 5 . . 
        . 5 5 5 4 4 5 5 4 4 4 5 5 5 . . 
        5 5 5 5 4 5 5 5 5 5 4 4 5 5 5 . 
        5 5 5 4 4 5 5 5 5 5 5 4 5 5 5 . 
        5 5 5 4 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 4 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 4 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 4 5 5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 4 4 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 4 4 5 5 5 5 4 5 5 5 . . 
        . 5 5 5 5 4 4 4 4 4 4 5 5 5 . . 
        . . 5 5 5 5 5 5 5 5 5 5 5 . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    tiles.placeOnTile(coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
    bad_guy = sprites.create(img`
        . . . . 8 8 8 8 8 . . . . . . . 
        . . . 8 8 f 8 f 8 8 . . . . . . 
        . . . 8 8 8 8 8 8 8 . . . . . . 
        . . . 8 f f f f f 8 . . . . . . 
        . . . . 8 8 8 8 8 8 . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 . . . . . . . . . 
        . . . . 8 8 8 8 8 8 . . . . . . 
        . . . . . . 8 . . . . . . . . . 
        . . . . . . 8 . . . . . . . . . 
        . . . 8 8 8 8 8 8 . . . . . . . 
        . . . 8 . . . . 8 . . . . . . . 
        . . 8 . . . . . 8 8 . . . . . . 
        . . 8 . . . . . . 8 . . . . . . 
        . . 8 . . . . . . 8 . . . . . . 
        . . . . . . . . . 8 . . . . . . 
        `, SpriteKind.badguy)
    animation.runImageAnimation(
    bad_guy,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f f . . 
        . . f e e e 4 d d d d f d d f . 
        . . . f f e e 4 e e e f b b f . 
        . . . . f 2 2 2 4 d d e b b f . 
        . . . . e 2 2 2 e d d e b f . . 
        . . . . f 4 4 4 f e e f f . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f f . . 
        . . f e e e 4 d d d d f d d f . 
        . . . . f e e 4 e e e f b b f . 
        . . . . f 2 2 2 4 d d e b b f . 
        . . . f f 4 4 4 e d d e b f . . 
        . . . f f f f f f e e f f . . . 
        . . . . f f . . . f f f . . . . 
        `],
    500,
    true
    )
    tiles.placeOnTile(bad_guy, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
