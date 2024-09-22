export function checkControlsEnemy(scene) {
    
    
    scene.Enemy.setVelocityX(0);
    

    if (scene.Enemy.body.onFloor()) {
      
        scene.Enemy.anims.play('enemy', true); 
    }

    
   
 
}