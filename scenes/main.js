const larguraJogo = 800; //Altura da página
const alturaJogo = 600; //Largura da página

window.onload = function()
{
    let gameConfig = 
    {
        type: Phaser.AUTO,
        // define as características do jogo (largura, altura e centro)
        scale:{
            width:larguraJogo, 
            height:alturaJogo,
            autoCenter:Phaser.Scale.CENTER,
           
        },

        // características físicas do jogo
        physics: { 
            default: 'arcade', 
            arcade: {
                gravity: { y: 300 }, // define a gravidade
                debug: false //visualização da limitação da colisão dos assets
            }
        },
        
        
        backgroundColor: '#CEE6F3',// define a cor do fundo
        scene:[Cena1, Controle, Cena2],// lista das fases que tem no jogo(tarefa adicional)
        parent: 'game',
        dom:{
            createContainer: false
        },
    };
    game = new Phaser.Game(gameConfig); // criação do jogo

    window.focus();
}


// o que acontece aqui?
//var game = new Phaser.Game(config);

function preload() { // carrega os assets
    
this.load.image('terra', 'assets/terra.avif'); //carrega o chão
this.load.image('superficie', 'assets/chão.png'); // carrega a imagem da superficie do chão
this.load.image('ceu', 'assets/ceu.png'); // carrega a imagem do céu

}

function create() { // apresenta e define os recursos e assets carregado no preload
    
this.add.image(400, 700, 'terra').setScale(1.5); // adicionando e definindo o tamanho e a posição da imagem do chão
this.add.image(400, 800, 'superficie'); // adicionando e definindo a posição da imagem da "cobertura" do chão
this.add.image(400, 300, 'ceu'); // adicionando e definindo a posição da imagem do céu
}

function update() {
}