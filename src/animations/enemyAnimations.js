    let animationsCreated = false; 

    export const createEnemyAnimations = (game) => {
        if (animationsCreated) return; 

        game.anims.create({
            key: 'enemy',
            frames: game.anims.generateFrameNumbers('Enemy', { start: 0, end: 4 }),
            frameRate: 10,
            repeat: -1
        });

        game.anims.create({
            key: ' enemy-run',
            frames: game.anims.generateFrameNumbers('Enemy-Run', { start: 0, end: 6 }),
            frameRate: 10,
            repeat: -1
        })



     
        animationsCreated = true;
    };
