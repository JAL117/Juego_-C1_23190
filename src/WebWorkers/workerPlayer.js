let health = 100;
let isDead = false;

console.log('WorkerPlayer iniciado');

self.onmessage = function (e) {
    const action = e.data.action;

    if (isDead) return;

    switch (action) {
        case "isFall":
            console.log('Mensaje isFall recibido (Jugador murio por caida)');
            health = 0;
            isDead = true;
            self.postMessage({ health: health });
            break;
        case 'reachedLimit':
            console.log('Jugador alcanzó el límite del mapa. Fin del juego.');
            
            break;
        case 'takeDamage':
            console.log('El jugador a recivido', health);
            
            health -= e.data.damage;
            if (health <= 0) {
                health = 0;
                isDead = true;
                console.log(isDead);
                self.postMessage({health : health , isDead: true})
            }
            self.postMessage({ health: health});

            break;
    }
};