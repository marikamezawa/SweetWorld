class Cena2 extends Phaser.Scene {  // classe
    //construtor da cena
    constructor() {
        super({ 
            key: 'Cena2', //identificação
            backgroundColor: '#CEE6F3', // cor de fundo
         });
    }

    preload() { //recarrega recursos e assets
        
        this.load.image('chao', 'assets/terra.png'); //recarrega imagem da terra
        this.load.image('superficie', 'assets/chão.png'); // recarrega a imagem da "cobertura"
        this.load.image('ceu', 'assets/ceu.png'); // recarrega a imagem do céu
        this.load.image('ground', 'assets/ground.png'); // recarrega a imagem das plataformas
        this.load.spritesheet('player', 'assets/spritesheet-removebg-preview.png', { frameWidth: 32.2, frameHeight: 48.6}); // recarrega a imagem do personagem
        // recarrega as imagens de decoração do cenário
        this.load.image('doce', 'assets/doce1.png'); 
        this.load.image('doce2', 'assets/doce2.png');
        this.load.image('doce3', 'assets/doce3.png');
        this.load.image('chocolate', 'assets/chocolate.png');
     
        // recarrega a imagem do sorvete que é o que dá a pontuação
        this.load.image('sorvete', 'assets/sorvete.png');
       
    }

    create() { //adiciona recursos e assets do preload
        
        this.add.image(300, 950, 'chao').setScale(2); // adiciona a imagem do chão
        this.add.image(400, 300, 'ceu'); // adiciona imagem do céu
        // adiciona as imagens dos doces de decoração do cenário
        this.add.image(270, 460, 'doce').setScale(0.3);
        this.add.image(400, 430, 'doce').setScale(0.6).setFlip(true);
        this.add.image(100, 410, 'doce').setScale(0.7).setFlip(true);
        this.add.image(750,400, 'chocolate');


        superficie = this.physics.add.staticImage(400, 570, 'superficie'); // adiciona imagem da cobertura do chão
        superficie.body.setSize(800, 140, true); // ajusta o debug do assets superficie

        //adiciona as plataformas do jogo
        ground = this.physics.add.staticImage(590, 400, 'ground'); 
        ground2 = this.physics.add.staticImage(40, 250, 'ground');
        ground3 = this.physics.add.staticImage(700, 150, 'ground'); 
        
        // adiciona a imagem spritesheet do personagem jogador
        player = this.physics.add.sprite(100, 100, 'player').setScale(0.8);

         // adicionando o sorvete
         cream = this.physics.add.image(larguraJogo/2, 0, 'sorvete').setScale(0.07);
         cream.setCollideWorldBounds(true); //detecção de colisão entre o objeto
         cream.setBounce(0.5); // "elasticidade" do sorvete ao quicar no chão (física do jogo)
         // adiciona a colisão entre o sorvete e as plataformas com o chão
         this.physics.add.collider(cream, superficie);
         this.physics.add.collider(cream, ground);
         this.physics.add.collider(cream, ground2);
         this.physics.add.collider(cream, ground3);


        botao = this.input.keyboard.createCursorKeys();
      
        player.setBounce(0.2); // define a força (altura) que o player pula
        player.setCollideWorldBounds(true); // define que o player colide
        player.body.setGravityY(300); // define a gravidade do player no jogo

        // adiciona a colisão do player com os respectivos assets
        this.physics.add.collider(player, superficie);
        this.physics.add.collider(player, ground);
        this.physics.add.collider(player, ground2);
        this.physics.add.collider(player, ground3);

       

        // adicionando placar 
        placar = this.add.text(40, 40, 'pontos:' + pontuacao, {fontFamily: 'Arial', fontSize:'30px', fill:'#000'});

        this.physics.add.overlap(player, cream, function(){
            cream.setVisible(false); // sorvete fica "invisivel"

            var posicaoCream_Y = Phaser.Math.RND.between(50, 650); // sorteia número
            cream.setPosition(posicaoCream_Y, 100); // ajusta a posição da sorvete

            pontuacao +=1; // soma pontuação
            placar.setText('pontos:' + pontuacao); // atualiza texto do placar

            cream.setVisible(true); // ativa a visão do "novo sorvete"

            
        });


        //define as imagens do spritesheet para a viazualisação da movimentação do player
        this.anims.create({
            key: 'turn', // palavra-chave para quando ele virar
            frames: this.anims.generateFrameNumbers('player', { start: 12, end: 15 }), // definição de quais frames serão usadas para andar para a direita
            frameRate: 10, // quantidade de frame por segundo
            repeat: -1 // loop
        });

        this.anims.create({
            key: 'idle', // palavra-chave para quando ele estiver parado
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 0 }), // frame 0 (uma imagem para essa funçao)
            frameRate: 10, // quantidade de frame por segundo
            repeat: -1 // loop
        });


        
    }

    update() { // Lógica de atualização da cena

      
        //definição do teclado para a jogabilidade do player

        // o que acontece quando o botão esquerdo é clicado
        player.flipX = false //imagem original
        if (botao.left.isDown)
        {
             player.setVelocityX(-160); // velocidade e direção

             player.anims.play('turn', true); //definindo o que o player irá fazer através da palavra-chave
        }
        // o que acontece quando o botão direito é clicado
        else if (botao.right.isDown)
        {
            player.setVelocityX(160);  // velocidade e direção
            player.flipX = true // imagem espelhada 
            player.anims.play('turn', true);  //definindo o que o player irá fazer através da palavra-chave
        }
        else // se não atender nenhuma dessas condições, o player irá ficar parado
        {
            player.setVelocityX(0); // velocidade 0 

            player.anims.play('idle'); // ativando a plavra-chave para quando está parado
        }

        if (botao.up.isDown && player.body.touching.down) // quando o botão para cima eh clicado
        {
            player.setVelocityY(-480); // velocidade e direção
        }

        
    }
    
}
     


//variaveis
var botao;
var ground; 
var ground2;
var ground3;
var player;
var superficie;
var cream;
var placar;
var pontuacao = 0;
var botao2

