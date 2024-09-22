let speed = 300; 
let timeSinceLastIncrease = 0;

console.log('WorkerEnemy iniciado');

self.onmessage = function (e) {
    const action = e.data.action;

    switch (action) {
        case 'reset':
            console.log('workerenemy (Reset aparece un nuevo enemigo)');
            speed = 300; 
            self.postMessage({ speed: speed });
            break;
        case 'update':
            timeSinceLastIncrease += e.data.delta;

            if (timeSinceLastIncrease > 10000) { 
                speed += 0.1; 
                timeSinceLastIncrease = 0; 
            }
            self.postMessage({ speed: speed });
            break;
    }
};
