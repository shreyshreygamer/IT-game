namespace SpriteKind {
    export const coin = SpriteKind.create()
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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 2 . . . . . . . . . . . . 
        . . 2 2 2 2 2 . . . . . . . . . 
        . . 2 5 5 5 2 2 2 2 . . . . . . 
        . . 2 5 5 4 4 4 4 4 4 4 . . . . 
        . . 2 5 5 5 2 2 2 2 . . . . . . 
        . . 2 2 2 2 2 . . . . . . . . . 
        . . 2 2 . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, pinky, 100, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite22, location2) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite2, otherSprite) {
    info.changeScoreBy(100)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    animation.runImageAnimation(
    otherSprite,
    [img`
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
        . . . . 2 2 . . . . . . . . . . 
        . . . . 2 . . . . . . . . . . . 
        . . . . 2 . . . . . . . . . . . 
        . . . 2 2 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    info.changeScoreBy(-100)
    sprites.destroy(otherSprite)
})
let bad_guy: Sprite = null
let projectile: Sprite = null
let coin2: Sprite = null
let pinky: Sprite = null
scene.setBackgroundColor(10)
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
for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
    coin2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . f f 5 5 5 5 5 5 5 f f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 4 4 4 4 5 5 5 f . . 
        f 5 5 5 5 5 5 5 5 5 4 5 5 5 f . 
        f 5 5 4 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 4 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 4 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 4 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 4 5 5 5 f . 
        . f 5 5 4 5 4 4 4 4 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 f f . . . 
        . . . . f f f f f f f . . . . . 
        `, SpriteKind.coin)
    animation.runImageAnimation(
    coin2,
    [img`
        . . . . . f f f f f f f . . . . 
        . . . f f 5 5 5 5 5 5 5 f f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 5 4 4 4 4 5 5 5 f . 
        . f 5 5 5 5 4 5 5 5 5 5 5 5 5 f 
        . f 5 5 5 4 4 5 5 5 5 5 5 5 5 f 
        . f 5 5 5 4 5 5 5 5 5 5 5 5 5 f 
        . f 5 5 5 4 5 5 5 5 5 5 5 5 5 f 
        . f 5 5 5 4 5 5 5 5 5 5 5 5 5 f 
        . f 5 5 5 4 5 5 5 5 5 5 5 5 5 f 
        . f 5 5 5 5 4 5 5 5 5 5 5 5 5 f 
        . . f 5 5 5 5 4 4 4 4 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 f f . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . . f f 5 5 5 5 5 f f . . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 4 4 4 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 4 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 4 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 4 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 4 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 4 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . . f 5 5 5 4 4 4 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . . f f 5 5 5 5 5 f f . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . f f f . . . . . . 
        . . . . . f f 5 5 5 f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 4 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 4 5 5 5 5 5 f . . 
        . . . f 5 5 5 4 5 5 5 5 5 f . . 
        . . . f 5 5 5 4 5 5 5 5 5 f . . 
        . . . f 5 5 5 4 5 5 5 5 5 f . . 
        . . . f 5 5 5 4 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . . f 5 5 5 4 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f f 5 5 5 f f . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . f . . . . . . . 
        . . . . . . f f 5 f f . . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . . f f 5 f f . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . f . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . f 5 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . f . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . f . . . . . . . 
        . . . . . . f f 5 f f . . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . . f f 5 f f . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . f f f . . . . . . 
        . . . . . f f 5 5 5 f f . . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . f 5 5 5 4 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 4 5 5 5 5 5 f . . 
        . . . f 5 5 5 4 5 5 5 5 5 f . . 
        . . . f 5 5 5 4 5 5 5 5 5 f . . 
        . . . f 5 5 5 4 5 5 5 5 5 f . . 
        . . . f 5 5 5 4 5 5 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . . f 5 5 5 4 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 5 f . . . 
        . . . . . f f 5 5 5 f f . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . f f f f f . . . . . 
        . . . . f f 5 5 5 5 5 f f . . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . f 5 5 5 4 4 4 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 4 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 4 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 4 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 4 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 4 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . . f 5 5 5 4 4 4 5 5 5 f . . 
        . . . f 5 5 5 5 5 5 5 5 5 f . . 
        . . . . f f 5 5 5 5 5 f f . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . f f f f f f f . . . . 
        . . . f f 5 5 5 5 5 5 5 f f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 5 4 4 4 4 5 5 5 f . 
        . f 5 5 5 5 4 5 5 5 5 5 5 5 5 f 
        . f 5 5 5 4 4 5 5 5 5 5 5 5 5 f 
        . f 5 5 5 4 5 5 5 5 5 5 5 5 5 f 
        . f 5 5 5 4 5 5 5 5 5 5 5 5 5 f 
        . f 5 5 5 4 5 5 5 5 5 5 5 5 5 f 
        . f 5 5 5 4 5 5 5 5 5 5 5 5 5 f 
        . f 5 5 5 5 4 5 5 5 5 5 5 5 5 f 
        . . f 5 5 5 5 4 4 4 4 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 f f . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    tiles.placeOnTile(coin2, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
    info.setLife(3)
}
game.onUpdateInterval(2000, function () {
    bad_guy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 . . . . . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . 2 . . . . . . . 2 . . . . . 
        . . 2 . . . . . . . 2 . . . . . 
        2 2 2 . . . . . . . 2 2 2 . . . 
        . . 2 . . . . . . . 2 . . . . . 
        . . 2 . . . . . . . 2 . . . . . 
        . . 2 . . . . . . . 2 . . . . . 
        . . 2 . . . . . . . 2 . . . . . 
        . . . 2 2 2 2 2 2 2 . . . . . . 
        . . . 2 2 . . . 2 2 . . . . . . 
        . . . 2 . . . . . 2 . . . . . . 
        . . 2 2 . . . . . 2 2 . . . . . 
        . . 2 . . . . . . . 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(bad_guy, sprites.dungeon.collectibleBlueCrystal)
    bad_guy.follow(pinky, 20)
})
