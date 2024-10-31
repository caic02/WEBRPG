class Heroi {
    nome: string;
    hpMaximo: number;
    hpAtual: number;
  
    constructor(nome: string, hpMaximo: number) {
      this.nome = nome;
      this.hpMaximo = hpMaximo;
      this.hpAtual = hpMaximo;
    }
  
    ataque(): number {
      return 3;
    }
  }

  //Mob Teste
  class MobTeste {
    nome: string;
    hpMaximo: number;
    hpAtual: number;
  
    constructor(nome: string, hpMaximo: number) {
      this.nome = nome;
      this.hpMaximo = hpMaximo;
      this.hpAtual = hpMaximo;
    }
  
    ataque(): number {
      return 2;
    }
  }

// Função para criar o herói
function criarHeroi(): Heroi {
  return new Heroi('Caic', 20);
}

// Função para criar o mobs
function criarMob(): MobTeste {
  return new MobTeste('Rato', 20);
}

 // Função para atualizar a interface no HTML
function atualizarInterface(jogador: Heroi, inimigo: MobTeste): void {
  const elementoNomeJogador = document.getElementById('nome-personagem');  // Pega o elemento HTML
  const elementoHpJogador = document.getElementById('hp-personagem');  // Pega o elemento HTML
  const elementoNomeInimigo = document.getElementById('nome-inimigo');  // Pega o elemento HTML
  const elementoHpInimigo = document.getElementById('hp-inimigo');  // Pega o elemento HTML

  if (elementoNomeJogador) {
    elementoNomeJogador.textContent = jogador.nome;  // Atualiza o nome do personagem no HTML
  }
  if (elementoHpJogador) {
    elementoHpJogador.textContent = `${jogador.hpAtual}/${jogador.hpMaximo}`; // Atualiza o hp do personagem
  }
  if (elementoNomeInimigo) {
    elementoNomeInimigo.textContent = inimigo.nome;  // Atualiza o nome do inimigo no HTML
  }
  if (elementoHpInimigo) {
    elementoHpInimigo.textContent = `${inimigo.hpAtual}/${inimigo.hpMaximo}`; // Atualiza o hp do Inimigo
  }
}

// Criando o herói
const caic = criarHeroi();
//Criando o Mob
const mob1 = criarMob();

// Chama a função para atualizar o nome do personagem quando a página for carregada
atualizarInterface(caic, mob1);





  /* Primeiro contraolar quem inicia, para saber que vai atacar primeiro;
  A pessoa faz a ação dela, e isso invoca a função que ela escolher
  saindo o resultado do calculo, devemos ter 2 funcções await, que está esperando o HP do heroi ou do mob chegar a zero
  para determinar quem vai ganhar e perder;
  apos a primeiro pessoa jogar, a segunda joga, e quando a segunda jogar o turno 2 começa, até a luta acabar com o await*/
  