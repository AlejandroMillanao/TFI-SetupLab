/*
 * SetupLab - interacciones ES6+
 * Sin dependencias: usa IntersectionObserver y API DOM nativa.
 */
(() => {
  'use strict';

  // Si JS llega a ejecutarse, dejamos de usar el fallback .no-js
  document.documentElement.classList.remove('no-js');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealItems = document.querySelectorAll('.reveal');

  const showImmediately = (element) => element.classList.add('is-visible');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach(showImmediately);
  } else {
    // Escalonado suave entre elementos hermanos (maximo 280ms)
    revealItems.forEach((element) => {
      const parent = element.parentElement;
      if (!parent) return;
      const siblings = Array.from(parent.children).filter((child) =>
        child.classList.contains('reveal')
      );
      const index = Math.max(0, siblings.indexOf(element));
      element.style.setProperty('--reveal-delay', `${Math.min(index, 4) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          showImmediately(entry.target);
          currentObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    revealItems.forEach((element) => observer.observe(element));
  }

  // Marca la pagina actual en el menu comun
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#templatemo_main_nav .nav-link').forEach((link) => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  // Mantiene aria-current sincronizado con el indicador activo del carrusel.
  // Bootstrap 5.0.0-beta1 solo cambia la clase .active.
  const heroCarousel = document.getElementById('template-mo-zay-hero-carousel');
  if (heroCarousel) {
    const indicators = [...heroCarousel.querySelectorAll('.carousel-indicators [data-bs-slide-to]')];
    const syncCarouselIndicators = () => {
      indicators.forEach((indicator) => {
        if (indicator.classList.contains('active')) {
          indicator.setAttribute('aria-current', 'true');
        } else {
          indicator.removeAttribute('aria-current');
        }
      });
    };
    heroCarousel.addEventListener('slid.bs.carousel', syncCarouselIndicators);
    syncCarouselIndicators();
  }

  // Respuesta visual minima al presionar botones
  document.querySelectorAll('.btn').forEach((button) => {
    button.addEventListener('pointerdown', () => button.classList.add('is-pressed'));
    ['pointerup', 'pointerleave', 'pointercancel'].forEach((eventName) => {
      button.addEventListener(eventName, () => button.classList.remove('is-pressed'));
    });
  });
})();
