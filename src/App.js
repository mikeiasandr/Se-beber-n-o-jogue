import React, { useState } from 'react';
import './App.css';

function App() {

  const frases = [
    'Conte para a roda: você já talaricou algum participante do jogo?',
    'Deixe a pessoa da sua direita mexer no seu WhatsApp por 30 segundos ...ou beba 4 shots.',
    'Escolha 3 pessoas para beber.',
    'Beber 2 shots ou dar um tapinha dna bunda da pessoa à sua esquerda',
    'Mande direct para o(a) atual do seu ex Ou beba 4 shots',
    'Ligar para o(a) ex e dizer: "oi sumido Ou beba 7 shots"',
    'Poste no instagram que está namorando com a pessoa da sua direita Ou beba 7 shots',
    'Deixe a pessoa da sua esquerda escolher onde te dar um beijo Ou beba 4 shots',
    'eu nunca... Liguei para o ex pedindo para voltar',
    'Fique 3 minutos com a pessoa da sua frente em um lugar sozinhos Ou beba 6 shots os dois',
    'vote... quem teria um OnlyFans',
    'Se alguém estiver usando camiseta branca, todos devem dar uma opinião sobre a pessoa ...ou beba 7 shots. (vale para todos)',
    'Escolha uma pessoa para dar uma opinião sincera de você Ou beba 4 shots (os dois)',
    'Mostre aos outros jogadores seu histórico de pesquisaOu beba 6 shots',
    'DÊ um beijo na nuca da pessoa a sua direita Ou beba 6 shots',
    'tire uma peça de roupa de alguém Ou beba 1 shots',
    'Escolha 2 pessoas para dar um beijo triplo. Ou beba 5 shots',
    'Troque de lugar com qualquer pessoa para sentar onde quiser ;)',
    'Sente no colo da pessoa à sua esquerda por 1 rodada. Ou beba 6 shots',
    'eu nunca... Fiquei com um professor.',
    'Conte para a roda: Quem foi a última pessoa que você pesquisou no Instagram? ...ou beba 3 shots.',
   ' Pergunte para alguém da roda sobre algo que você sempre quis saber mas nunca teve coragem de questionar ...ou beba 7 shots.',
    'Como você descreveria a aparência física da pessoa a sua direita? ...ou beba 3 shots.',
    'vote... quem tem mais cara de safada(o)',
    'vote... quem facilmente viraria Sugar Baby',
    'eu nunca... participei de uma suruba',
    'Cite um ex de alguém da roda que você ficaria …ou beba 7 shots.',
    'Cite uma verdade sobre você mesmo que as outras pessoas da roda não saibam…',
    'Tire sua camiseta e fique sem ela até o final do jogo. Ou beba 2 shots',
    'com quem desta roda você faria sexo oral? Se não responder, beba 7 shots.',
    'Mostre uma nude que você tem salvo no seu celular. Ou beba 2 shots',
    'Entre a pessoa da sua esquerda ou direita você faria um sextape? -Se não responder, beba 2 shots.',
    'quem da roda você convidaria para um menage',
    'Falar o nome de alguém que você já ficou e ninguém sabe Ou beba 5 shots',
    'Dê um selinho na pessoa da sua direita Ou beba 7 shots'



  
    /*'Beba e jogue mais uma rodada.',
    'Escolha um jogador para beber dois shots',
    'Conte uma verdade e uma mentira e deixe os jogadores curiosos.',
    'Pergunte algo específico sobre um tema que você sabe que o grupo conhece. Quem errar, bebe.',
    'Faça uma pergunta embaraçosa para alguém. Se a pessoa não quiser responder, beba.'*/
  ];
  /*const acao = [
    'Desafio.',
    'Eu nunca',
    'Punção',
  ];*/
  // Array de cores para o gradiente
  const cores = [
    ['#bfa2a1', '#ff66bb'],
    ['#3ce0bd', '#6060cc'], // Gradiente do laranja para o amarelo
    ['#33FF57', '#009688'], // Gradiente do verde para o ciano
    ['#3357FF', '#4B0082'], // Gradiente do azul para o índigo
    ['#FFC300', '#FF5733'],  // Gradiente do amarelo para o laranja
    ['#d76a69', '#019157'],
    ['#bb4411', '#ff66bb'],
    ['#807396', '#6060cc'], // Gradiente do laranja para o amarelo
    ['#d00000', '#dd14ab'], // Gradiente do verde para o ciano
    ['#ffe500', '#138859'], // Gradiente do azul para o índigo
    ['#289ec4', '#00a78d'],  // Gradiente do amarelo para o laranja
    ['#31a2f2', '#004e4e'],
  ];


  
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
          <h1>The Game</h1>
        </p>
        {/* Div com gradiente de cor dinâmico */}
        <div id="addcard" className="card"
          style={{
            background: `linear-gradient(45deg, ${corAtual[0]}, ${corAtual[1]})`,
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
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
          <button id='meuBotao' onClick={alterarTexto}>
            {frasesEmbaralhadas[indice]}
          </button>
        </div>
      </header>
    </div>
  );
}


export default App;
