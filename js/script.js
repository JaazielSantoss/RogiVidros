/* menu toggle */
/*
const botaoMenu = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

botaoMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
})
*/
const lista = document.getElementById('servicosLista');
const avancar = document.getElementById('avancar');
const voltar = document.getElementById('voltar');
const card = document.querySelector('.servico-card');

if (lista && avancar && voltar && card) {
  const estiloLista = getComputedStyle(lista);

  const gap = parseInt(estiloLista.columnGap || estiloLista.gap);
  const distancia = card.offsetWidth + gap;

  avancar.addEventListener('click', () => {
    const fim = lista.scrollLeft + lista.clientWidth >= lista.scrollWidth -10;

    if (fim) {
      lista.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    } else {
      lista.scrollBy({
        left: distancia,
        behavior: 'smooth',
      });
    }
  });

  voltar.addEventListener('click', () => {
    if (lista.scrollLeft <= 0) {
      lista.scrollTo({ 
        left: lista.scrollWidth,
        behavior: 'smooth',
      });
    } else {
      lista.scrollBy({
        left: -distancia,
        behavior: 'smooth',
      });
    }
  });
}

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
});

document.addEventListener('contextmenu', (e) => {

    if (
        e.target.matches('.galeria-lista img') ||
        e.target.matches('.lightbox-img')
    ) {
        e.preventDefault();
    }

});

const botaoMenu = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const whatsapp = document.querySelector('.whatsapp-fixo');
const submenuServicos = document.querySelector('.submenu-servicos');

if (botaoMenu && menu) {

    // Abre e fecha pelo botão
    botaoMenu.addEventListener('click', (e) => {

        e.stopPropagation();

        menu.classList.toggle('active');

        if (!menu.classList.contains('active')) {

            if (submenuServicos) {
                submenuServicos.classList.remove('active');
            }

            if (whatsapp) {
                whatsapp.classList.remove('oculto-menu');
            }

        }

    });

    // Fecha ao clicar fora
    document.addEventListener('click', (e) => {

        if (
            menu.classList.contains('active') &&
            !menu.contains(e.target) &&
            !botaoMenu.contains(e.target)
        ) {

            menu.classList.remove('active');

            if (submenuServicos) {
                submenuServicos.classList.remove('active');
            }

            if (whatsapp) {
                whatsapp.classList.remove('oculto-menu');
            }

        }

    });

}
/* menu serviços */

document.addEventListener('DOMContentLoaded', () => {

    const linkServicos = document.querySelector('.link-servicos');
    const submenuServicos = document.querySelector('.submenu-servicos');
    const whatsapp = document.querySelector('.whatsapp-fixo');
    const menu = document.getElementById('menu');

    if (linkServicos && submenuServicos) {

        linkServicos.addEventListener('click', (e) => {

            // Celular + Tablet
            if (window.innerWidth <= 1400) {

                e.preventDefault();

                submenuServicos.classList.toggle('active');

                if (whatsapp) {

                    if (submenuServicos.classList.contains('active')) {
                        whatsapp.classList.add('oculto-menu');
                    } else {
                        whatsapp.classList.remove('oculto-menu');
                    }

                }

            }

        });

        // Quando o menu principal fechar
        if (menu) {

            const observer = new MutationObserver(() => {

                if (!menu.classList.contains('active')) {

                    submenuServicos.classList.remove('active');

                    if (whatsapp) {
                        whatsapp.classList.remove('oculto-menu');
                    }

                }

            });

            observer.observe(menu, {
                attributes: true,
                attributeFilter: ['class']
            });

        }

    }

});

/* depoimentos mobile */

const depoimentosLista = document.getElementById('depoimentosLista');
const depoAvancar = document.getElementById('depoAvancar');
const depoVoltar = document.getElementById('depoVoltar');

