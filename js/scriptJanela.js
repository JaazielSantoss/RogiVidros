/* CARROSSEL DAS JANELAS */

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.carrossel-janela').forEach(carrossel => {
        const imagens = carrossel.querySelectorAll('img');
        const container = carrossel.parentElement;
        const btnEsquerda = container.querySelector('.carrossel-janelas.esquerda');
        const btnDireita = container.querySelector('.carrossel-janelas.direita');

        if (imagens.length === 0 || !btnEsquerda || !btnDireita) return;

        let atual = 0;

        function mostrarImagem(indice) {
            imagens.forEach(img => {
                img.classList.remove('ativo');
            });

            imagens[indice].classList.add('ativo');
        }

        mostrarImagem(atual);

        btnDireita.addEventListener('click', () => {
            atual = (atual + 1) % imagens.length;
            mostrarImagem(atual);
        });

        btnEsquerda.addEventListener('click', () => {
            atual = (atual - 1 + imagens.length) % imagens.length;
            mostrarImagem(atual);
        });
    });
});
