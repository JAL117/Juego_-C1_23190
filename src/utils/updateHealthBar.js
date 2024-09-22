import { endGame } from './endGame.js';

export function updateHealthBar(scene, playerWorker) {
    playerWorker.onmessage = function (e) {
        const health = e.data.health;
        const barWidth = 300;
        scene.healthBarFill.width = barWidth * (health / 100);
        scene.healthText.setText(`${Math.round(health)}%`);

        if (e.data.isDead) {
            scene.Player.isDead = true;
            scene.Player.anims.play('player-dead', true);
            scene.isGameOver = endGame(scene, scene.isGameOver, scene.enemyWorker, scene.gameTimerWorker);
        }
    };
}
