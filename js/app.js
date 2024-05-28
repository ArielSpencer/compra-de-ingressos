limparCampo()

function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeSelecionada = parseInt(document.getElementById('qtd').value);

    if (tipoIngresso == 'superior') {
        comprarSuperior(quantidadeSelecionada);
        limparCampo()
    } else {
        if (tipoIngresso == 'pista') {
            comprarPista(quantidadeSelecionada);
            limparCampo()
    } else {
        comprarInferior(quantidadeSelecionada);
        limparCampo()
        }
    }
}

function comprarSuperior(quantidadeSelecionada) {
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if  (quantidadeSelecionada == 0) {
        alert ('Por favor, informe a quantidade de ingressos que deseja comprar antes de prosseguir.');
    } else {
        if (quantidadeSelecionada > quantidadeSuperior) {
            alert ('Desculpe, a quantidade de ingressos solicitada para o tipo "Cadeira Superior" não está disponível no momento.');
        } else {
            if (quantidadeSelecionada > 10) {
                alert ('Atenção: O limite máximo de ingressos por compra é de 10. Por favor, ajuste a quantidade e tente novamente.');
            } else {
                quantidadeSuperior = quantidadeSuperior - quantidadeSelecionada;
                document.getElementById('qtd-superior').textContent = (quantidadeSuperior);
                alert ('Parabéns! Sua compra foi realizada com sucesso. Agradecemos pela preferência e esperamos que você aproveite o evento! :)');
            }
        }
    }
}   

function comprarPista(quantidadeSelecionada) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    if  (quantidadeSelecionada == 0) {
        alert ('Por favor, informe a quantidade de ingressos que deseja comprar antes de prosseguir.');
    } else {
        if (quantidadeSelecionada > quantidadePista) {
            alert ('Desculpe, a quantidade de ingressos solicitada para o tipo "Pista" não está disponível no momento.');
        } else {
            if (quantidadeSelecionada > 10) {
                alert ('Atenção: O limite máximo de ingressos por compra é de 10. Por favor, ajuste a quantidade e tente novamente.');
        } else {
            quantidadePista = quantidadePista - quantidadeSelecionada;
            document.getElementById('qtd-pista').textContent = (quantidadePista);
            alert ('Parabéns! Sua compra foi realizada com sucesso. Agradecemos pela preferência e esperamos que você aproveite o evento! :)');
            }
        }
    }
}

function comprarInferior(quantidadeSelecionada) {
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if  (quantidadeSelecionada == 0) {
        alert ('Por favor, informe a quantidade de ingressos que deseja comprar antes de prosseguir.');
    } else {
        if (quantidadeSelecionada > quantidadeInferior) {
            alert ('Desculpe, a quantidade de ingressos solicitada para o tipo "Cadeira Inferior" não está disponível no momento.');
        } else {
            if (quantidadeSelecionada > 10) {
                alert ('Atenção: O limite máximo de ingressos por compra é de 10. Por favor, ajuste a quantidade e tente novamente.');
        } else {
            quantidadeInferior = quantidadeInferior - quantidadeSelecionada;
            document.getElementById('qtd-inferior').textContent = (quantidadeInferior);
            alert ('Parabéns! Sua compra foi realizada com sucesso. Agradecemos pela preferência e esperamos que você aproveite o evento! :)');
            }
        }
    }
}

function consultarIngressosDisponiveis () {
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if ((quantidadeSuperior == 0) && (quantidadePista == 0) && (quantidadeInferior == 0)) {
        alert ('Todos os ingressos para este evento estão esgotados. Agradecemos pelo seu interesse e esperamos vê-lo em nossos próximos eventos. :)');
    }
}

function limparCampo() {
    document.getElementById('qtd').value = 0;
    consultarIngressosDisponiveis ();
}