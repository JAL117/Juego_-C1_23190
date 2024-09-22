export default function createBackground(scene) {
    const backgroundWidth = 1000;
    const numBackgrounds = Math.ceil(scene.sys.game.config.width / backgroundWidth) + 10;

    for (let i = 0; i < numBackgrounds; i++) {
        scene.add.image(i * backgroundWidth, scene.sys.game.config.height, 'back').setOrigin(0.5, 1).setScale(3);
        scene.add.image(i * backgroundWidth, scene.sys.game.config.height, 'back-1').setOrigin(0.5, 1).setScale(2.8);
    }
}
