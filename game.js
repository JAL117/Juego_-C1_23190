import { createPlayerAnimations } from './src/Animations/playerAnimations.js';
import { checkControls } from './src/controls/playerControls.js';
import createBackground from './src/utils/createBackground.js';
import createFloor from './src/utils/createFloor.js';
import { setupPlayer } from './src/utils/setupPlayer.js';
import { setupHealthBar } from './src/utils/setupHealthBar.js';
import { updateHealthBar } from './src/utils/updateHealthBar.js';
import { setupGameTimer } from './src/utils/setupGameTimer.js';
import { endGame } from './src/utils/endGame.js';
import { setupEnemy } from './src/utils/setupEnemy.js';
import { createEnemyAnimations } from './src/animations/enemyAnimations.js';
import { setupScore } from './src/utils/setupScore.js';
import { checkControlsEnemy } from './src/controls/enemy.Controls.js';

let enemyWorker = new Worker('./src/Webworkers/workerEnemy.js');
let isGameOver = false;
let playerWorker = new Worker('./src/WebWorkers/workerPlayer.js');
let gameTimerWorker = new Worker('./src/WebWorkers/workerTimer.js');
let scoreWorker = new Worker('./src/WebWorkers/workerScore.js');



export function createGameConfig() {
    return {
        width: 1100,
        height: 450,
        backgroundColor: 'blue',
        parent: "container",
        type: Phaser.AUTO,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 1000 },
                debug: false
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };
}

function preload() {
    this.load.image('back', './src/assets/Backgrounds/fondonoche.jpg');
    this.load.image('back-1', './src/assets/Backgrounds/6/Night/5.png');
    this.load.image('Floor', './src/assets/Floor/37623.jpg');
    this.load.spritesheet('Player', './src/assets/Zombie Man/Walk.png', { frameWidth: 96 });
    this.load.spritesheet('Player-Idle', './src/assets/Zombie Man/Idle.png', { frameWidth: 96 });
    this.load.spritesheet('Player-Run', './src/assets/Zombie Man/Run.png', { frameWidth: 96 });
    this.load.spritesheet('Player-Dead', './src/assets/Zombie Man/Dead.png', { frameWidth: 96 });
    this.load.spritesheet('Player-Jump', './src/assets/Zombie Man/Jump.png', { frameWidth: 96 });

    //Enemigo
    this.load.spritesheet('Enemy', './src/assets/Zombie Woman/Idle.png', { frameWidth: 96 });
    this.load.spritesheet('Enemy-Run', './src/assets/Zombie Woman/Run.png', { frameWidth: 96 });
    
    
}

function create() {
    console.log("Cargando Juego ....");
    createBackground(this);
    createFloor(this);
    createPlayerAnimations(this);
    createEnemyAnimations(this);
    setupPlayer(this);
    setupHealthBar(this, playerWorker);
    setupGameTimer(this, gameTimerWorker);
    updateHealthBar(this, playerWorker);
    setupEnemy(this);
    gameTimerWorker.postMessage({ action: 'start' });
    setupScore(this, scoreWorker);
    scoreWorker.postMessage({ action: 'reset' });   
    
}


function update(time) {
    if (isGameOver) return;

    checkControls(this);
    checkControlsEnemy(this , enemyWorker , playerWorker , scoreWorker);

    if (this.Player.isDead) {
        this.Player.anims.play('player-dead', true);
        isGameOver = endGame(this, isGameOver, enemyWorker, gameTimerWorker);
        return;
    }

    if (this.Player.y >= this.sys.game.config.height) {
        this.Player.anims.play('player-dead', true);
        this.Player.setCollideWorldBounds(false);
        this.Player.isDead = true;
        playerWorker.postMessage({ action: 'isFall' });
        isGameOver = endGame(this, isGameOver, gameTimerWorker, playerWorker);
    }

    if (this.Player.x >= 5000) {
        playerWorker.postMessage({ action: 'reachedLimit' });
        isGameOver = endGame(this,isGameOver, gameTimerWorker, playerWorker);
    }
}
