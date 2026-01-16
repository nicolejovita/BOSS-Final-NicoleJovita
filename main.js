
const heroi = {
  nome: "Nicole Jovita",
  classe: "Recém-efetivada da Orc'estra",
  xpTotal: 890, 
  nivel: 4,
  titulo: "",
  vida: 100,
  mana: 50,
  ouro: 30
};

function calcularEvolucao(xp) {
  if (xp >= 1000) {
    return { nivel: 5, titulo: "Lenda do Código" };
  } else if (xp >= 700) {
    return { nivel: 4, titulo: "Desenvolvedora Avançada" };
  } else if (xp >= 500) {
    return { nivel: 3, titulo: "Desenvolvedora Intermediária" };
  } else if (xp >= 50) {
    return { nivel: 2, titulo: "Aprendiz de Código" };
  } else {
    return { nivel: 1, titulo: "Iniciante" };
  }
}

const spanNome   = document.querySelector("#hero-nome");
const spanClasse = document.querySelector("#hero-classe");
const spanNivel  = document.querySelector("#hero-nivel");
const spanTitulo = document.querySelector("#hero-titulo");
const spanXp     = document.querySelector("#hero-xp");
const btnXp      = document.querySelector("#btn-xp");


function atualizarPainel() {
  spanNome.textContent   = heroi.nome;
  spanClasse.textContent = heroi.classe;
  spanNivel.textContent  = heroi.nivel;
  spanTitulo.textContent = heroi.titulo;
  spanXp.textContent     = heroi.xpTotal;
}

const evolucaoInicial = calcularEvolucao(heroi.xpTotal);
heroi.nivel = evolucaoInicial.nivel;
heroi.titulo = evolucaoInicial.titulo;

atualizarPainel();

btnXp.addEventListener("click", function () {
  const nivelAnterior = heroi.nivel;
  const tituloAnterior = heroi.titulo;

  heroi.xpTotal += 10;

  const novaEvolucao = calcularEvolucao(heroi.xpTotal);
  heroi.nivel = novaEvolucao.nivel;
  heroi.titulo = novaEvolucao.titulo;

  atualizarPainel();

  if (
    heroi.nivel !== nivelAnterior ||
    heroi.titulo !== tituloAnterior
  ) {
    alert(
      "✨ EVOLUÇÃO DO HERÓI ✨\n\n" +
      "XP Total: " + heroi.xpTotal + "\n" +
      "Nível: " + heroi.nivel + "\n" +
      "Título: " + heroi.titulo
    );
  }
});

window.addEventListener("load", function () {
  alert(
    "🧙‍♀️ Ficha do Herói 🧙‍♀️\n\n" +
    "Nome: " + heroi.nome + "\n" +
    "Classe: " + heroi.classe + "\n" +
    "Nível: " + heroi.nivel + "\n" +
    "Título: " + heroi.titulo + "\n" +
    "XP: " + heroi.xpTotal + "\n" +
    "Vida: " + heroi.vida + "\n" +
    "Mana: " + heroi.mana + "\n" +
    "Ouro: " + heroi.ouro
  );
});

const form = document.querySelector("form");
const inputNome = document.querySelector("#nome");
const inputEmail = document.querySelector("#email");

const msgForm = document.createElement("p");
form.appendChild(msgForm);

form.addEventListener("submit", function (event) {
  event.preventDefault(); 

  if (inputNome.value === "" || inputEmail.value === "") {
    msgForm.textContent = "❌ Preencha nome e email antes de enviar.";
    msgForm.style.color = "red";
  } else {
    msgForm.textContent = "✅ Mensagem enviada com sucesso!";
    msgForm.style.color = "green";
    form.reset();
  }
});

const btnOraculo = document.querySelector("#btn-oraculo");
const respostaOraculo = document.querySelector("#resposta-oraculo");

const URL_ORACULO = "https://api.adviceslip.com/advice";

async function consultarOraculo() {
  try {
    let resposta = await fetch(URL_ORACULO);
    let dados = await resposta.json();

    let mensagem = dados.slip.advice;

    alert("🔮 O Oráculo diz:\n\n" + mensagem);

    respostaOraculo.textContent = "🔮 Oráculo: " + mensagem;

  } catch (erro) {
    alert("⚠️ O oráculo está em silêncio...");
    console.error(erro);
  }
}

btnOraculo.addEventListener("click", consultarOraculo);
