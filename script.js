const visor = document.getElementById('visor');
const titulo = document.getElementById('titulo');
const btnTema = document.getElementById('btn-tema');
const btnIdioma = document.getElementById('btn-idioma');

let idiomaAtual = 'pt';

function adicionarAoVisor(valor) {
  visor.value += valor;
}

function limparVisor() {
  visor.value = '';
}

function apagarUltimo() {
  visor.value = visor.value.slice(0, -1);
}

function calcular() {
  try {
    let expressao = visor.value;
    expressao = expressao.replace(/÷/g, '/');
    expressao = expressao.replace(/×/g, '*');
    expressao = expressao.replace(/%/g, '/100');

    visor.value = eval(expressao);
  } catch (erro) {
    visor.value = idiomaAtual === 'pt' ? 'Erro!' : 'Error!';
  }
}

function atualizarTextos() {
  const estaEscuro = document.body.classList.contains('dark-mode');

  if (idiomaAtual === 'pt') {
    titulo.innerText = 'Calculadora ';
    btnIdioma.innerText = '🇺🇸 EN';
  } else {
    titulo.innerText = 'Calculator ';
    btnIdioma.innerText = '🇧🇷 PT';
  }

  if (estaEscuro) {
    btnTema.innerText = idiomaAtual === 'pt' ? '🌙 Escuro' : '🌙 Dark';
  } else {
    btnTema.innerText = idiomaAtual === 'pt' ? '☀️ Claro' : '☀️ Light';
  }
}

function alternarTema() {
  document.body.classList.toggle('dark-mode');
  atualizarTextos();
}

function alternarIdioma() {
  if (idiomaAtual === 'pt') {
    idiomaAtual = 'en';
  } else {
    idiomaAtual = 'pt';
  }
  atualizarTextos();
}