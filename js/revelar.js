const revelar = {
  ativar() {
    const elementos = document.querySelectorAll(".revelar");

    if (!("IntersectionObserver" in window)) {
      elementos.forEach((elemento) => elemento.classList.add("visivel"));
      return;
    }

    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        entrada.target.classList.add("visivel");
        observador.unobserve(entrada.target);
      });
    }, { threshold: 0.12 });

    elementos.forEach((elemento) => observador.observe(elemento));
  }
};
