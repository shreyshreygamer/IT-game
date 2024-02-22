def on_overlap_tile(sprite, location):
    game.game_over(False)
    game.set_game_over_effect(False, effects.blizzard)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile0
    """),
    on_overlap_tile)

def on_overlap_tile2(sprite2, location2):
    game.game_over(True)
    game.set_game_over_effect(True, effects.confetti)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile1
    """),
    on_overlap_tile2)

def on_b_pressed():
    if pinky.vy == 0:
        pinky.vy = -200
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

pinky: Sprite = None
scene.set_background_color(9)
pinky = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(pinky, 100, 0)
tiles.set_current_tilemap(tilemap("""
    level1
"""))
pinky.ay = 350
scene.camera_follow_sprite(pinky)