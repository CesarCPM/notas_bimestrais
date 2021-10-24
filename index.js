//Prompt nome
function nomeAluno() {
    const area = document.getElementById('name')
    var nome = prompt('Digite seu nome');

    if (nome.length > 20) {
        alert('Limite');
        nomeAluno();
    }

    while (nome == '' || nome == null) {
        alert('Insira o nome para consultar as notas!')
        nome = prompt('Digite seu nome');
    }
    area.innerHTML = 'Bem vindo, ' + nome + '!';
}

nomeAluno()

function checkInputs(inputs) {
    var preenchido = true;

    inputs.forEach(function (input) {

        if (input.value === "") {
            preenchido = false;
        }

    });

    return preenchido;

}
var inputs = document.querySelectorAll("input");
var button = document.querySelector("button");
inputs.forEach(function (input) {

    input.addEventListener('change', function () {
        if (checkInputs(inputs)) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    });
});

//Média
function quatroNotas() {
    var notas = document.getElementsByName('nota')
    const tamanho = notas.length;
    var total = 0
    for (var i = 0; i < tamanho; i++) {
        total = total + parseFloat(notas[i].value, 10)
    }
    var media = total / tamanho

    if (media >= 7) {
        var texto = document.getElementById('subtitle');
        texto.innerHTML = 'Parabéns! Sua média foi ' + media.toFixed(1) + ', você foi aprovado!'

    } else {
        var texto = document.getElementById('subtitle');
        texto.innerHTML = 'Sua média foi ' + media.toFixed(1) + ', você foi reprovado!';
    }
}