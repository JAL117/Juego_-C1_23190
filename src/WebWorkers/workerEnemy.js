let jumpCounter = 0; // Contador de saltos
let isDead = false;

console.log('WorkerEnemy iniciado');

self.onmessage = function (e) {
    const action = e.data.action;

    if (isDead) {
        console.log('El enemigo ya está muerto. Acción ignorada:', action);
        return;
    }

    switch (action) {
        case 'followPlayer':
            const playerX = e.data.playerX;
            const enemyX = e.data.enemyX;
            const speed = 300;

            let velocityX = 0;
            if (enemyX < playerX) {
                velocityX = speed;
            } else if (enemyX > playerX) {
                velocityX = -speed;
            }
            self.postMessage({ action: 'move', velocityX });
            break;

        case 'takeDamage':
            jumpCounter++;
            console.log('El enemigo ha sido golpeado. Saltos acumulados:', jumpCounter);

            // Verificar si el enemigo debe morir
            if (jumpCounter >= 4) {
                isDead = true;
                self.postMessage({ action: 'enemyDead' });
            }
            break;
    }
};
