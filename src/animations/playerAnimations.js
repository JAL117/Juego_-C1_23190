let animationsCreated = false; 

export const createPlayerAnimations = (game) => {
    if (animationsCreated) return; 
    game.anims.create({
        key: 'player-idle',
        frames: game.anims.generateFrameNumbers('Player-Idle', { start: 0, end: 7 }),
        frameRate: 7,
        repeat: -1
    });

    game.anims.create({
        key: 'player-run',
        frames: game.anims.generateFrameNumbers('Player-Run', { start: 0, end: 6 }),
        frameRate: 15,
        repeat: -1
    });

  
    game.anims.create({
        key: 'player-dead',
        frames: game.anims.generateFrameNumbers('Player-Dead', { start: 0, end: 4 }),
        frameRate: 2,
    });

    game.anims.create({
        key: 'player-jump',
        frames: game.anims.generateFrameNumbers('Player-Jump', { start: 1, end: 7 }),
        frameRate: 4,
        repeat: 1
    });

    animationsCreated = true;
};
