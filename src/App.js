import React, { useState } from 'react';
import './App.css';


function App() {

  const frases = [
    'Conte para a roda: você já talaricou algum participante do jogo?',
    'Deixe a pessoa da sua direita mexer no seu WhatsApp por 30 segundos' + '\n' + '\n'+ 'ou beba 4 shots.',
    'Escolha 3 pessoas para beber um shot.',
    'Beber 2 shots ou dar um tapinha dna bunda da pessoa à sua esquerda',
    'Mande direct para o(a) atual do seu ex' + '\n' + '\n'+ 'Ou beba 4 shots',
    'Ligar para o(a) ex e dizer: "oi sumido' + '\n' + '\n'+ 'Ou beba 3 shots"',
    'Poste no instagram que está namorando com a pessoa da sua direita' + '\n' + '\n'+ 'Ou beba 3 shots',
    'Deixe a pessoa da sua esquerda escolher onde te dar um beijo' + '\n' + '\n'+ 'Ou beba 4 shots',
    'eu nunca... Liguei para o ex pedindo para voltar',
    'Fique 3 minutos com a pessoa da sua frente em um lugar sozinhos' + '\n' + '\n'+ 'Ou beba 6 shots os dois',
    'vote... quem teria um OnlyFans',
    'Se alguém estiver usando camiseta branca, todos devem dar uma opinião sobre a pessoa.' + '\n' + '\n'+ 'ou beba 1 shot. (vale para todos)',
    'Escolha uma pessoa para dar uma opinião sincera de você.' + '\n' + '\n'+ 'ou beba 1 shot (os dois)',
    'Mostre aos outros jogadores seu histórico de pesquisa.' + '\n' + '\n'+ 'Ou beba 2 shots',
    'DÊ um beijo na nuca da pessoa a sua direita.' + '\n' + '\n'+ 'Ou beba 2 shots',
    'tire uma peça de roupa de alguém.' + '\n' + '\n'+ 'Ou beba 1 shots',
    'Escolha 2 pessoas para dar um beijo triplo.' + '\n' + '\n'+ 'Ou beba 3 shots',
    'Troque de lugar com qualquer pessoa para sentar onde quiser;)',
    'Sente no colo da pessoa à sua esquerda por 1 rodada.' + '\n' + '\n'+ 'Ou beba 3 shots',
    'Conte para a roda: Quem foi a última pessoa que você pesquisou no Instagram?' + '\n' + '\n'+ 'ou beba 3 shots.',
    'Pergunte para alguém da roda sobre algo que você sempre quis saber mas nunca teve coragem de questionar' + '\n' + '\n'+ 'ou beba 1 shot.',
    'Como você descreveria a aparência física da pessoa a sua direita?' + '\n' + '\n'+ 'ou beba 3 shots.',
    'vote... quem tem mais cara de safada(o)',
    'vote... quem facilmente viraria Sugar Baby',
    'eu nunca... participei de uma suruba',
    'Cite um ex de alguém da roda que você ficaria.' + '\n' + '\n'+ 'ou beba 4 shots.',
    'Cite uma verdade sobre você mesmo que as outras pessoas da roda não saibam…',
    'Tire sua camiseta e fique sem ela até o final do jogo.' + '\n' + '\n'+ 'Ou beba 2 shots',
    'com quem desta roda você faria sexo oral?' + '\n' + '\n'+ 'ou beba 5 shots.',
    'Mostre um nud que você tem salvo no seu celular.' + '\n' + '\n'+ 'Ou beba 3 shots',
    'Entre a pessoa da sua esquerda ou direita você faria um sextape?' + '\n' + '\n'+ 'ou beba 2 shots.',
    'quem da roda você convidaria para um menage',
    'Falar o nome de alguém que você já ficou e ninguém sabe' + '\n' + '\n'+ 'Ou beba 5 shots',
    'Dê um selinho na pessoa da sua direita' + '\n' + '\n'+ 'Ou beba 3 shots',
    'Dance sensualmente uma música escolhida pelo grupo por 30 segundos' + '\n' + '\n'+ 'ou beba 5 shots.',
    'Troque de roupa (qualquer peça) com a pessoa da sua frente' + '\n' + '\n'+ 'ou beba 3 shots.',
    'Escolha alguém da roda para te dar um apelido e explique por que ele combina com você' + '\n' + '\n'+ 'ou beba 4 shots.',
    'Envie um "Oi, sumido(a)" para alguém que o grupo escolher no seu WhatsApp' + '\n' + '\n'+ 'ou beba 6 shots.',
    'Imite a última pessoa que falou por 1 minuto' + '\n' + '\n'+ 'ou beba 3 shots.',
    'Escolha duas pessoas para simularem uma cena de novela mexicana' + '\n' + '\n'+ 'ou todos bebem 2 shots.',
    'Poste nos seus stories: "Alguém aí quer saber algo que nunca contei?"' + '\n' + '\n'+ 'ou beba 3 shots.',
    'Conte qual foi o maior fora que você já levou' + '\n' + '\n'+ 'ou beba 4 shots.',
    'Faça uma massagem nos pés da pessoa à sua esquerda por 1 rodada' + '\n' + '\n'+ 'ou beba 6 shots.',
    'Leia em voz alta uma mensagem do seu WhatsApp enviada para um contatinho' + '\n' + '\n'+ 'ou beba 3 shots.',
    'Fale quem, na roda, seria seu parceiro ideal para uma noite selvagem' + '\n' + '\n'+ 'ou beba 5 shots.',
    'Escolha alguém para trocar de lugar e sentar no chão por 2 rodadas' + '\n' + '\n'+ 'ou beba 2 shots.',
    'Qual foi a situação mais embaraçosa que você já passou na cama?' + '\n' + '\n'+ 'ou beba 6 shots.',
    'Envie um emoji aleatório para a última pessoa com quem você falou no Instagram' + '\n' + '\n'+ 'ou beba 4 shots.',
    'Troque de peça íntima com alguém (vale por cima da roupa)' + '\n' + '\n'+ 'ou beba 5 shots.',
    'Sussurre algo "proibido" no ouvido de alguém escolhido pelo grupo' + '\n' + '\n'+ 'ou beba 3 shots.',
    'Quem, na roda, seria o par ideal para um namoro fake na internet? Escolha' + '\n' + '\n'+ 'ou beba 4 shots.',
    'Cite uma qualidade e um defeito de cada pessoa na roda' + '\n' + '\n'+ 'ou beba 1 shot para cada pessoa ignorada.',
    'Coloque um status polêmico no WhatsApp ("Preciso conversar com alguém importante, urgente!")' + '\n' + '\n'+ 'ou beba 6 shots.',
    'Ligue para um amigo e peça um conselho romântico sem contexto' + '\n' + '\n'+ 'ou beba 5 shots.',
    'Beba e jogue mais uma rodada.',
    'Escolha um jogador para beber dois shots',
    'Conte uma verdade e uma mentira e deixe os jogadores curiosos.',
    'Faça uma pergunta embaraçosa para alguém.' + '\n' + '\n'+ 'Se a pessoa não quiser responder terá que beber2 shots.'
  ];
  /*const acao = [
    'Desafio.',
    'Eu nunca',
    'Punção',
  ];*/
  // Array de cores para o gradiente
  const cores = [
    ['#add8e6', '#4682b4'],

    /*
    ['#008080', '#20b2aa'],
    ['#31a2f2', '#004e4e'],
    ['#FF5733', '#FFC300'],
    ['#6a5acd', '#8a2be2'],
    ['#ff7f50', '#ff6347'],
    ['#00bfff', '#1e90ff'],
    ['#ff6347', '#ff4500'],
    ['#90ee90', '#32cd32'],
    ['#ff1493', '#ff69b4'],
    ['#ffcc99', '#ff9966'],
    ['#ff9966', '#ff6600'],
    ['#ffb6c1', '#d3d3d3'],
    ['#800080', '#4b0082'],
    ['#8b0000', '#c71585'],
    ['#ff4500', '#dc143c'],
    ['#f4a300', '#f44336'],
    ['#f5deb3', '#d2691e'],
    ['#32cd32', '#228b22'],
    ['#00fa9a', '#3cb371'],
    ['#ba55d3', '#9370db'],
    ['#3a3a3a', '#4b4b4b'],
    ['#2f4f4f', '#556b2f'],
    ['#1b1b1b', '#3d3d3d'],
    ['#800000', '#8b0000'],
    ['#6b8e23', '#556b2f'],
    ['#4b0082', '#5a2d66'],
    ['#5c4033', '#3e2b22'],
    ['#2f4f4f', '#0d2c2c'],
    ['#3c3c3c', '#505050'],
    ['#663399', '#4b0082'],
    ['#3d3d3d', '#282828'],
    ['#2f4f4f', '#003d3d'],
    ['#4e4e4e', '#3a3a3a'],
    
    ['#4b0082', '#663399'],
    ['#333333', '#4c4c4c'],
    ['#8b0000', '#5c4033'],
    ['#6a5acd', '#4b0082'],
    ['#2f4f4f', '#2c6e49'],
    ['#5d4037', '#3e2723'],
    ['#556b2f', '#808000'],
    ['#7f8c8d', '#34495e'],
    ['#303030', '#505050'],
    ['#36454f', '#2f4f4f'],
    ['#3b3b3b', '#292929'],
    ['#5b3b3b', '#4b2f2f'],
    ['#404040', '#606060'],
    ['#3e2723', '#5c4033'],
    ['#6e7b8b', '#2f4f4f'],
    ['#555555', '#2c3e50'],
    ['#45322e', '#5a4b47'],
    ['#6b8e23', '#808000'],
    ['#3d3d3d', '#222222'],
    ['#556b2f', '#6b8e23'],*/
  ];

  /*const corblusa = [
    'preto',
    'branco',
    'preto',
    'cinza',
    'rosa',
    'verde',
    'azul',
  ];
  const [corBlusaAtual, setBlusaCorAtual] = useState(corblusa[0]);
  const alterarBlusa = () => {
    const novaCor = corBlusaAtual[Math.floor(Math.random() * corblusa.length)]; // Seleciona uma cor aleatória
    setBlusaCorAtual(novaCor); // Atualiza a cor
  };*/

     // Função para embaralhar frases
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Estados
  const [frasesEmbaralhadas, setFrasesEmbaralhadas] = useState(shuffleArray([...frases]));
  const [indice, setIndice] = useState(0);
  const [corAtual, setCorAtual] = useState(cores[0]); // Inicializa com a primeira cor

  // Função chamada ao clicar no botão
  const alterarTexto = () => {
    // Verifica se todas as frases foram exibidas
    if (indice < frasesEmbaralhadas.length - 1) {
      setIndice(indice + 1); // Avança para a próxima frase
    } else {
      setIndice(0); // Reinicia o ciclo das frases
      setFrasesEmbaralhadas(shuffleArray([...frases])); // Reembaralha as frases
    }
    
    // Atualiza a cor de fundo
    const novaCor = cores[Math.floor(Math.random() * cores.length)];
    setCorAtual(novaCor);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1>Se beber não jogue</h1>
          <h5>Você vai aguentar?</h5>
        </p>
        {/* Div com gradiente de cor dinâmico */}
        <div id="addcard" className="card"
          style={{
            background: `linear-gradient(45deg, ${corAtual[0]}, ${corAtual[1]})`,
            boxShadow: '10px 10px 25px 0 rgba(0, 0, 0, 0.5)',
            transition: '0.3s',
            width: '220pt',
            height: '300pt',
            borderRadius: '15pt',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Botão que exibe a frase e muda o fundo ao ser clicado */}
          <button id="meuBotao" onClick={alterarTexto}>
            {frasesEmbaralhadas[indice].split('\n').map((linha, index) => (
              <React.Fragment key={index}>
                {linha}
                <br />
              </React.Fragment>
            ))}
          </button>

        </div>
      </header>
    </div>
  );
}


export default App;
