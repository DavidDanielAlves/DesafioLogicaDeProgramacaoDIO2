let vitorias = 30;
let derrotas = 10;

vitorias = vitorias - derrotas;
function calcularNivelDoJogador (vitorias) {
    if (vitorias < 10) {
        return 'Ferro';
    }

    if (vitorias > 11 && vitorias < 20) {
        return 'Bronze';
    }

    if (vitorias > 21 && vitorias < 50) {
        return 'Prata';
    }

    if (vitorias > 51 && vitorias < 80) {
        return 'Ouro';
    }

    if (vitorias > 81 && vitorias < 90) {
        return 'Diamante';
    }

    if (vitorias > 91 && vitorias < 100) {
        return 'Lendário';
    }

    if (vitorias > 100) {
        return 'Imortal'
    }
}

let nivelDoJogador = calcularNivelDoJogador(vitorias);

console.log(`O Herói tem de saldo de vitorias ${vitorias} está no nivel ${nivelDoJogador}`);