if (depoimentosLista && depoAvancar && depoVoltar) {
  const estiloDepoimentos = getComputedStyle(depoimentosLista);
  const gapDepoimentos = parseInt(estiloDepoimentos.columnGap || estiloDepoimentos.gap) || 0;
  const distanciaDepoimentos = depoimentosLista.clientWidth + gapDepoimentos;

  depoAvancar.addEventListener('click', () => {
    const fim =
    depoimentosLista.scrollLeft + depoimentosLista.clientWidth >= depoimentosLista.scrollWidth -10;

    if (fim) {
      depoimentosLista.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    } else {
      depoimentosLista.scrollBy({
        left: distanciaDepoimentos,
        behavior:'smooth'
      });
    }
  });

  depoVoltar.addEventListener('click', () => {
    if (depoimentosLista.scrollLeft <= 0) {
      depoimentosLista.scrollTo({
        left: depoimentosLista.scrollWidth,
        behavior: 'smooth',
      });
    } else {
      depoimentosLista.scrollBy ({
        left: -distanciaDepoimentos,
        behavior:'smooth',
      });
    }
  });
}

/* GALERIA */

const galeria = document.querySelector('.galeria-lista');
const foto = document.querySelector('.galeria-lista img');

const btnGaleriaDireita = document.querySelector('.galeria-seta.direita');
const btnGaleriaEsquerda = document.querySelector('.galeria-seta.esquerda');

if (galeria && foto && btnGaleriaDireita && btnGaleriaEsquerda) {

    function larguraScroll() {
        const gap = parseInt(getComputedStyle(galeria).gap) || 0;
        return foto.offsetWidth + gap;
    }

    btnGaleriaDireita.addEventListener('click', () => {

        const ultimoItem =
            galeria.scrollLeft + galeria.clientWidth >= galeria.scrollWidth - 10;

        if (ultimoItem) {

            galeria.scrollTo({
                left: 0,
                behavior: 'smooth'
            });

        } else {

            galeria.scrollBy({
                left: larguraScroll(),
                behavior: 'smooth'
            });

        }

    });

    btnGaleriaEsquerda.addEventListener('click', () => {

        if (galeria.scrollLeft <= 10) {

            galeria.scrollTo({
                left: galeria.scrollWidth,
                behavior: 'smooth'
            });

        } else {

            galeria.scrollBy({
                left: -larguraScroll(),
                behavior: 'smooth'
            });

        }

    });

}


/* LIGHTBOX */

document.addEventListener("DOMContentLoaded", () => {

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const bg = document.querySelector('.lightbox-bg');
    const caption = document.querySelector('.lightbox-caption');
    const imagensGaleria = document.querySelectorAll('.galeria-lista img');

    if (!lightbox || !lightboxImg || !closeBtn || !bg || !caption || imagensGaleria.length === 0) {
        return;
    }

    imagensGaleria.forEach(img => {

        img.addEventListener('click', () => {

            lightbox.classList.add('active');
            lightboxImg.src = img.src;

        });

    });

    function fechar() {

        lightbox.classList.remove('active');
        lightboxImg.src = "";
        caption.textContent = "";

    }

    closeBtn.addEventListener('click', fechar);
    bg.addEventListener('click', fechar);

    document.addEventListener('keydown', (e) => {

        if (e.key === 'Escape') {
            fechar();
        }

    });

});

/*
document.addEventListener("DOMContentLoaded", () => {

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const closeBtn = document.querySelector('.lightbox-close');
  const bg = document.querySelector('.lightbox-bg');
  const caption = document.querySelector('.lightbox-caption');
  const imagensGaleria = document.querySelectorAll('.galeria-lista img');

  // segurança
  if (!lightbox || !lightboxImg || !closeBtn || !bg || !caption || imagensGaleria.length === 0) return;

  // abre lightbox
  imagensGaleria.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.classList.add('active');
      lightboxImg.src = img.src;

      // legenda (usa alt da imagem)
      caption.textContent = img.alt || "";
    });
  });

  // função fechar
  function fechar() {
    lightbox.classList.remove('active');
    lightboxImg.src = "";
    caption.textContent = "";
  }

  // fechar no X
  closeBtn.addEventListener('click', fechar);

  // fechar clicando no fundo escuro
  bg.addEventListener('click', fechar);

  // fechar no ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fechar();
  });

});
*/
