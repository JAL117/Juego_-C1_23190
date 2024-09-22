export default function createFloor(scene) {
    const floorGroup = scene.physics.add.staticGroup();
    const floorWidth = 900;  
    const gapWidth = 70;  
    const levelWidth = 5000;
    const numberOfRows = 1;
    
    const floorPattern = [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0];
    
    for (let row = 0; row < numberOfRows; row++) {
        let xPosition = 0;
        let patternIndex = 0;
        
        while (xPosition < levelWidth) {
            if (floorPattern[patternIndex % floorPattern.length] === 1) {
                const floor = floorGroup.create(xPosition, scene.sys.game.config.height - (40 + row * 20), 'Floor').setOrigin(0, 0.5).setScale(0.15).refreshBody();
                xPosition += floorWidth;
            } else {
                xPosition += gapWidth;
            }
            patternIndex++;
        }
    }

    scene.floorGroup = floorGroup;
}