class Controle extends Phaser.Scene {
    constructor() {
        super({
             key: 'Controle',
             backgroundColor: '#CEE6F3',
            });
    }

    preload() {
         this.load.image('tecla', 'assets/tecla.png');
         this.load.image('ok', 'assets/ok.png');

    }

    create() {
        this.add.image(400, 350, 'tecla').setScale(0.4);
        this.ok = this.add.image(400, 480, 'ok').setScale(0.1);
        this.ok.setInteractive(); 
        this.ok.on('pointerdown', () => this.scene.start('Cena2'));// quando o botão for apertado a função "apertou" é chamada
        this.add.text(350, 200, 'utilize:', {fontFamily: 'Times New Roman', fontSize: '40px', fill: '#000' });
    }

    update() {
        
    }
}