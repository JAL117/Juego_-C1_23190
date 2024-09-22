export function setupGameTimer(scene, gameTimerWorker) {
    scene.timerText = scene.add.text(scene.sys.game.config.width - 100, 20, '00:00', { fontSize: '24px', fill: '#ffffff' }).setScrollFactor(0);
    
    gameTimerWorker.onmessage = function(e) {
        scene.timerText.setText(e.data.time);
    };
}
