function resposta(resposta) {
    if (resposta === 'sim') {
        alert("Você clicou em SIM, ver minha filha com as bochechas pelo a qual me apaixonei");
    } else {
        alert("Você clicou em NÃO? Vou comer seu cuzinho em 😉");
    }

    // Pegadinha divertida: redireciona para a página inicial após 2 segundos
    setTimeout(function() {
        window.location.href = "index.html"; // Redireciona para index.html após 2s
    }, 2000);
}
