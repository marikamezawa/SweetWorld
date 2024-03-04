class Controle extends Phaser.Scene { // classe

      // Construtor da cena
    constructor() {
        super({
             key: 'Controle',
             backgroundColor: '#CEE6F3', // Configuração da cor de fundo da cena
            });
    }

    preload() {
         this.load.image('tecla', 'assets/tecla.png'); // carrega imagem dos comandos do jogo
         this.load.image('ok', 'assets/ok.png'); // carrega a imagem do botão

    }

    create() {
        this.add.image(400, 350, 'tecla').setScale(0.4); // define a posição e o tamanho da imagem dos comandos do jogo
        this.ok = this.add.image(400, 480, 'ok').setScale(0.1); // define a posição e o tamanho do botão
        this.ok.setInteractive(); // define que a imagem é um botão
        this.ok.on('pointerdown', () => this.scene.start('Cena2'));// quando o botão for apertado a função "apertou" é chamada
        this.add.text(350, 200, 'utilize:', {fontFamily: 'Times New Roman', fontSize: '40px', fill: '#000' }); // adicionando texto
    }

    update() {
        
    }
}