    export function setupPlayer(scene) {
        const playerYPosition = scene.sys.game.config.height - 200;
        scene.Player = scene.physics.add.sprite(200, playerYPosition, 'Player').setOrigin(0, 1).setScale(1).setCollideWorldBounds(true);
        scene.physics.add.collider(scene.Player, scene.floorGroup);
        scene.physics.world.setBounds(0, 0, 5150, scene.sys.game.config.height);
        scene.cameras.main.setBounds(0, 0, 5000, scene.sys.game.config.height);
        scene.cameras.main.startFollow(scene.Player);
        scene.keys = scene.input.keyboard.createCursorKeys();

        
    }
