class Cena1 extends Phaser.Scene { //classe
   
    // Construtor da cena
    constructor() {
        super({
            key: 'Cena1',
            backgroundColor: '#000', // Configuração da cor de fundo da cena
        });
    }

    preload() { // Carregar recursos
        
        this.load.image('fundo', 'assets/fundoStart.avif'); // carrega fundo da cena1
        this.load.image('button', 'assets/start.png'); // carrega a imagem do botão "start"
        this.load.image('button2', 'assets/startCor.png'); // carrega a imagem com o botão com cor
        this.load.image('nome', 'assets/nome.png'); // carrega a imagem que fica o nome do jogo
        //this.load.image('tecla', 'assets/tecla.png'); // carrega a imagem dos comandos do jogo
    }

    create() {  // Configuração inicial da cena

        this.add.image(400, 300, 'fundo').setScale(1.5); // imagem do fundo da cena1
        
        //this.add.image(650, 500, 'tecla').setScale(0.4);
        
        this.button2 = this.add.image(390, 380, 'button2').setScale(0.1); // imagem do botão start colorido
        this.button2.setVisible(false); // define que o botão está invisível

        
        this.add.image(400, 290, 'nome').setScale(0.4); // adicionando e definindo a posição e o tamanho da imagem


        this.button = this.add.image(390, 381, 'button').setScale(0.1); //imagem do botão start

        
        // adicionando o nome do jogo na tela inicial, definindo fonte, tamanho e cor
        this.add.text(270, 240, 'Sweet World', {fontFamily: 'Times New Roman', fontSize: '50px', fill: '#000' });
        
        
        this.button.setInteractive();  // dizendo que a imagem é um botão

        this.button.on('pointerdown', () => this.scene.start('Controle'));// quando o botão for apertado a função "apertou" é chamada

        
        botaoHover(this.button, 'button', 'button2'); //chamando a função para mudar cor do Botão quando mouse passar por cima

      

       
    }

    update() {
        
    }




} 
// função para mudar a cor do botão quando o mouse passar por cima
function botaoHover(botao, textura1, textura2){
    botao.on("pointerover", () => botao.setTexture(textura2));
    botao.on("pointerout", () => botao.setTexture(textura1));
 }

