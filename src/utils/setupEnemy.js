export function setupEnemy(scene) {
    const enemyYPosition = scene.sys.game.config.height - 60;
    scene.Enemy = scene.physics.add.sprite(20, enemyYPosition, 'Enemy')
        .setOrigin(0, 1)
        .setScale(1)
        .setCollideWorldBounds(false);

   
    scene.Enemy.body.setGravityY(0);
    scene.Enemy.body.setAllowGravity(false);

    scene.physics.add.collider(scene.Enemy, scene.floorGroup);

    scene.physics.world.setBounds(0, 0, 5150, scene.sys.game.config.height);
    scene.cameras.main.setBounds(0, 0, 5000, scene.sys.game.config.height);

    scene.Enemy.setSize(40, 60);
}
