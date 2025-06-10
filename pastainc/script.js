function resposta(resposta) {
    if (resposta === 'sim') {
        alert("Você clicou em SIM... mas o presente é um grande mistério!");
    } else {
        alert("Você clicou em NÃO? Vou comer seu cuzinho em 😉");
    }

    // Pegadinha divertida: redireciona para a página inicial após 2 segundos
    setTimeout(function() {
        window.location.href = "inicio copy.html"; // Redireciona para index.html após 2s
    }, 2000);
}
