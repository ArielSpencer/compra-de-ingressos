function pontuarTime1() {
    let score = document.querySelector('.score_equipe1').innerHTML;
    score++
    document.querySelector('.score_equipe1').innerHTML = score;
    pontuacaoTotal = document.getElementById('qtd-vitorias-equipe1').innerHTML;

    if (score == 4) {
        document.querySelector('.score_equipe1').innerHTML = '0';
        document.querySelector('.score_equipe2').innerHTML = '0';
        pontuacaoTotal++
        document.getElementById('qtd-vitorias-equipe1').innerHTML = pontuacaoTotal;
    }
}

function removerPontoTime1() {
    let score = document.querySelector('.score_equipe1').innerHTML;
    score--
    document.querySelector('.score_equipe1').innerHTML = score;
    pontuacaoTotal = document.getElementById('qtd-vitorias-equipe1').innerHTML;

    if (score < 0) {
        document.querySelector('.score_equipe1').innerHTML = '0';
    }
}

function pontuarTime2() {
    let score = document.querySelector('.score_equipe2').innerHTML;
    score++
    document.querySelector('.score_equipe2').innerHTML = score;
    pontuacaoTotal = document.getElementById('qtd-vitorias-equipe2').innerHTML;

    if (score == 4) {
        document.querySelector('.score_equipe1').innerHTML = '0';
        document.querySelector('.score_equipe2').innerHTML = '0';
        pontuacaoTotal++
        document.getElementById('qtd-vitorias-equipe2').innerHTML = pontuacaoTotal;
    }
}

function removerPontoTime2() {
    let score = document.querySelector('.score_equipe2').innerHTML;
    score--
    document.querySelector('.score_equipe2').innerHTML = score;
    pontuacaoTotal = document.getElementById('qtd-vitorias-equipe2').innerHTML;

    if (score < 0) {
        document.querySelector('.score_equipe2').innerHTML = '0';
    }
}