export function endGame(scene,isGameOver, gameTimerWorker) {
    if (isGameOver) return;

    isGameOver = true;   
    gameTimerWorker.postMessage({ action: 'stop' });
    
    scene.Player.setVelocity(0, 0); 
    scene.Player.anims.stop();

    const finalTime = scene.timerText.text;
   



    
    Swal.fire({
        title: 'YOU ARE DOOMED',
        html: `<div style="font-family: 'Creepster', cursive;">
                  <p style="font-size: 24px; color: #ff0000;">Your soul is ours...</p>
                  <p style="font-size: 20px; color: #8B0000;">You survived for: ${finalTime}</p>
               </div>`,
        icon: 'error',
        iconHtml: '<i class="fas fa-skull" style="color: #ff0000;"></i>',
        confirmButtonText: 'DARE TO RETRY?',
        confirmButtonColor: '#8B0000',
        allowOutsideClick: false,
        background: '#000000',
       
        showClass: {
            popup: 'animate__animated animate__fadeInDown animate__faster'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp animate__faster'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            location.reload();  
        }
    });

    return isGameOver;
}