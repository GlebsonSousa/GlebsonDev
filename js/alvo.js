const alvo = {
  elemento: null,
  x: 0,
  y: 0,
  destinoX: 0,
  destinoY: 0,

  ativar() {
    const temMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const semMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!temMouse || semMovimento) return;

    this.elemento = document.getElementById("alvo");

    document.addEventListener("mousemove", (evento) => {
      this.destinoX = evento.clientX;
      this.destinoY = evento.clientY;
      this.elemento.classList.add("visivel");

      const clicavel = evento.target.closest("a, button, input, textarea, .cordao");
      this.elemento.classList.toggle("sobre-link", Boolean(clicavel));
    });

    document.addEventListener("mouseleave", () => {
      this.elemento.classList.remove("visivel");
    });

    this.animar();
  },

  animar() {
    this.x += (this.destinoX - this.x) * 0.15;
    this.y += (this.destinoY - this.y) * 0.15;
    this.elemento.style.transform = `translate(${this.x}px, ${this.y}px)`;
    requestAnimationFrame(() => this.animar());
  }
};
