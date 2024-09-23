export function checkControlsEnemy(scene, enemyWorker, playerWorker, scoreWorker) {
    const playerX = scene.Player.x;
    const enemyX = scene.Enemy.x;
    const enemyY = scene.Enemy.y;
    const mapHeight = scene.sys.game.config.height;

    if (!scene.Enemy.isDestroyed) {
        enemyWorker.postMessage({
            action: 'followPlayer',
            playerX,
            enemyX
        });

        enemyWorker.postMessage({
            action: 'checkFall',
            enemyY,
            mapHeight
        });
    }

    if (!scene.Enemy.isWorkerSet) {
        enemyWorker.onmessage = function(e) {
            const action = e.data.action;

            switch (action) {
                case 'move':
                    scene.Enemy.setVelocityX(e.data.velocityX);
                    scene.Enemy.anims.play('enemy-run', true);
                    break;
                case 'enemyDead':
                    scene.Enemy.destroy();
                    scene.Enemy.isDestroyed = true;
                    scoreWorker.postMessage({ action: 'increment' });
                    break;
            }
        };
        scene.Enemy.isWorkerSet = true;
    }


    scene.physics.add.overlap(scene.Player, scene.Enemy, function() {
        if (scene.Player.body.velocity.y > 0 && scene.Player.y < enemyY) {
            enemyWorker.postMessage({ action: 'takeDamage' });
        } else {
            playerWorker.postMessage({ action: 'takeDamage', damage: 10 });
        }
    });
}
