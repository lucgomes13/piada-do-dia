// Função para buscar a piada do dia
function buscarPiada() {
    // Aqui você pode usar fetch ou XMLHttpRequest para buscar a piada de um arquivo JSON ou API
    // Exemplo:
    fetch('categorias/piada.json')
        .then(response => response.json())
        .then(data => {
            const piada = data.piadas[0].texto; // Pega a primeira piada do array
            document.getElementById('piada').textContent = piada;
        });
}

// Função para avaliar a piada
function avaliarPiada(nota) {
    // Aqui você pode enviar a avaliação para um servidor ou armazenar localmente
    console.log('Nota: ' + nota);
}

// Função para enviar um comentário
function enviarComentario(event) {
    event.preventDefault();
    const comentario = document.getElementById('formulario-comentario').elements[0].value;
    // Aqui você pode enviar o comentário para um servidor ou armazenar localmente
    console.log('Comentário: ' + comentario);
}

// Eventos
window.onload = buscarPiada; // Busca a piada ao carregar a página

const botoesAvaliacao = document.querySelectorAll('#avaliacao button');
botoesAvaliacao.forEach(botao => {
    botao.onclick = () => avaliarPiada(botao.textContent);
});

document.getElementById('formulario-comentario').onsubmit = enviarComentario;