function digitar(valor) {
    const visor = document.getElementById('visor');
    
    //não deixar vários zeros no início
    if (visor.innerText === '0') {
        visor.innerText = valor;
    } else {
        visor.innerText += valor;
    }
}

function limpar() {
    document.getElementById('visor').innerText = '0';
}

function calcular() {
    const visor = document.getElementById('visor');
    try {
        // O eval tenta resolver o que está escrito no visor
        visor.innerText = eval(visor.innerText);
    } catch {
        // Se o usuário digitar algo errado mostra erro
        visor.innerText = 'Erro';
    }
}

function apagarUm() {
    const visor = document.getElementById('visor');
    
    if (visor.innerText.length > 1) {
        visor.innerText = visor.innerText.slice(0, -1);
    } else {
        // Se sobrar um número ao apagar ele volta a ser '0'
        visor.innerText = '0';
    }
}