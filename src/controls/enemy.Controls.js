export function checkControlsEnemy(scene) {
    scene.Enemy.setVelocityX(0);
    
   
    const speed = 300; 
    if (scene.Enemy.x >= scene.sys.game.config.width - 50) {
        scene.Enemy.setVelocityX(-speed); // Mover a la izquierda
        scene.Enemy.anims.play('enemy-run', true); // Cambia a la animación de correr
    } else if (scene.Enemy.x <= 50) {
        scene.Enemy.setVelocityX(speed); // Mover a la derecha
        scene.Enemy.anims.play('enemy-run', true); // Cambia a la animación de correr
    }
}