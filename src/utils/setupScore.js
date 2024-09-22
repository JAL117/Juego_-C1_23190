
export function setupScore(scene, scoreWorker) {
   
    scene.scoreText = scene.add.text(
        scene.cameras.main.centerX,  
        16,                            
        'Score: 0', 
        { fontSize: '32px', fill: '#00000' , fontWeight:800 }
    ).setOrigin(0.5, 0).setScrollFactor(0);; 
    scoreWorker.onmessage = function (e) {
        const score = e.data.score;
        scene.scoreText.setText('Score: ' + score);
    };
}
