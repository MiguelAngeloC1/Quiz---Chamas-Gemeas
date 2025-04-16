
let jogadores = [];
let jogadorAtual = 0;
let perguntasRodada = [];
let perguntaAtual = null;
let tempoRestante = 10;
let temporizador = null;
let pausado = false;
let perguntasFeitas = 0;
const TOTAL_POR_RODADA = 20;

function adicionarJogador() {
  const nome = prompt("Nome do jogador:");
  if (!nome) return;
  jogadores.push({ nome, pontos: 0, pontosAcumulados: 0 });
  atualizarPlacar();
}

function iniciarJogo() {
  if (jogadores.length === 0) {
    alert("Adicione pelo menos um jogador!");
    return;
  }

  jogadores.forEach(j => j.pontos = 0);
  perguntasRodada = embaralhar([...perguntas]).slice(0, TOTAL_POR_RODADA);
  perguntasFeitas = 0;
  jogadorAtual = 0;
  novaPergunta();
}

function novaPergunta() {
  if (perguntasFeitas >= TOTAL_POR_RODADA) {
    finalizarRodada();
    return;
  }

  perguntaAtual = perguntasRodada[perguntasFeitas];
  perguntasFeitas++;

  document.getElementById("contadorPerguntas").textContent = `Pergunta ${perguntasFeitas} de ${TOTAL_POR_RODADA}`;
  document.getElementById("pergunta").textContent = perguntaAtual.pergunta;
  document.getElementById("jogadorAtual").textContent = jogadores[jogadorAtual].nome;
  document.getElementById("feedback").textContent = "";
  document.getElementById("alternativas").innerHTML = "";

  perguntaAtual.alternativas.forEach((alt, i) => {
    const btn = document.createElement("button");
    btn.textContent = alt;
    btn.onclick = () => responder(i);
    document.getElementById("alternativas").appendChild(btn);
  });

  tempoRestante = 10;
  atualizarTimer();
  if (temporizador) clearInterval(temporizador);
  temporizador = setInterval(contarTempo, 1000);
}

function responder(indice) {
  if (pausado) return;
  clearInterval(temporizador);

  const jogador = jogadores[jogadorAtual];
  const feedback = document.getElementById("feedback");

  if (indice === perguntaAtual.correta) {
    jogador.pontos += 1;
    feedback.textContent = "✅ Correto! +1 ponto!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "❌ Errado!";
    feedback.style.color = "red";
  }

  atualizarPlacar();

  setTimeout(() => {
    proximoJogador();
    novaPergunta();
  }, 2000);
}

function contarTempo() {
  if (pausado) return;
  tempoRestante--;
  atualizarTimer();

  if (tempoRestante <= 0) {
    clearInterval(temporizador);
    document.getElementById("feedback").textContent = "⏰ Tempo esgotado!";
    document.getElementById("feedback").style.color = "orange";

    setTimeout(() => {
      proximoJogador();
      novaPergunta();
    }, 2000);
  }
}

function atualizarTimer() {
  const timer = document.getElementById("timer");
  timer.textContent = pausado ? "⏸️ Jogo Pausado" : `⏳ Tempo: ${tempoRestante}s`;
  timer.className = pausado ? "paused" : "";
}

function togglePause() {
  pausado = !pausado;
  atualizarTimer();
}

function proximoJogador() {
  jogadorAtual = (jogadorAtual + 1) % jogadores.length;
  document.getElementById("jogadorAtual").textContent = jogadores[jogadorAtual].nome;
}

function atualizarPlacar() {
  const container = document.getElementById("jogadores");
  container.innerHTML = "";
  jogadores.forEach(jogador => {
    const div = document.createElement("div");
    div.className = "jogador";
    div.innerHTML = `<span>${jogador.nome}: ${jogador.pontos} ponto(s) (Acumulado: ${jogador.pontosAcumulados} ponto(s))</span>`;
    container.appendChild(div);
  });
}

function finalizarRodada() {
  jogadores.forEach(jogador => jogador.pontosAcumulados += jogador.pontos);

  const maxPontos = Math.max(...jogadores.map(j => j.pontos));
  const vencedores = jogadores.filter(j => j.pontos === maxPontos);
  const nomes = vencedores.map(j => j.nome).join(" e ");
  alert(`🏆 Rodada finalizada! ${nomes} venceu(ra)m com ${vencedores[0].pontos} ponto(s)!`);

  jogadores.forEach(j => j.pontos = 0);
  atualizarPlacar();

  document.getElementById("pergunta").textContent = "Clique em 'Começar Jogo' para nova rodada.";
  document.getElementById("alternativas").innerHTML = "";
  document.getElementById("jogadorAtual").textContent = "Nenhum";
  document.getElementById("feedback").textContent = "";
  document.getElementById("timer").textContent = "";
  document.getElementById("contadorPerguntas").textContent = "";
}

function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
