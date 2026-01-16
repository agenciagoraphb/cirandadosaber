document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.next-slide');
    const prevBtn = document.querySelector('.prev-slide');
    
    let counter = 0;
    const size = 100; // Porcentagem de cada slide
    const autoPlayDelay = 5000; // Tempo em milissegundos (5 segundos)
    let autoPlayInterval;

    // Função que move o slider
    function slide() {
        container.style.transform = 'translateX(' + (-size * counter) + '%)';
    }

    // Função para ir para o próximo slide
    function nextSlideFn() {
        if (counter >= slides.length - 1) {
            counter = 0; // Volta para o primeiro slide
        } else {
            counter++;
        }
        slide();
    }

    // Função para ir para o slide anterior
    function prevSlideFn() {
        if (counter <= 0) {
            counter = slides.length - 1; // Vai para o último slide
        } else {
            counter--;
        }
        slide();
    }

    // Inicia o autoplay
    function startAutoPlay() {
        // Limpa qualquer intervalo existente para evitar duplicidade
        if(autoPlayInterval) clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(nextSlideFn, autoPlayDelay);
    }

    // Reinicia o timer quando há interação manual
    function resetTimer() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    // Event Listeners para os botões
    nextBtn.addEventListener('click', () => {
        nextSlideFn();
        resetTimer();
    });

    prevBtn.addEventListener('click', () => {
        prevSlideFn();
        resetTimer();
    });

    // Inicializa o autoplay
    startAutoPlay();
});