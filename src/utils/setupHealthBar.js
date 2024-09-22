export function setupHealthBar(scene) {
    const barWidth = 200;
    const barHeight = 20;
    const x = 20;
    const y = 20;
    
    scene.healthBarBg = scene.add.rectangle(x, y, barWidth, barHeight, 0x000000).setOrigin(0, 0).setScrollFactor(0);
    scene.healthBarFill = scene.add.rectangle(x, y, barWidth, barHeight, 0xff0000).setOrigin(0, 0).setScrollFactor(0);
    scene.healthBarBorder = scene.add.rectangle(x, y, barWidth, barHeight).setStrokeStyle(2, 0xffffff).setOrigin(0, 0).setScrollFactor(0);
    scene.healthText = scene.add.text(x + barWidth / 2, y + barHeight / 2, '100%', { fontSize: '16px', fill: '#ffffff' }).setOrigin(0.5).setScrollFactor(0);
    console.log("Barra de vida creada");
    
} 
