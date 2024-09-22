let score = 0;
console.log('Worker score iniciado');

self.onmessage = function (e) {
    const action = e.data.action;

    switch (action) {
        case 'increment':
            score += 50;  
            self.postMessage({ score: score });
            break;
        case 'reset':
            score = 0;
            self.postMessage({ score: score });
            break;
        default:
            break;
    }
};
