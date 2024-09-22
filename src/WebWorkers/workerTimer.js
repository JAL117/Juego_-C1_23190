let startTime;
let elapsedTime = 0;
let isRunning = false;

console.log('WorkerTimer iniciado');


self.onmessage = function(e) {
    console.log("Mensaje recibido en el worker Timer: ", e.data);
    switch (e.data.action) {
        case 'start':
            if (!isRunning) {
                startTime = Date.now() - elapsedTime;
                isRunning = true;
                tick();  
            }
            break;
        case 'stop':
            isRunning = false;  
            break;
        case 'reset':
            elapsedTime = 0;
            isRunning = false;
            self.postMessage({ time: formatTime(elapsedTime) });
            break;
    }
};

function tick() {
    if (isRunning) {
        elapsedTime = Date.now() - startTime;
        self.postMessage({ time: formatTime(elapsedTime) });
        setTimeout(tick, 1000);  
    }
}

function formatTime(ms) {
    let seconds = Math.floor(ms / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
